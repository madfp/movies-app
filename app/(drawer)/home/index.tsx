import React, { useState } from "react";
import { Main, ScrollView, Spinner, View, YStack } from "tamagui";
import { Container, Subtitle, Title } from "@/tamagui.config";
import { useSearch, useTrending } from "@/services/queries/movies";
import { ImageBackground } from "react-native";
import { MovieCard } from "@/components/ui/card";
import SearchBar from "@/components/search-bar";
import useDebounce from "@/utils/useDebounce";

export default function App() {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search, 500);
  const [page, setPage] = useState(1);

  const {
    data: searchedMovie,
    isLoading: MovieLoading,
    isError: MovieError,
  } = useSearch(debounce);

  const { data, isLoading, isError } = useTrending(page);

  return (
    <Main>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg`,
        }}
        style={{ width: "100%", height: 250 }}
      >
        <Container style={{ flex: 1, justifyContent: "flex-end" }}>
          <YStack>
            <Title
              enterStyle={{
                opacity: 0,
              }}
              animation={"quick"}
            >
              Trending
            </Title>
            <SearchBar query={search} setQuery={setSearch} />
          </YStack>
        </Container>
      </ImageBackground>

      <View style={{ marginVertical: 20 }}>
        <Subtitle
          enterStyle={{
            opacity: 0,
          }}
          animation={"lazy"}
          style={{ marginBottom: 10 }}
        >
          {searchedMovie ? "Search results" : "Discover trending"}
        </Subtitle>

        {/* Spinner */}
        {MovieLoading || isLoading ? (
          <Spinner size={"large"} color="$blue10" my={16} />
        ) : MovieError || isError ? (
          <Subtitle>Something went wrong...</Subtitle>
        ) : null}

        {/* Movies */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10, px: 5 }}
        >
          {searchedMovie
            ? searchedMovie.results.map((movie) => (
                <MovieCard key={movie.id} props={movie} />
              ))
            : data?.results.map((movie) => (
                <MovieCard key={movie.id} props={movie} />
              ))}
        </ScrollView>
      </View>
    </Main>
  );
}
