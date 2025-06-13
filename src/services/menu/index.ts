import { MenuItem } from "../../types";
import { publicGET } from "../api/publicRequest";

export const getMenus = (): Promise<MenuItem[]> => {
  return publicGET<{ menus: MenuItem[] }>("/menu").then((res) => res.menus);
};
