import axios from "axios";
import { ENDPOINTS } from "./api";

interface IGalleryListRequest {
  limit: number;
  offset: number;
}

interface IGalleryListResponse {
  success: boolean;
  message: string;
  offset: number;
  limit: number;
  photos: IPhoto[];
}

interface IPhoto {
  title: string;
  description: string;
  url: string;
  id: number;
  user: number;
}

interface IGalleryReponse {
  success: boolean;
  message: string;
  photo: IPhoto;
}

export const getGalleryList = async (arg: IGalleryListRequest) => {
  try {
    const { data } = await axios.get<IGalleryListResponse>(
      process.env.NEXT_PUBLIC_API_URL + ENDPOINTS.GET_GALLERY,
      { params: arg },
    );
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getGalleryById = async (id: string) => {
  try {
    const { data } = await axios.get<IGalleryReponse>(
      ENDPOINTS.GET_GALLERY + "/" + id,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
