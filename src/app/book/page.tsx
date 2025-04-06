import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

export default function BookPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 mt-5">
        <div className="relative w-full max-w-2xl mx-auto h-32 pt-8">
          <Image
            src="/logo.png"
            alt="HiveLink - HIV Testing Services"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-transparent bg-clip-text">
              Book Your Appointment
            </h1>
            <p className="text-[#FF69B4] text-center mb-8">
              Schedule your confidential HIV testing appointment at your preferred time.
            </p>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border-2 border-[#FF69B4]">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 