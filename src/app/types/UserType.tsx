export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  lastLoginAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
};
