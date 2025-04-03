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

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

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
      const templateParams = {
        to_email: email,
        to_name: email.split('@')[0],
        appointment_date: format(date, 'MMMM d, yyyy'),
        appointment_time: time
      };

      console.log('Sending email with:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        templateParams,
        publicKey: EMAILJS_PUBLIC_KEY
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      return result;
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
        toast.success('Appointment booked and confirmation email sent!');
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto p-6">
      <div className="space-y-4">
        <Label htmlFor="date" className="text-xl text-center block">Select Date</Label>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setSelectedTime('');
            }}
            className="rounded-lg border-2 border-pink-200 p-4 bg-white shadow-lg"
            classNames={{
              day_selected: "bg-pink-500 text-white hover:bg-pink-600",
              day_today: "bg-pink-100 text-pink-900",
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
        <div className="space-y-4">
          <Label className="text-xl text-center block">Select Time</Label>
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
            {availableSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? 'default' : 'outline'}
                className={`rounded-full text-lg py-6 ${
                  selectedTime === time ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'hover:bg-pink-100'
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
        <div className="space-y-4 max-w-md mx-auto">
          <Label htmlFor="email" className="text-xl text-center block">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full text-lg py-6"
            required
          />
        </div>
      )}

      {date && selectedTime && email && (
        <div className="max-w-md mx-auto">
          <Button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-lg py-6"
            disabled={isLoading}
          >
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </Button>
        </div>
      )}
    </form>
  );
} 