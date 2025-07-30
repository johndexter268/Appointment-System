'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { format, startOfToday, isToday } from 'date-fns';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_STAFF_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_STAFF_TEMPLATE_ID || '';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Updated time slots from 10:30 AM to 6:30 PM with 30-minute intervals
const timeSlots = [
  '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM'
];

// Helper function to convert time to 24-hour format for API
const to24Hour = (time12h: string) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  
  if (modifier === 'PM') {
    hours = String(parseInt(hours, 10) + 12);
  }
  
  return `${hours.padStart(2, '0')}:${minutes}`;
};

export default function BookingForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(timeSlots);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Fetch available slots when date changes
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (!date) return;
      
      setIsLoadingSlots(true);
      try {
        const response = await fetch(`/api/slots?date=${format(date, 'yyyy-MM-dd')}`);
        const data = await response.json();
        
        if (response.ok) {
          const bookedSlots = new Set(data.bookedSlots.map((slot: string) => {
            // Convert 24h slots from API to 12h format
            const hour = parseInt(slot.split(':')[0]);
            const minute = slot.split(':')[1];
            if (hour === 0) return `12:${minute} AM`;
            if (hour < 12) return `${hour}:${minute} AM`;
            if (hour === 12) return `12:${minute} PM`;
            return `${hour-12}:${minute} PM`;
          }));
          setAvailableSlots(timeSlots.filter(slot => !bookedSlots.has(slot)));
        }
      } catch (error) {
        console.error('Error fetching slots:', error);
        toast.error('Failed to load available time slots. Please try again.');
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchAvailableSlots();
  }, [date]);

  const sendConfirmationEmail = async (date: Date, time: string, email: string) => {
    try {
      // Send email to client
      const clientTemplateParams = {
        to_email: email,
        to_name: email.split('@')[0],
        appointment_date: format(date, 'MMMM d, yyyy'),
        appointment_time: time
      };

      // Send email to staff
      const staffTemplateParams = {
        client_email: email,
        appointment_date: format(date, 'MMMM d, yyyy'),
        appointment_time: time
      };

      const [clientResult, staffResult] = await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          clientTemplateParams,
          EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_STAFF_TEMPLATE_ID,
          staffTemplateParams,
          EMAILJS_PUBLIC_KEY
        )
      ]);

      console.log('Emails sent successfully:', { clientResult, staffResult });
      return { clientResult, staffResult };
    } catch (error: any) {
      console.error('Failed to send email:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        name: error.name
      });
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !email || !selectedTime) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      // First try to send the confirmation email - if this fails, we won't book the appointment
      try {
        await sendConfirmationEmail(date, selectedTime, email);
      } catch (emailError: any) {
        console.error('Email sending failed:', emailError);
        toast.error(`Cannot book appointment: Email service unavailable. Please try again later.`);
        setIsLoading(false);
        return; // Stop the booking process if email fails
      }

      // Now book the appointment since email verification passed
      const bookingResponse = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: format(date, 'yyyy-MM-dd'),
          time: to24Hour(selectedTime),
          email,
        }),
      });

      if (!bookingResponse.ok) {
        throw new Error('Booking failed');
      }

      // Everything succeeded
      toast.success('Appointment booked and confirmation emails sent!');
      
      // Show redirecting state
      setIsRedirecting(true);
      router.push(`/confirmation?date=${format(date, 'yyyy-MM-dd')}&time=${selectedTime}&email=${encodeURIComponent(email)}`);

    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
      {isRedirecting && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#14b5ff]"></div>
          <p className="mt-4 text-[#14b5ff] font-medium">Redirecting to your appointment confirmation...</p>
        </div>
      )}
      <div className="space-y-6">
        <Label htmlFor="date" className="text-2xl font-semibold text-center block text-[#14b5ff]">Select Date</Label>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setSelectedTime('');
            }}
            className="rounded-xl border-2 border-[#d9e7fb] p-6 bg-white shadow-lg"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-lg font-semibold text-[#14b5ff]",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                buttonVariants({ variant: "outline" }),
                "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 border-[#d9e7fb] hover:bg-[#d9e7fb]/20"
              ),
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-[#14b5ff] rounded-md w-10 font-normal text-[0.9rem]",
              row: "flex w-full mt-2",
              cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
              day: "h-10 w-10 p-0 font-normal hover:bg-[#d9e7fb] rounded-full text-[#1472ff]",
              day_selected: "bg-[#14b5ff] text-white hover:bg-[#d9e7fb] hover:text-white focus:bg-[#14b5ff] focus:text-white rounded-full",
              day_today: "bg-[#d9e7fb] text-[#14b5ff] rounded-full",
              day_outside: "text-gray-400 opacity-50",
              day_disabled: "text-gray-400 opacity-50",
              day_range_middle: "aria-selected:bg-[#14b5ff] aria-selected:text-[#14b5ff]",
              day_hidden: "invisible",
            }}
            disabled={(date) => {
              const today = startOfToday();
              const thirtyDaysFromNow = new Date(today);
              thirtyDaysFromNow.setDate(today.getDate() + 30);
              return date < today || date > thirtyDaysFromNow;
            }}
          />
        </div>
      </div>

      {date && (
        <div className="space-y-6">
          <Label className="text-2xl font-semibold text-center block text-[#14b5ff]">Select Time</Label>
          
          {isLoadingSlots ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#14b5ff]"></div>
              <p className="mt-4 text-[#14b5ff]">Loading available time slots...</p>
            </div>
          ) : availableSlots.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {availableSlots.map((time) => (
                <Button
                  key={time}
                  type="button"
                  variant={selectedTime === time ? 'default' : 'outline'}
                  className={`rounded-full text-base py-6 ${
                    selectedTime === time 
                      ? 'bg-gradient-to-r from-[#69a5ff] to-[#14b5ff] text-white hover:from-[#14b5ff] hover:to-[#69a5ff]' 
                      : 'border-2 border-[#14b5ff] hover:bg-[#14b5ff]/20 text-[#14b5ff] hover:text-[#1472ff]'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-[#14b5ff] font-medium">No available appointments for this date.</p>
              <p className="text-[#14b5ff]/70 mt-2">Please select another date.</p>
            </div>
          )}
        </div>
      )}

      {date && selectedTime && (
        <div className="space-y-6">
          <Label htmlFor="email" className="text-2xl font-semibold text-center block text-[#14b5ff]">Email</Label>
          <div className="max-w-md mx-auto">
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full text-lg py-6 border-2 border-[#14b5ff] focus:border-none focus:ring-0 placeholder-[#2e2e2e] text-[#1472ff]"
              required
            />
          </div>
        </div>
      )}

      {date && selectedTime && email && (
        <div className="max-w-md mx-auto pt-4">
          <Button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#69a5ff] to-[#14b5ff] hover:from-[#14b5ff] hover:to-[#69a5ff] text-lg py-6 px-12 text-white font-semibold shadow-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                <span>Processing...</span>
              </div>
            ) : 'Book Appointment'}
          </Button>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#69a5ff] bg-[#69a5ff]/30 p-4 rounded-lg">
              Your privacy is important to us. All information and test results are kept strictly confidential.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}