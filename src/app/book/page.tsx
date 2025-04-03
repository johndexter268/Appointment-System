import BookingForm from '@/components/BookingForm';

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            Schedule your confidential HIV testing appointment. Choose a date and time that works best for you.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
} 