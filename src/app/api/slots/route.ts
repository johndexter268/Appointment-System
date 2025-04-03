import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    // Get booked slots for the date
    const [bookedSlots] = await pool.execute(
      'SELECT time FROM appointments WHERE date = ?',
      [date]
    );

    return NextResponse.json({
      bookedSlots: Array.isArray(bookedSlots) 
        ? bookedSlots.map((slot: any) => slot.time)
        : []
    });
  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
} 