import DetailPage from "@/components/screens/details";
import { MediaType } from "@/interfaces/api.model";
import { useLocalSearchParams } from "expo-router";

const MovieDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <DetailPage id={id} type={MediaType.MOVIE} />;
};

export default MovieDetail;
