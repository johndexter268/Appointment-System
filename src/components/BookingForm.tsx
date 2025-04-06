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

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
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

  // Fetch available slots when date changes
  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (!date) return;
      
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
      // First, try to book the appointment
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

      // Then, try to send the confirmation email
      try {
        await sendConfirmationEmail(date, selectedTime, email);
        toast.success('Appointment booked and confirmation emails sent!');
      } catch (emailError: any) {
        console.error('Email sending failed:', emailError);
        toast.warning(`Appointment booked but email failed: ${emailError.message || 'Unknown error'}`);
      }

      router.push(`/confirmation?date=${format(date, 'yyyy-MM-dd')}&time=${selectedTime}&email=${encodeURIComponent(email)}`);

    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
      <div className="space-y-6">
        <Label htmlFor="date" className="text-2xl font-semibold text-center block text-[#C43670]">Select Date</Label>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setSelectedTime('');
            }}
            className="rounded-xl border-2 border-[#FBD9E5] p-6 bg-white shadow-lg"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-lg font-semibold text-[#C43670]",
              nav: "space-x-1 flex items-center",
              nav_button: cn(
                buttonVariants({ variant: "outline" }),
                "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 border-[#FBD9E5] hover:bg-[#FBD9E5]/20"
              ),
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-[#C43670] rounded-md w-10 font-normal text-[0.9rem]",
              row: "flex w-full mt-2",
              cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
              day: "h-10 w-10 p-0 font-normal hover:bg-[#FBD9E5] rounded-full",
              day_selected: "bg-[#F285AF] text-white hover:bg-[#C43670] hover:text-white focus:bg-[#F285AF] focus:text-white rounded-full",
              day_today: "bg-[#FBD9E5] text-[#C43670] rounded-full",
              day_outside: "text-gray-400 opacity-50",
              day_disabled: "text-gray-400 opacity-50",
              day_range_middle: "aria-selected:bg-[#FBD9E5] aria-selected:text-[#C43670]",
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
          <Label className="text-2xl font-semibold text-center block text-[#C43670]">Select Time</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {availableSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? 'default' : 'outline'}
                className={`rounded-full text-base py-6 ${
                  selectedTime === time 
                    ? 'bg-gradient-to-r from-[#ff8cd3] to-[#ff66c4] text-white hover:from-[#ff66c4] hover:to-[#e14aaa]' 
                    : 'border-2 border-[#FBD9E5] hover:bg-[#FBD9E5]/20 text-[#C43670]'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}

      {date && selectedTime && (
        <div className="space-y-6">
          <Label htmlFor="email" className="text-2xl font-semibold text-center block text-[#C43670]">Email</Label>
          <div className="max-w-md mx-auto">
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full text-lg py-6 border-2 border-[#FBD9E5] focus:border-[#F285AF] focus:ring-[#F285AF] placeholder-[#C43670]/50"
              required
            />
          </div>
        </div>
      )}

      {date && selectedTime && email && (
        <div className="max-w-md mx-auto pt-4">
          <Button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#ff8cd3] to-[#ff66c4] hover:from-[#ff66c4] hover:to-[#e14aaa] text-lg py-6 text-white font-semibold shadow-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </Button>
          <div className="mt-6 text-center">
            <p className="text-sm text-[#ff66c4] bg-[#ff8cd3]/30 p-4 rounded-lg">
              Your privacy is important to us. All information and test results are kept strictly confidential.
            </p>
          </div>
        </div>
      )}
    </form>
  );
} 