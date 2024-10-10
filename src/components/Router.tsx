import App from "@/App.tsx";
import Blogs from "@/pages/Blogs";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Terms from "@/pages/Terms";
import Contact from "@/pages/Contact";
import Welcome from "./Welcome";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
				index: true,
			},
			{
				path: "/blogs",
				element: <Blogs />,
				index: true,
			},
			{
				path: "/services",
				element: <Services />,
				index: true,
			},
			{
				path: "/about",
				element: <About />,
				index: true,
			},
			{
				path: "/terms",
				element: <Terms />,
				index: true,
			},
			{
				path: "/contact",
				element: <Contact />,
				index: true,
			},
			{
				path: "/thankyou",
				element: <Welcome />,
				index: true,
			}
		],
	},
]);

export const Router = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
