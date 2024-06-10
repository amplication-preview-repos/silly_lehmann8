import { SyncJobWhereInput } from "./SyncJobWhereInput";
import { SyncJobOrderByInput } from "./SyncJobOrderByInput";

export type SyncJobFindManyArgs = {
  where?: SyncJobWhereInput;
  orderBy?: Array<SyncJobOrderByInput>;
  skip?: number;
  take?: number;
};
