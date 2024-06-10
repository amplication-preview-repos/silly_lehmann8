import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
