export type GoalType = {
  id: string;
  userId: string;
  title: string;
  description?: string;
  notes?: string;
  completed: boolean;
  limitDate: Date;
  createdAt: Date;
  completedAt?: Date;
  updatedAt?: Date;
};
