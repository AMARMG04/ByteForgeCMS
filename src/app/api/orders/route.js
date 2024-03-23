// pages/api/most-frequently-bought.js
import { NextResponse } from 'next/server';
import { connectToDatabase, disconnectFromDatabase } from '@/app/lib/database';

export const GET = async () => {
  try {
    const client = await connectToDatabase();
    const db = client.db('byteforge');
    const orders = await db.collection('orders').find().toArray();
    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);
    return NextResponse.error(new Error('Failed to fetch data'));
  }
};
