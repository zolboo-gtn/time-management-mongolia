import { initTRPC } from "@trpc/server";
import { z } from "zod";

export const AppRouter = (trpc: ReturnType<typeof initTRPC.create>) => {
  return trpc.router({
    hello: trpc.procedure
      .input(
        z.object({
          name: z.string().optional(),
        }),
      )
      .query(({ input }) => {
        const { name } = input;
        return {
          greeting: `Hello ${name ? name : `Bilbo`}`,
        };
      }),
  });
};
export type AppRouter = ReturnType<typeof AppRouter>;
