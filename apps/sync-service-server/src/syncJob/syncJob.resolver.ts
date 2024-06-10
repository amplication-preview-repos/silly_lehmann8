import * as graphql from "@nestjs/graphql";
import { SyncJobResolverBase } from "./base/syncJob.resolver.base";
import { SyncJob } from "./base/SyncJob";
import { SyncJobService } from "./syncJob.service";

@graphql.Resolver(() => SyncJob)
export class SyncJobResolver extends SyncJobResolverBase {
  constructor(protected readonly service: SyncJobService) {
    super(service);
  }
}
