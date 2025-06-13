import { AboutResponse } from "../../types";
import { publicGET } from "../api/publicRequest";

export const getAbout = (): Promise<AboutResponse> => {
  return publicGET<AboutResponse>("/about");
};
