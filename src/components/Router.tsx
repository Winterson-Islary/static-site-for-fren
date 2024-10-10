import App from "@/App.tsx";
import About from "@/pages/About";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Terms from "@/pages/Terms";
import { AnimatePresence } from "framer-motion";
import {
	RouterProvider,
	createBrowserRouter,
	useLocation,
} from "react-router-dom";
import PageTransition from "./PageTransition";
import Welcome from "./Welcome";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: (
					<PageTransition>
						<Home />
					</PageTransition>
				),
				index: true,
			},
			{
				path: "/blogs",
				element: (
					<PageTransition>
						<Blogs />
					</PageTransition>
				),
				index: true,
			},
			{
				path: "/services",
				element: (
					<PageTransition>
						<Services />
					</PageTransition>
				),
				index: true,
			},
			{
				path: "/about",
				element: (
					<PageTransition>
						<About />
					</PageTransition>
				),
				index: true,
			},
			{
				path: "/terms",
				element: (
					<PageTransition>
						<Terms />
					</PageTransition>
				),
				index: true,
			},
			{
				path: "/contact",
				element: (
					<PageTransition>
						<Contact />
					</PageTransition>
				),
				index: true,
			},
			{
				path: "/thankyou",
				element: <Welcome />,
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
