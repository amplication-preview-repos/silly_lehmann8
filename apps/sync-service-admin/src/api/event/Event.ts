import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
