import Lenis from "lenis";
import { useEffect } from "react";
import Home from "@/pages/Home.tsx";

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
			<Home />
		</>
	);
}

export default App;
