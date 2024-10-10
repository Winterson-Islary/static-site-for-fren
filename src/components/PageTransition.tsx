import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const { pathname } = useLocation();
	const [windowDimensions, setWindowDimensions] = useState({
		height: 0,
		width: 0,
	});
	useEffect(() => {
		const resize = () => {
			setWindowDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};
		resize();
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);
	return (
		<AnimatePresence mode="wait">
			<article key={pathname} className="w-full h-full">
				{windowDimensions.width === 0 && (
					<div className="fixed pointer-events-none h-full w-full z-20 bg-black" />
				)}{" "}
				:{windowDimensions.width > 0 && <SVG {...windowDimensions} />}
				{children}
			</article>
		</AnimatePresence>
	);
};

const SVG = ({ width, height }: { width: number; height: number }) => {
	const initialPath = `
	M0 300
	Q${width / 2} 0 ${width} 300
	L${width} ${height + 300}
	Q${width / 2} ${height + 600} 0 ${height + 300}
	L0 300
	`;
	const finalPath = `
	M0 300
	Q${width / 2} 0 ${width} 300
	L${width} ${height}
	Q${width / 2} ${height} 0 ${height}
	L0 300
	`;
	return (
		<motion.svg
			initial={{ top: "-300px" }}
			animate={{
				top: "-100vh",
				transition: {
					duration: 0.75,
					ease: [0.76, 0, 0.24, 1],
					delay: 0.3,
				},
				transitionEnd: {
					top: "100vh",
				},
			}}
			exit={{
				top: "-300px",
				transition: {
					duration: 0.75,
					ease: [0.76, 0, 0.24, 1],
				},
			}}
			className="w-full -top-[300px] fixed pointer-events-none left-0 z-20"
			style={{ height: "calc(100vh + 600px)" }}
		>
			<title>Page transition medium</title>
			<motion.path
				initial={{ d: initialPath }}
				animate={{
					d: finalPath,
					transition: {
						duration: 0.75,
						delay: 0.3,
						ease: [0.76, 0, 0.24, 1],
					},
				}}
				exit={{
					d: initialPath,
					transition: {
						duration: 0.75,
						ease: [0.76, 0, 0.24, 1],
					},
				}}
			/>
		</motion.svg>
	);
};
export default PageTransition;
