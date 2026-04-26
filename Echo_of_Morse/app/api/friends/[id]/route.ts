// API Route: /api/friends/[id]
// This file handles actions on a specific friend request.

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'

// PUT /api/friends/[id] - Accept or reject a friend request
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status } = body

    if (!status || !['ACCEPTED', 'BLOCKED'].includes(status)) {
      return NextResponse.json(
        { error: 'Status must be ACCEPTED or BLOCKED' },
        { status: 400 }
      )
    }

    const friendship = await prisma.friendship.update({
      where: { id: parseInt(params.id) },
      data: { status: status }
    })

    return NextResponse.json(friendship)

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/friends/[id] - Remove a friend or cancel a request
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.friendship.delete({
      where: { id: parseInt(params.id) }
    })

    return NextResponse.json(
      { message: 'Friendship deleted successfully' },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
