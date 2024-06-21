import Lenis from "lenis";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

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
			<Outlet />
		</>
	);
}

export default App;
