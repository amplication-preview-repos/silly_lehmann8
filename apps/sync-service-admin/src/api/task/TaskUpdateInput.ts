import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
