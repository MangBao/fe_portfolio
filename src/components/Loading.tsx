// src\components\Loading.tsx
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => (
  <div className="fixed inset-0 z-[200] bg-black bg-opacity-85 flex justify-center items-center">
    <DotLottieReact
      src="https://lottie.host/ca349bd4-3c24-4024-b336-234fa42cc7b8/FXpn7wS7zE.lottie"
      autoplay
      loop
      className="w-36 h-36"
    />
  </div>
);

export default Loading;
