import { ImageBackground, Text } from "react-native";
import { useMovieDetails } from "@/services/queries/movies";
import { MediaType } from "@/interfaces/api.model";
import { Button, H1, Image, Paragraph, Spinner, YStack } from "tamagui";
import { Stack } from "expo-router";
import { ScrollView } from "tamagui";
import { useMMKVBoolean, useMMKVObject } from "react-native-mmkv";
import { Favorite } from "@/interfaces/favorites.model";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type DetailsPageProps = {
  id: string;
  type: MediaType;
};

const DetailPage = ({ id, type }: DetailsPageProps) => {
  const { data, isLoading } = useMovieDetails(id, type);

  const [isFavorite, setIsFavorite] = useMMKVBoolean(`${type}-${id}`);
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>("favorites");

  const toogleFavorite = () => {
    const current = favorites ?? [];

    if (!isFavorite) {
      setFavorites([
        ...current,
        {
          id: id,
          mediaType: type,
          name: data?.title ?? data?.name ?? "Unknown title",
          thumbnail: data?.poster_path ?? "",
        },
      ]);
    } else {
      setFavorites(current.filter((fav) => fav.id !== id));
    }

    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return <Spinner size={"large"} color="$blue10" my={16} />;
  }

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: data?.title || data?.name,
          headerRight: () => (
            <Button
              unstyled
              pressStyle={{ opacity: 0.8 }}
              onPress={toogleFavorite}
            >
              {isFavorite ? (
                <MaterialIcons name="favorite" size={24} color="#fff" />
              ) : (
                <MaterialIcons name="favorite-border" size={24} color="#fff" />
              )}
            </Button>
          ),
        }}
      />
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w400/${data?.backdrop_path}`,
        }}
        style={{ justifyContent: "flex-end" }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200/${data?.poster_path}`,
          }}
          alt={`${data?.title} poster`}
          width={200}
          height={300}
          borderRadius={10}
          m={20}
        />
      </ImageBackground>

      <YStack p={10}>
        <H1 color={"$blue7"}>{data?.title || data?.name}</H1>
        <Paragraph theme={"alt2"}>
          {new Date(
            data?.release_date ?? data?.first_air_date ?? "No release date"
          ).getFullYear()}
        </Paragraph>
        <Text>{data?.overview}</Text>
      </YStack>
    </ScrollView>
  );
};

export default DetailPage;
