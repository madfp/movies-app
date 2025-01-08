import { Input } from "tamagui";

type props = {
  query: string;
  setQuery: (text: string) => void;
};

export default function SearchBar({ query, setQuery }: props) {
  return (
    <Input
      placeholder="Search for a movie, tv show, person...."
      placeholderTextColor={"#fff"}
      borderWidth={1}
      value={query}
      onChangeText={(text) => setQuery(text)}
      size={"$4"}
    />
  );
}
