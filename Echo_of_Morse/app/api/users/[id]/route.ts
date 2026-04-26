// API Route: /api/users/[id]
// This file handles all HTTP requests for a specific user by their id.
// It allows the frontend to retrieve and update user information.
// The [id] in the path is a dynamic parameter, meaning any number can be passed.
// Example: GET /api/users/123 will return the information of user with id 123.

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/db'


// GET /api/users/[id] - get user information
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      select: {
        id: true,
        username: true,
        email: true,
        avatarUrl: true,
        isOnline: true,
        createdAt: true,
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}



// PUT /api/users/[id] - Update user information (avatar, email)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get the data from the request body
    const body = await request.json()
    const { email, avatarUrl } = body

    // Update the user in the database
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: {
        ...(email && { email }),
        ...(avatarUrl && { avatarUrl }),
      },
      select: {
        id: true,
        username: true,
        email: true,
        avatarUrl: true,
        isOnline: true,
      }
    })

    return NextResponse.json(updatedUser)

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}