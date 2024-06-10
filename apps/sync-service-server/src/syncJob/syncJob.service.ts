import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SyncJobServiceBase } from "./base/syncJob.service.base";

@Injectable()
export class SyncJobService extends SyncJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
