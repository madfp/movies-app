import DetailPage from "@/components/screens/details";
import { MediaType } from "@/interfaces/api.model";
import { useLocalSearchParams } from "expo-router";

const TvDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <DetailPage id={id} type={MediaType.TV} />;
};

export default TvDetails;
