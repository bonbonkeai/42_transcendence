import { prisma } from "@/server/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await prisma.progress.create({
    data: {
      userId: body.userId,
      score: body.score,
    },
  });

  return Response.json({ success: true, data: result });
}