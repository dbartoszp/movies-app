'use client';

import { useGetMovieById } from '@/modules/movies/useGetMovieById/useGetMovieById';
import { MoviePageSkeleton } from '@/modules/moviePage/MoviePageSkeleton/MoviePageSkeleton';
import { MovieDescription } from '@/modules/moviePage/MovieDescription/MovieDescription';
import { MovieMainInfo } from '@/modules/moviePage/MovieMainInfo/MovieMainInfo';
import { MovieRatings } from '@/modules/moviePage/MovieRatings/MovieRatings';
import { FullCastContainer } from '@/modules/moviePage/FullCastContainer/FullCastContainer';
import { MovieAwardsContainer } from '@/modules/moviePage/MovieAwards/MovieAwardsContainer';
import { MovieImage } from '@/modules/moviePage/MovieImage/MovieImage';
import { GenreList } from '@/modules/moviePage/GenreList/GenreList';
import { BoxOffice } from '@/modules/moviePage/BoxOffice/BoxOffice';
import { SimilarMovies } from '@/modules/moviePage/SimilarMovies/SimilarMovies';
import { ErrorMessage } from '@/modules/ui/ErrorMessage/ErrorMessage';
import { CreateReviewButton } from '@/modules/moviePage/CreateReviewButton/CreateReviewButton';
import { Modal } from '@/modules/ui/Modal/Modal';
import { useDisclosure } from '@/modules/ui/Modal/useDisclosure/useDisclosure';
import { Link } from '../ui/Button/Link';
import { ListCreator } from '../lists/components/ListCreator/ListCreator';
import { Text } from '../ui/Text/Text';
import { AddToList } from '../lists/components/AddToList/AddToList';
import { ReviewCreator } from '../reviewCreatorPage/ReviewCreator/ReviewCreator';

type MoviePageProps = {
  movieId: string;
  isAuth: boolean;
  userId?: string;
};

export const MovieInfo = ({ movieId, isAuth, userId = '' }: MoviePageProps) => {
  const movie = useGetMovieById(movieId);
  const {
    isOpen: isReviewModalOpen,
    close: closeReviewModal,
    changeOpenState: changeReviewModalState,
  } = useDisclosure();
  const {
    isOpen: isListModalOpen,
    close: closeListModal,
    changeOpenState: changeListModalState,
  } = useDisclosure();

  if (movie.isLoading) {
    return <MoviePageSkeleton />;
  }
  if (!movie.isSuccess) {
    console.log(movie.error);
    return (
      <ErrorMessage message="It looks like we don't have data about this title. We apologize for any inconvenience!" />
    );
  }

  const movieData = movie.data;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center md:mt-20 md:flex-row md:items-start md:justify-around'>
      <MovieImage image={movieData.image} title={movieData.title} />

      <div className='flex w-full flex-col space-y-4 md:w-1/2 '>
        <MovieMainInfo
          title={movieData.title}
          year={movieData.year}
          directors={movieData.directors || 'Unknown'}
          trailer={movieData.trailer}
          runtimeStr={movieData.runtimeStr || 'Unknown runtime'}
        />
        {!isAuth && (
          <div className='flex items-center justify-center'>
            <Link variant='green' size='sm' href='/login'>
              <Text>Log in first to review or add to a list!</Text>
            </Link>
          </div>
        )}
        {isAuth && (
          <>
            <div className='flex items-center justify-center'>
              <Modal
                openVariant='green'
                title='Create your review'
                openText='Review this movie'
                onClose={closeReviewModal}
                open={isReviewModalOpen}
                onOpenChange={changeReviewModalState}
              >
                <ReviewCreator movieId={movieId} />
              </Modal>
            </div>
            <div className='flex items-center justify-center'>
              <Modal
                openVariant='green'
                title='Select a list to add this movie to'
                openText='Add to a list'
                onClose={closeListModal}
                open={isListModalOpen}
                onOpenChange={changeListModalState}
              >
                <div className='flex flex-col space-y-12'>
                  <AddToList userId={userId} movieId={movieId} />
                  <Text variant='subtitleXL'>
                    Or create a new list to add the movie to!
                  </Text>
                  <div>
                    <ListCreator userId={userId} />
                  </div>
                </div>
              </Modal>
            </div>
          </>
        )}

        <GenreList genreList={movieData.genreList} />
        <MovieAwardsContainer awards={movieData.awards || 'No awards yet'} />
        <MovieDescription description={movieData.plot} />
        <MovieRatings
          imDbRating={movieData.imDbRating || 'Not yet rated'}
          imDbRatingVotes={movieData.imDbRatingVotes || 'Not yet rated'}
          // moviesappRating={movieData.moviesappRating}
          // moviesappReviewCount={movieData.moviesappReviewCount}
        />
        <FullCastContainer starList={movieData.starList} />
        <BoxOffice boxOffice={movieData.boxOffice} />
        <SimilarMovies similars={movieData.similars} />
      </div>
    </main>
  );
};
