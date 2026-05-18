import { createRoot } from "react-dom/client";
import App from "./app/App";
// @ts-ignore: CSS module side-effect import without type declarations
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
