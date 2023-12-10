import connectMongoDB from '@/libs/mongodb'
import Review from '@/models/result'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description } = await request.json()
  await connectMongoDB()
  await Review.create({ title, description })
  return NextResponse.json(
    { message: '주문이 완료되었습니다!!' },
    { status: 201 }
  )
}

export async function GET() {
  await connectMongoDB()
  const result = await Result.find()
  return NextResponse.json({ result })
}
