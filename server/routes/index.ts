import { initTRPC } from '@trpc/server';

import { charactersRouter } from '@/server/routes/characters/router';

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(charactersRouter);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
