'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-amber-600 text-transparent bg-clip-text">
              HIV Testing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Confidential, quick, and professional HIV testing in a safe and supportive environment.
              Your health and privacy are our top priorities.
            </p>
            <Link href="/book">
              <Button className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-lg py-6 px-12 text-white">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learn More Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Learn More about HIV</h2>
              <p className="text-gray-600 mb-6">
                Get accurate, up-to-date information about HIV testing, prevention, and treatment options. 
                Understanding is the first step towards better health.
              </p>
              <Link href="/learn">
                <Button variant="outline" className="w-full rounded-xl border-2 border-pink-200 hover:bg-pink-50">
                  Read More
                </Button>
              </Link>
            </div>

            {/* Contact Us Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Need support or have questions? Our caring team is here to help. 
                Reach out to us anytime through our secure channels.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full rounded-xl border-2 border-purple-200 hover:bg-purple-50">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Our Purpose Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-105">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Purpose</h2>
              <p className="text-gray-600 mb-6">
                We provide confidential, judgment-free HIV testing services to support our community's health. 
                Your privacy and well-being are our top priorities.
              </p>
              <Link href="/about">
                <Button variant="outline" className="w-full rounded-xl border-2 border-orange-200 hover:bg-orange-50">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Confidential Testing',
                description: 'Your privacy is guaranteed with our strict confidentiality protocols',
                icon: (
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: 'Quick Results',
                description: 'Get your results within 20-30 minutes of testing',
                icon: (
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Professional Staff',
                description: 'Experienced and caring healthcare professionals',
                icon: (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: 'Support Services',
                description: 'Comprehensive counseling and support available',
                icon: (
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="h-12 w-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">© 2024 HIV Testing Services. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Your privacy and health are our priorities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
