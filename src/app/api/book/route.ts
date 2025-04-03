import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { date, time, email } = await request.json();

    // Check if the slot is available
    const [existingBookings] = await pool.execute(
      'SELECT * FROM appointments WHERE date = ? AND time = ?',
      [date, time]
    );

    if (Array.isArray(existingBookings) && existingBookings.length > 0) {
      return NextResponse.json(
        { error: 'This time slot is no longer available' },
        { status: 409 }
      );
    }

    // Book the appointment
    await pool.execute(
      'INSERT INTO appointments (date, time, email) VALUES (?, ?, ?)',
      [date, time, email]
    );

    return NextResponse.json(
      { message: 'Appointment booked successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
} 