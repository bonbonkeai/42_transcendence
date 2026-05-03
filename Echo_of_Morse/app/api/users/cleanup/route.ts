// server calls it everty 30 seconds
//Kick out users without heartbeat more than 60 seconds

import { NextResponse } from 'next/server';
import { prisma } from '@/server/prisma';

export async function POST() {
  const cutoff = new Date(Date.now() - 60000);
  
  await prisma.user.updateMany({
    where: {
      isOnline: true,
      lastSeen: { lt: cutoff }  // lt = less than
    },
    data: { isOnline: false }
  });

  return NextResponse.json({ ok: true });
}