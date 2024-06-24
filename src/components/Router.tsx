import App from "@/App.tsx";
import Blogs from "@/pages/Blogs";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
