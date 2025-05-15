import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";
import "./index.css";

const App: React.FC = () => {
  const routing = useRoutes(routes);

  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      {routing}
    </Suspense>
  );
};

export default App;
