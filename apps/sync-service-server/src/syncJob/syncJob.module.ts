import { Module } from "@nestjs/common";
import { SyncJobModuleBase } from "./base/syncJob.module.base";
import { SyncJobService } from "./syncJob.service";
import { SyncJobController } from "./syncJob.controller";
import { SyncJobResolver } from "./syncJob.resolver";

@Module({
  imports: [SyncJobModuleBase],
  controllers: [SyncJobController],
  providers: [SyncJobService, SyncJobResolver],
  exports: [SyncJobService],
})
export class SyncJobModule {}
