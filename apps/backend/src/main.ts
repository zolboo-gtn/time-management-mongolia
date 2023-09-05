import { NestFactory } from "@nestjs/core";

import { AppModule } from "@/modules/app/app.module";
import { TrpcRouter } from "@/modules/trpc/trpc.router";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);

  const configService = app.get("ConfigService");
  const port = configService.get("app.port");

  await app.listen(port);
};
bootstrap();
