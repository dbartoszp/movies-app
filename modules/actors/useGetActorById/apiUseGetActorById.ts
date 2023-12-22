import axios from 'axios';
import { useGetActorReturnSchema } from '../schemas/useGetActor.schema';

const SEARCH_ACTOR_BY_ID_URL = 'https://imdb-api.com/en/API/Name/';
const IMDB_API_KEY = 'k_2x4eak3e';

export const getActorById = async (id: string) => {
  const res = await axios.get(`${SEARCH_ACTOR_BY_ID_URL}${IMDB_API_KEY}/${id}`);
  const actor = useGetActorReturnSchema.safeParse(res.data);

  if (actor.success) {
    return actor.data;
  }
  throw actor.error;
};
