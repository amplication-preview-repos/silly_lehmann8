import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SyncJobWhereInput = {
  id?: StringFilter;
  lastRunTime?: DateTimeNullableFilter;
  retryCount?: IntNullableFilter;
  status?: "Option1";
};
