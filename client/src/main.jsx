import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import Routers from "./Routes/Routers.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <Routers />
  </NextUIProvider>
);
