import { motion } from "framer-motion";
function DisplayFeatures() {
	const featureList = [
		{
			icon: "find",
			title: "Find",
			desc: "Our service helps you find exactly what you need, quickly and efficiently.",
			color: "#af9159",
			number: 1,
		},
		{
			icon: "booking",
			title: "Book",
			desc: "Hassle-free and easy appointment bookings and reservations.",
			color: "#efe9dd",
			number: 2,
		},
		{
			icon: "buy",
			title: "Buy",
			desc: "Purchase items seamlessly with our reliable and secure buying service.",
			color: "#af9159",
			number: 3,
		},
		{
			icon: "delivery",
			title: "Delivery",
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
		<section className=" w-[90%] flex  flex-wrap justify-start sm:justify-center mx-auto gap-5">
			{featureList.map((feature, index) => {
				return (
					<motion.div
						key={feature.title}
						variants={fadeInAnimationVariants(index)}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						className={
							"h-full flex flex-col overflow-hidden basis-[100%] sm:basis-[17rem] rounded-[3px] gap-2"
						}
					>
						<section className="h-full w-full overflow-hidden">
							<img
								className="h-[150px] sm:h-[200px] w-full object-cover  shadow-md scale-110 hover:scale-100 duration-300"
								src={`/assets/${feature.icon}.webp`}
								alt={`feature ${feature.title}`}
								key={feature.title}
							/>
						</section>

						<div className="flex flex-col items-start  w-full gap-2">
							<section className="text-left font-satoshi flex flex-col gap-2">
								<span className="hidden md:block text-sm">
									[{feature.number}]
								</span>
								<span className="font-satoshi text-4xl font-thin">
									{feature.title}
								</span>
							</section>
							<section className="font-satoshi font-normal tracking-wide">
								<p className="text-sm md:text-base">
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
