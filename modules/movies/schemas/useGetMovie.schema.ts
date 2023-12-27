import { z } from 'zod';

const personSchema = z.object({
	id: z.string(),
	name: z.string(),
});

const personWithCharacterSchema = personSchema.extend({
	asCharacter: z.string(),
});

const personWithImageSchema = personWithCharacterSchema.extend({
	image: z.string().url(),
});

const movieSchema = z.object({
	id: z.string(),
	title: z.string(),
	imDbRating: z.string().optional(),
	image: z.string().url().optional(),
});

export const useGetMovieReturnSchema = z.object({
	id: z.string(),
	title: z.string(),
	originalTitle: z.string().optional().nullable(),
	fullTitle: z.string(),
	type: z.string(),
	year: z.string(),
	image: z.string().url(),
	releaseDate: z.string().optional(),
	runtimeMins: z.string().optional(),
	runtimeStr: z.string().optional(),
	plot: z.string().optional().nullable(),
	plotLocal: z.string().optional().nullable(),
	plotLocalIsRtl: z.boolean(),
	awards: z.string().optional(),
	directors: z.string().optional(),
	directorList: z.array(personSchema),
	writers: z.string().optional(),
	writerList: z.array(personSchema),
	stars: z.string().optional(),
	starList: z.array(personSchema),
	actorList: z.array(personWithImageSchema),
	fullCast: z.any().nullable(),
	genres: z.string().optional(),
	genreList: z.array(z.object({ key: z.string(), value: z.string() })),
	companies: z.string().optional(),
	companyList: z.array(z.object({ id: z.string(), name: z.string() })),
	countries: z.string().optional(),
	countryList: z.array(z.object({ key: z.string(), value: z.string() })),
	languages: z.string().optional(),
	languageList: z.array(z.object({ key: z.string(), value: z.string() })),
	contentRating: z.string().optional().nullable(),
	imDbRating: z.string().optional().nullable(),
	imDbRatingVotes: z.string().optional().nullable(),
	metacriticRating: z.string().optional().nullable(),
	ratings: z.any().nullable(),
	wikipedia: z.any().nullable(),
	posters: z.any().nullable(),
	images: z.any().nullable(),
	trailer: z.any().nullable(),
	boxOffice: z.object({
		budget: z.string().optional(),
		openingWeekendUSA: z.string().optional(),
		grossUSA: z.string().optional(),
		cumulativeWorldwideGross: z.string().optional(),
	}),
	tagline: z.string().optional().nullable(),
	keywords: z.string().optional(),
	keywordList: z.array(z.string()),
	similars: z.array(movieSchema),
	tvSeriesInfo: z.any().nullable(),
	tvEpisodeInfo: z.any().nullable(),
	errorMessage: z.string().optional(),
});
