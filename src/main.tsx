import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/index.css";
import { Router } from "./components/Router.tsx";

const Root: HTMLElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(Root).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
);
