// src/App.tsx
import { Suspense } from "react";
import AppRoutes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </AuthProvider>
  );
};

export default App;
