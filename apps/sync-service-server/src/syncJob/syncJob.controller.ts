import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SyncJobService } from "./syncJob.service";
import { SyncJobControllerBase } from "./base/syncJob.controller.base";

@swagger.ApiTags("syncJobs")
@common.Controller("syncJobs")
export class SyncJobController extends SyncJobControllerBase {
  constructor(protected readonly service: SyncJobService) {
    super(service);
  }
}
