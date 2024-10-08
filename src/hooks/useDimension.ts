import { useEffect, useState } from "react";

const useDimension = () => {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });
	const updateDimension = () => {
		const { innerWidth, innerHeight } = window;
		setDimension({ width: innerWidth, height: innerHeight });
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		updateDimension();
		window.addEventListener("resize", updateDimension);
		return () => window.removeEventListener("resize", updateDimension);
	}, []);

	return dimension;
};

export default useDimension;
