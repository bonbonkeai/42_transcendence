import { PrismaClient } from "@prisma/client";

// export const prisma = new PrismaClient();

export const prisma = {
  // 返回空对象，避免初始化失败
} as any;