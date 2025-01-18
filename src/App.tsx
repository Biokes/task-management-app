import {useRoutes} from "react-router-dom";
import {ROUTES} from "./route/routes";
export default function App() {
  return (
    useRoutes(ROUTES)
  );
}