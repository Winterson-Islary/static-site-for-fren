import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function DisplayServiceImage() {
	const refContainer = useRef(null);
	const { scrollYProgress } = useScroll({
		target: refContainer,
		offset: ["start end", "end start"], // Start of the container - end of the window, End of the container - start of the window
	});
	const scrollY = useTransform(scrollYProgress, [0, 1], [0, 1000]);
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
	];
	return (
		<div
			ref={refContainer}
			className="h-[175vh] bg-[#2D2D2D] flex p-[2vw] box-border gap-[2vw]"
		>
			<GetImages images={[images[0], images[1], images[2]]} />
			<GetImages images={[images[3], images[4], images[5]]} />
			<GetImages images={[images[6], images[7], images[8]]} />
			<GetImages images={[images[9], images[10]]} />
		</div>
	);
}
export default DisplayServiceImage;

function GetImages({ images }: { images: string[] }) {
	return (
		<div className="w-[25%] h-full flex flex-col gap-[2vw] min-w-[250px] min-h-[250px]">
			{images.map((src) => {
				return (
					<div className="w-full h-full relative overflow-hidden" key={src}>
						<img
							className="object-cover w-full h-full rounded-md"
							src={`./src/assets/${src}.jpg`}
							alt={src}
						/>
					</div>
				);
			})}
		</div>
	);
}
