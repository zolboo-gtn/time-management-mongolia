import { NestFactory } from "@nestjs/core";

import { AppModule } from "@/modules/app/app.module";
import { TrpcRouter } from "@/modules/trpc/trpc.router";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const trpc = app.get(TrpcRouter);
  trpc.applyMiddleware(app);

  await app.listen(3001);
};
bootstrap();
