import { MediaType } from "./api.model";

export type Favorite = {
  id: string;
  mediaType: MediaType;
  name: string;
  thumbnail: string;
};
