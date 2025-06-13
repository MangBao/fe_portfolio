import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../services/about";

export const useAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
};
