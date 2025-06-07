/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";

export const showError = (message: string | any) => {
  toast.error(`${message.toString()}`, {
    position: "top-left",
    autoClose: 5000,
  });
};
