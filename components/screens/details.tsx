import { ImageBackground, Text, View } from "react-native";
import { useMovieDetails } from "@/services/queries/movies";
import { MediaType } from "@/interfaces/api.model";
import { Container, Title } from "@/tamagui.config";
import { Image, YStack } from "tamagui";
import { ScrollView } from "tamagui";

type DetailsPageProps = {
  id: string;
  type: MediaType;
};

const DetailPage = ({ id, type }: DetailsPageProps) => {
  const { data, isLoading } = useMovieDetails(id, type);
  console.log(data?.title);
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w200/${data?.poster_path}`,
        }}
        style={{ width: "100%", height: 400, justifyContent: "flex-end" }}
        resizeMode="cover"
      >
        <Container style={{ flex: 1, justifyContent: "center" }}>
          <YStack>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w200/${data?.poster_path}`,
              }}
              alt={`${data?.title} poster`}
              width={200}
              height={300}
            />
          </YStack>
        </Container>
      </ImageBackground>
      <Container>
        <Title color={"$blue7"}>{data?.title}</Title>
        <Text>{data?.overview}</Text>
      </Container>
    </ScrollView>
  );
};

export default DetailPage;
