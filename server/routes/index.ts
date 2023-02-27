import { initTRPC } from '@trpc/server';
import {exampleRouter} from "@/server/routes/example";

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(
    exampleRouter
);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
