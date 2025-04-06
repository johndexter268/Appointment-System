'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
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
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="relative w-full max-w-2xl mx-auto h-40">
                <Image
                  src="/logo.png"
                  alt="HiveLink - HIV Testing Services"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <p className="text-xl text-[#FF69B4] max-w-2xl mx-auto">
                Confidential, quick, and professional HIV testing in a safe and supportive environment.
                Your health and privacy are our top priorities.
              </p>
              <Link href="/book">
                <Button className="rounded-full mt-10 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] hover:from-[#FF1493] hover:to-[#FF69B4] text-lg py-6 px-12 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Learn More Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105 border-2 border-[#FF69B4] group flex flex-col h-[350px]">
                <div className="h-12 w-12 bg-[#FF69B4] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#FF69B4] mb-4">Learn More about HIV</h2>
                <p className="text-[#FF69B4]/80 flex-grow">
                  Get accurate, up-to-date information about HIV testing, prevention, and treatment options. 
                  Understanding is the first step towards better health.
                </p>
                <Link href="/learn" className="mt-6">
                  <Button variant="outline" className="w-full rounded-xl border-2 border-[#FF69B4] hover:bg-[#FF69B4]/10 text-[#FF69B4] transition-all duration-300">
                    Read More
                  </Button>
                </Link>
              </div>

              {/* Contact Us Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105 border-2 border-[#FF69B4] group flex flex-col h-[350px]">
                <div className="h-12 w-12 bg-[#FF69B4] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#FF69B4] mb-4">Contact Us</h2>
                <p className="text-[#FF69B4]/80 flex-grow">
                  Need support or have questions? Our caring team is here to help. 
                  Reach out to us anytime through our secure channels.
                </p>
                <Link href="mailto:hivelinktestservices@gmail.com" className="mt-6">
                  <Button variant="outline" className="w-full rounded-xl border-2 border-[#FF69B4] hover:bg-[#FF69B4]/10 text-[#FF69B4] transition-all duration-300">
                    hivelinktestservices@gmail.com
                  </Button>
                </Link>
              </div>

              {/* Our Purpose Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105 border-2 border-[#FF69B4] group flex flex-col h-[350px]">
                <div className="h-12 w-12 bg-[#FF69B4] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#FF69B4] mb-4">Our Purpose</h2>
                <p className="text-[#FF69B4]/80 flex-grow">
                  We provide confidential, judgment-free HIV testing services to support our community. 
                  Your privacy and well-being are our top priorities.
                </p>
                <Link href="/about" className="mt-6">
                  <Button variant="outline" className="w-full rounded-xl border-2 border-[#FF69B4] hover:bg-[#FF69B4]/10 text-[#FF69B4] transition-all duration-300">
                    About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#FF69B4]">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Confidential Testing',
                  description: 'Your privacy is guaranteed with our strict confidentiality protocols',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: 'Quick Results',
                  description: 'Get your results within 20-30 minutes of testing',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Professional Staff',
                  description: 'Experienced and caring healthcare professionals',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Support Services',
                  description: 'Comprehensive counseling and support available',
                  icon: (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border-2 border-[#FF69B4]">
                  <div className="h-12 w-12 bg-[#FF69B4] rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#FF69B4]">{feature.title}</h3>
                  <p className="text-[#FF69B4]/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/90 backdrop-blur-sm py-12 border-t-2 border-[#FF69B4]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-[#FF69B4]">© 2024 HIV Testing Services. All rights reserved.</p>
              <p className="text-[#FF69B4]/70 mt-2">Your privacy and health are our priorities.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
