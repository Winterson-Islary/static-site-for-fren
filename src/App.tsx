import Lenis from "lenis";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer.tsx";
// import ScrollToTop from "./components/ScrollToTop";
import FixedMessageUs from "./components/FixedMessageUs";

function App() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);

	return (
		<>
			<Navbar />
			<FixedMessageUs />
			{/* <ScrollToTop /> */}
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
