import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { configuration, validate } from "@/config/configuration";
import { TrpcModule } from "@/modules/trpc/trpc.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
