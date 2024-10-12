import { motion } from "framer-motion";
function DisplayFeatures() {
	const featureList = [
		{
			icon: "find",
			title: "Find.",
			desc: "Our service helps you find exactly what you need, quickly and efficiently.",
			color: "#af9159",
			number: 1,
		},
		{
			icon: "booking",
			title: "Book.",
			desc: "Hassle-free and easy appointment bookings and reservations.",
			color: "#efe9dd",
			number: 2,
		},
		{
			icon: "buy",
			title: "Buy.",
			desc: "Purchase items seamlessly with our reliable and secure buying service.",
			color: "#af9159",
			number: 3,
		},
		{
			icon: "delivery",
			title: "Delivery.",
			desc: "Get your items delivered promptly and safely right to your doorstep.",
			color: "#efe9dd",
			number: 4,
		},
	];
	const fadeInAnimationVariants = (index: number) => ({
		initial: {
			opacity: 0,
			y: 80,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * index,
				x: { duration: 2000 },
			},
		},
	});
	return (
		<section className=" flex flex-col md:flex-row flex-wrap gap-2 md:gap-[1rem] xl:gap-[1rem] w-[95%] md:w-[90%] xl:w-[90%] 2xl:w-[70%] mx-auto">
			{featureList.map((feature, index) => {
				return (
					<motion.div
						key={feature.title}
						variants={fadeInAnimationVariants(index)}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className={
							" flex flex-col flex-1 p-3 gap-4 md:gap-0 items-center justify-around md:items-start min-w-[13rem] md:min-h-[25rem] "
						}
					>
						<section className="w-full overflow-hidden rounded">
							<img
								className="h-[200px] w-full object-cover  shadow-md hover:scale-110 duration-300"
								src={`/assets/${feature.icon}.webp`}
								alt={`feature ${feature.title}`}
								key={feature.title}
							/>
						</section>

						<div className="flex flex-col items-start  w-full">
							<section className="text-left font-playfair flex flex-col gap-2">
								<span className="hidden md:block text-sm font-semibold">
									[{feature.number}]
								</span>
								<span className="font-roboto text-xl md:text-2xl font-semibold uppercase">
									{feature.title}
								</span>
							</section>
							<section className="font-playfair font-semibold ">
								<p className="leading-tight text-sm md:text-xl tracking-tighter">
									{feature.desc}
								</p>
							</section>
						</div>
					</motion.div>
				);
			})}
		</section>
	);
}

export default DisplayFeatures;
