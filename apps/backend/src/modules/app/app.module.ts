import { Module } from "@nestjs/common";

import { TrpcModule } from "@/modules/trpc/trpc.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [TrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
