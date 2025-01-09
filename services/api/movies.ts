import { instance } from "../axios";
import {
  MediaType,
  TrendingResponse,
  ResultTrending,
} from "@/interfaces/api.model";

// API KEY
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

// Get trending movies
export const getTrending = async (page: number): Promise<TrendingResponse> => {
  const response = await instance.get(
    `/trending/movie/day?language=en-US&page=${page}&api_key=${API_KEY}`
  );
  return response.data;
};

// Search string movie
export const searchMovie = async (query: string): Promise<TrendingResponse> => {
  const response = await instance.get(
    `/search/multi?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  return response.data;
};

// Search movie details
export const getMovieDetails = async ({
  id,
  type,
}: {
  id: string;
  type: MediaType;
}): Promise<ResultTrending> => {
  const response = await instance.get(
    `${type}/${id}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

// MOVIE GENRES
// https://api.themoviedb.org/3/genre/movie/list?language=en
