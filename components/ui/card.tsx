import { Card, Image, Paragraph, YStack, Text } from "tamagui";
import { MediaType, ResultTrending } from "@/interfaces/api.model";
import { Link } from "expo-router";

export function MovieCard({ props }: { props: ResultTrending }) {
  return (
    <Link
      href={`/(drawer)/home/${
        props?.media_type === MediaType.MOVIE ? MediaType.MOVIE : MediaType.TV
      }/${props.id}`}
      asChild
    >
      <Card
        elevate
        width={200}
        height={330}
        pressStyle={{ opacity: 0.8 }}
        hoverStyle={{ opacity: 0.8 }}
      >
        <Card.Header p={0}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w200/${props.poster_path}`,
            }}
            alt={`${props.title} poster`}
            style={{
              width: "100%",
              height: 250,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </Card.Header>
        <Card.Footer p={8}>
          <YStack>
            <Text fontSize={15}>
              {props.title ?? props.name ?? "Unknown title"}
            </Text>
            <Paragraph theme={"alt2"} fontSize={15}>
              {new Date(
                props.release_date ?? props.first_air_date ?? ""
              ).getFullYear()}
            </Paragraph>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  );
}
