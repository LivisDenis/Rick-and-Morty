import { initTRPC } from '@trpc/server';

import { charactersRouter } from '@/server/routes/characters/router';
import { episodesRouter } from '@/server/routes/episodes/router';
import { gameRouter } from '@/server/routes/game/router';
import { locationsRouter } from '@/server/routes/locations/router';

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(
  charactersRouter,
  locationsRouter,
  episodesRouter,
  gameRouter
);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
