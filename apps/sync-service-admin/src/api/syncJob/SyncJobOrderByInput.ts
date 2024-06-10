import { SortOrder } from "../../util/SortOrder";

export type SyncJobOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastRunTime?: SortOrder;
  retryCount?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
