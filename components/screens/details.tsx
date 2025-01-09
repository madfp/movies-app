import { ImageBackground, Text, View } from "react-native";
import { useMovieDetails } from "@/services/queries/movies";
import { MediaType } from "@/interfaces/api.model";
import { Container, Title } from "@/tamagui.config";
import { H1, Image, Paragraph, Spinner, YStack } from "tamagui";
import { ScrollView } from "tamagui";

type DetailsPageProps = {
  id: string;
  type: MediaType;
};

const DetailPage = ({ id, type }: DetailsPageProps) => {
  const { data, isLoading } = useMovieDetails(id, type);

  if (isLoading) {
    return <Spinner size={"large"} color="$blue10" my={16} />;
  }

  return (
    <ScrollView>
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
