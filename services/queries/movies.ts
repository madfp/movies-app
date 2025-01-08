import { useQuery } from "@tanstack/react-query";
import { getMovieDetails, getTrending, searchMovie } from "../api/movies";

export const useTrending = (page: number) => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () => getTrending(page),
  });
};

export const useSearch = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovie(query),
    enabled: query.length > 0,
  });
};

export const useMovieDetails = (id: number) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
  });
};
