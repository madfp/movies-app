import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Title } from "@/tamagui.config";
import { useMMKVObject } from "react-native-mmkv";
import { Favorite } from "@/interfaces/favorites.model";
import { Image, ListItem, Main, ScrollView, Text } from "tamagui";
import { Link } from "expo-router";
import { MediaType } from "@/interfaces/api.model";

export default function App() {
  const [favorites, setFavorites] = useMMKVObject<Favorite[]>("favorites");
  return (
    <Main>
      <Container>
        <ScrollView>
          {favorites?.map((favorite) => (
            <Link
              href={`/(drawer)/favorites/${favorite?.mediaType}/${favorite.id}`}
              key={`${favorite.mediaType}-${favorite.id}`}
              asChild
            >
              <ListItem
                title={favorite.name}
                icon={
                  <Image
                    theme={"alt2"}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w200/${favorite.thumbnail}`,
                    }}
                    alt={`${favorite.name} poster`}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  />
                }
              />
            </Link>
          ))}
        </ScrollView>
      </Container>
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
