import Footer from "@/components/Footer.tsx";
import { Navbar } from "@/components/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FixedMessageUs from "./components/FixedMessageUs";

function App() {
	const { pathname } = useLocation();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.scrollTo(0, 0);
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, [pathname]);

	return (
		<>
			<Navbar />
			<FixedMessageUs />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
