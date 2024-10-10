import useDimension from "@/hooks/useDimension";
import {
	type MotionValue,
	motion,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";

function DisplayServiceImage() {
	const refContainer = useRef(null);
	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ["start end", "end start"], // Start of the container - end of the window, End of the container - start of the window
	});
	const { height } = useDimension();
	const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.7]);
	const scrollY2 = useTransform(scrollYProgress, [0, 1], [0, -height * 1.2]);
	const scrollY3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.9]);
	const scrollY4 = useTransform(scrollYProgress, [0, 1], [0, -height * 1.7]);
	const images = [
		"img1",
		"img2",
		"img3",
		"img4",
		"img5",
		"img6",
		"img7",
		"img8",
		"img9",
		"img10",
		"img11",
		"img12",
	];
	return (
		<div
			ref={refContainer}
			className="h-[175vh] bg-[#2D2D2D] flex p-[2vw] box-border gap-[2vw]"
		>
			<GetImages
				images={[images[0], images[1], images[2]]}
				y={scrollY1}
			/>
			<GetImages
				images={[images[3], images[4], images[5]]}
				y={scrollY2}
			/>
			<GetImages
				images={[images[6], images[7], images[8]]}
				y={scrollY3}
			/>
			<GetImages
				images={[images[9], images[10], images[11]]}
				y={scrollY4}
			/>
		</div>
	);
}
export default DisplayServiceImage;

function GetImages({
	images,
	y,
}: { images: string[]; y: MotionValue<number> }) {
	return (
		<motion.div
			style={{ y }}
			className="w-[25%] h-full flex flex-col gap-[2vw] min-w-[250px] min-h-[250px] relative first-of-type:top-[-45%] [&:nth-child(2)]:top-[0%] [&:nth-child(3)]:top-[-70%] [&:nth-child(4)]:top-[20%]"
		>
			{images.map((src) => {
				return (
					<div
						className="w-full h-full relative overflow-hidden"
						key={src}
					>
						<img
							className="bg-black object-cover w-full h-full rounded-md"
							src={`./src/assets/${src}.webp`}
							alt={src}
						/>
					</div>
				);
			})}
		</motion.div>
	);
}
