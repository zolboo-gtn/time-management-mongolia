import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

import { backend } from "@/configs/default";

import { type AppRouter } from "../../../backend/src/modules/trpc/app_router";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${backend.url}/trpc`,
    }),
  ],
});
