// src/App.tsx
import { Suspense } from "react";
import AppRoutes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
        <Toaster position="top-left" reverseOrder={false} />
      </Suspense>
    </AuthProvider>
  );
};

export default App;
