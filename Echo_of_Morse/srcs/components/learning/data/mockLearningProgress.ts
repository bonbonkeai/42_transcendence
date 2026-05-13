import type { UserLearningProgress } from "@/types/learning";

export const mockLearningProgress: UserLearningProgress = {
  currentLevel: 3,
  unlockedLevels: [1, 2, 3],
  completedLevels: [1, 2],
  globalAccuracy: 72,
  averageReactionTime: 1.8,
  totalSessions: 12,
  todayLearningMinutes: 18,
  weakCharacters: ["R", "H", "Q"],
};

//这个文件之后可以删掉，换成后端 API 返回的数据。