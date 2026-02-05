export type UserType = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  lastLoginAt?: Date | null;
  createdAt: Date;
  updatedAt?: Date;
};
