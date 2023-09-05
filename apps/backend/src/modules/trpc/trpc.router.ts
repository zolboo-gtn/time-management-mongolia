import { INestApplication, Injectable } from "@nestjs/common";
import * as trpcExpress from "@trpc/server/adapters/express";

import { AppRouter } from "./app_router";
import { TrpcService } from "./trpc.service";

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpcService: TrpcService) {}

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({
        router: AppRouter(this.trpcService.trpc),
      }),
    );
  }
}
