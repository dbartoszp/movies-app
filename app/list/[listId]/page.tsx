import { ListInfo } from '@/modules/listPage/ListInfo/ListInfo';
import { ListPreview } from '@/modules/lists/components/ListPreview/ListPreview';
import { MovieInfo } from '@/modules/moviePage/MovieInfo';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function ListPage({
  params,
}: {
  params: { listId: number };
}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <ListInfo listId={params.listId} userId={session?.user.id} />;
}
