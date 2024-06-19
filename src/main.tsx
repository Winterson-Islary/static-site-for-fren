import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const Root: HTMLElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(Root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
