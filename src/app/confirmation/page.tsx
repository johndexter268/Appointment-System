'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { pdf } from '@react-pdf/renderer';
import { AppointmentPDF } from '@/components/AppointmentPDF';

// Dynamically import PDFViewer to avoid SSR issues
const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFViewer),
  { ssr: false }
);

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const email = searchParams.get('email');

  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(
        <AppointmentPDF
          date={date || ''}
          time={time || ''}
          email={email || ''}
        />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `appointment-confirmation-${date}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-pink-600">
          Appointment Confirmed!
        </h1>

        <div className="space-y-4 text-lg">
          <p>Your appointment has been successfully booked for:</p>
          <div className="bg-pink-50 rounded-lg p-6 space-y-2">
            <p className="font-semibold">
              Date: {date ? format(new Date(date), 'MMMM d, yyyy') : 'N/A'}
            </p>
            <p className="font-semibold">
              Time: {time || 'N/A'}
            </p>
            <p className="font-semibold">
              Email: {email || 'N/A'}
            </p>
          </div>

          <div className="bg-pink-100 rounded-lg p-6 mt-4">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              Important Instructions:
            </h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li>• Please arrive 15 minutes before your scheduled appointment time</li>
              <li>• Bring a valid form of identification</li>
              <li>• No fasting is required for this test</li>
              <li>• The test will take approximately 30 minutes</li>
              <li>• Results will be available within 20-30 minutes</li>
              <li>• Please wear a face mask during your visit</li>
              <li>• If you feel unwell on the day, please reschedule your appointment</li>
            </ul>
          </div>

          <div className="bg-purple-100 rounded-lg p-6 mt-4">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">
              Privacy Notice:
            </h2>
            <p className="text-gray-700 text-left">
              Your privacy is important to us. All information and test results are kept strictly confidential. 
              Your email is only used for appointment confirmation and will not be shared with third parties.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link href="/">
              <Button className="rounded-full bg-gradient-to-r from-[#ff8cd3] to-[#ff66c4] hover:from-[#ff66c4] hover:to-[#e14aaa] text-lg py-6 px-8">
                Return to Home
              </Button>
            </Link>
            <Button
              onClick={handleDownloadPDF}
              className="rounded-full bg-gradient-to-r from-[#ff8cd3] to-[#ff66c4] hover:from-[#ff66c4] hover:to-[#e14aaa] text-lg py-6 px-8 text-white"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-pink-300 rounded-full animate-pulse mx-auto" />
        <div className="h-8 bg-pink-100 rounded animate-pulse" />
        <div className="space-y-4">
          <div className="h-4 bg-pink-50 rounded animate-pulse" />
          <div className="h-32 bg-pink-50 rounded animate-pulse" />
          <div className="h-48 bg-pink-100 rounded animate-pulse" />
          <div className="h-24 bg-purple-100 rounded animate-pulse" />
          <div className="h-12 bg-pink-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <Suspense fallback={<LoadingState />}>
        <ConfirmationContent />
      </Suspense>
    </div>
  );
} 