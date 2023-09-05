import { Module } from "@nestjs/common";

import { TrpcRouter } from "./trpc.router";
import { TrpcService } from "./trpc.service";

@Module({
  imports: [],
  providers: [TrpcRouter, TrpcService],
})
export class TrpcModule {}
