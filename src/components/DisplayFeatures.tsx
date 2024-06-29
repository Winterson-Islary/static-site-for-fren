function DisplayFeatures() {
	const featureList = [
		{
			icon: "icon1",
			title: "Find",
			desc: "Our service helps you find exactly what you need, quickly and efficiently.",
			color: "#af9159",
		},
		{
			icon: "icon2",
			title: "Booking",
			desc: "Easily book appointments and reservations with our streamlined, hassle-free process.",
			color: "#efe9dd",
		},
		{
			icon: "icon3",
			title: "Buy",
			desc: "Purchase items seamlessly with our reliable and secure buying service.",
			color: "#af9159",
		},
		{
			icon: "icon4",
			title: "Delivery",
			desc: "Get your items delivered promptly and safely right to your doorstep.",
			color: "#efe9dd",
		},
	];
	return (
		<section className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-[0.5rem] w-[90%] xl:w-[80%] mx-auto">
			{featureList.map((feature) => {
				return (
					<div
						key={feature.title}
						// style={{ backgroundColor: `${feature.color}` }}
						className={
							"flex md:flex-col flex-1 border-2 border-gray-300 md:border-slate-100  rounded-l-full rounded-r-full md:rounded-[0rem] p-3 gap-4 md:gap-0 items-center md:items-start min-w-[13em]"
						}
					>
						<img
							className="h-[50px] w-[50px] object-cover border-4 border-slate-200 rounded-full"
							src={`./src/assets/features/${feature.icon}.webp`}
							alt={`feature ${feature.title}`}
							key={feature.title}
						/>
						<section className="text-left md:pt-5 font-playfair text-2xl md:text-3xl ">
							{feature.title}
						</section>
						<section className="text-left md:pb-2 md:pt-4 font-playfair font-light text-sm border-l-2 md:border-none rounded-l rounded-r-full px-1 border-black md:text-base ">
							<p className="leading-tight tracking-tighter">{feature.desc}</p>
						</section>
					</div>
				);
			})}
		</section>
	);
}

export default DisplayFeatures;
