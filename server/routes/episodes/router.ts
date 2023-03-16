import { EPISODES_INPUTS } from '@/server/routes/episodes/schemas';
import { getEpisodes, getEpisode, getEpisodeMultiple } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';

export const episodesRouter = trpc.router({
  getEpisodesInfo: trpc.procedure.input(EPISODES_INPUTS.getEpisodesInfo).query(async () => {
    const { info } = await getEpisodes();

    return wrapSuccess(info);
  }),
  getEpisodeMultiple: trpc.procedure
    .input(EPISODES_INPUTS.getEpisodeMultiple)
    .query(async ({ input }) => {
      const episodes = await getEpisodeMultiple({ params: { multiple: input?.params?.multiple } });

      if (!Array.isArray(episodes)) {
        return wrapSuccess([episodes]);
      }

      return wrapSuccess(episodes);
    }),
  getEpisodes: trpc.procedure.input(EPISODES_INPUTS.getEpisodes).query(async ({ input }) => {
    const episodes = await getEpisodes({ params: { ...input?.params } });

    return wrapSuccess(episodes);
  }),
  getEpisode: trpc.procedure.input(EPISODES_INPUTS.getEpisode).query(async ({ input }) => {
    const episode = await getEpisode({ params: { id: input.params.id } });

    return wrapSuccess(episode);
  })
});
