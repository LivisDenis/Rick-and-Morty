import { z } from "zod";

import { trpc } from '../utils';

export const exampleRouter = trpc.router({
    hello: trpc.procedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
});