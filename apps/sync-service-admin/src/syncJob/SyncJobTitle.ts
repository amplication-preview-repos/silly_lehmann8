import { SyncJob as TSyncJob } from "../api/syncJob/SyncJob";

export const SYNCJOB_TITLE_FIELD = "id";

export const SyncJobTitle = (record: TSyncJob): string => {
  return record.id?.toString() || String(record.id);
};
