import BookingForm from '@/components/BookingForm';

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-pink-600">
          Book Your Appointment
        </h1>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <BookingForm />
        </div>
      </div>
    </div>
  );
} 