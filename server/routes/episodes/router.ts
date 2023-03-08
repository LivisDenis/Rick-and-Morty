import { EPISODES_INPUTS } from '@/server/routes/episodes/schemas';
import { getEpisodes, getEpisode } from '@/utils/api';

import { trpc, wrapSuccess } from '../../utils';

export const episodesRouter = trpc.router({
  getEpisodesInfo: trpc.procedure.input(EPISODES_INPUTS.getEpisodesInfo).query(async () => {
    const { info } = await getEpisodes();

    return wrapSuccess(info);
  }),
  getEpisodes: trpc.procedure.input(EPISODES_INPUTS.getEpisodes).query(async () => {
    const episodes = await getEpisodes();

    return wrapSuccess(episodes);
  }),
  getEpisode: trpc.procedure.input(EPISODES_INPUTS.getEpisode).query(async ({ input }) => {
    const episode = await getEpisode({ params: { id: input.params.id } });

    return wrapSuccess(episode);
  })
});
