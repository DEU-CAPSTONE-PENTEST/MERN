import { useRoutes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import routes from "./routes";


function App() {
  return useRoutes(routes);
}

export default App;
