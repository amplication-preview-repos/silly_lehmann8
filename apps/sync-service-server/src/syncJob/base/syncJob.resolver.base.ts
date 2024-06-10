/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SyncJob } from "./SyncJob";
import { SyncJobCountArgs } from "./SyncJobCountArgs";
import { SyncJobFindManyArgs } from "./SyncJobFindManyArgs";
import { SyncJobFindUniqueArgs } from "./SyncJobFindUniqueArgs";
import { CreateSyncJobArgs } from "./CreateSyncJobArgs";
import { UpdateSyncJobArgs } from "./UpdateSyncJobArgs";
import { DeleteSyncJobArgs } from "./DeleteSyncJobArgs";
import { SyncJobService } from "../syncJob.service";
@graphql.Resolver(() => SyncJob)
export class SyncJobResolverBase {
  constructor(protected readonly service: SyncJobService) {}

  async _syncJobsMeta(
    @graphql.Args() args: SyncJobCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SyncJob])
  async syncJobs(
    @graphql.Args() args: SyncJobFindManyArgs
  ): Promise<SyncJob[]> {
    return this.service.syncJobs(args);
  }

  @graphql.Query(() => SyncJob, { nullable: true })
  async syncJob(
    @graphql.Args() args: SyncJobFindUniqueArgs
  ): Promise<SyncJob | null> {
    const result = await this.service.syncJob(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SyncJob)
  async createSyncJob(
    @graphql.Args() args: CreateSyncJobArgs
  ): Promise<SyncJob> {
    return await this.service.createSyncJob({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SyncJob)
  async updateSyncJob(
    @graphql.Args() args: UpdateSyncJobArgs
  ): Promise<SyncJob | null> {
    try {
      return await this.service.updateSyncJob({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SyncJob)
  async deleteSyncJob(
    @graphql.Args() args: DeleteSyncJobArgs
  ): Promise<SyncJob | null> {
    try {
      return await this.service.deleteSyncJob(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}