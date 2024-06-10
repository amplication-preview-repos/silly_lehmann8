export type SyncJob = {
  createdAt: Date;
  id: string;
  lastRunTime: Date | null;
  retryCount: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
