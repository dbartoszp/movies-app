import axios from 'axios';
import { useGetActorReturnSchema } from '../schemas/useGetActor.schema';

const SEARCH_ACTOR_BY_ID_URL = 'https://imdb-api.com/en/API/Name/';

export const getActorById = async (id: string) => {
  const res = await axios.get(
    `${SEARCH_ACTOR_BY_ID_URL}${process.env.NEXT_PUBLIC_IMDB_API_KEY}/${id}`
  );
  const actor = useGetActorReturnSchema.safeParse(res.data);

  if (actor.success) {
    return actor.data;
  }
  throw actor.error;
};
