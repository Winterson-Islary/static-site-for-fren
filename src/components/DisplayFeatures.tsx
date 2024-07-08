function DisplayFeatures() {
	const featureList = [
		{
			icon: "img2",
			title: "Find.",
			desc: "Our service helps you find exactly what you need, quickly and efficiently.",
			color: "#af9159",
			number: 1,
		},
		{
			icon: "img2",
			title: "Book.",
			desc: "Hassle-free and easy appointment bookings and reservations.",
			color: "#efe9dd",
			number: 2,
		},
		{
			icon: "img2",
			title: "Buy.",
			desc: "Purchase items seamlessly with our reliable and secure buying service.",
			color: "#af9159",
			number: 3,
		},
		{
			icon: "img2",
			title: "Delivery.",
			desc: "Get your items delivered promptly and safely right to your doorstep.",
			color: "#efe9dd",
			number: 4,
		},
	];
	return (
		<section className=" flex flex-col md:flex-row flex-wrap gap-2 md:gap-[1rem] xl:gap-[1rem] w-[95%] md:w-[90%] xl:w-[90%] 2xl:w-[70%] mx-auto">
			{featureList.map((feature) => {
				return (
					<div
						key={feature.title}
						// style={{ backgroundColor: `${feature.color}` }}
						className={
							" flex flex-col flex-1 p-3 gap-4 md:gap-0 items-center justify-around md:items-start min-w-[13rem] md:min-h-[25rem] "
						}
					>
						<img
							className="h-[200px] w-full object-cover rounded-lg shadow-md"
							src={`/assets/${feature.icon}.webp`}
							alt={`feature ${feature.title}`}
							key={feature.title}
						/>
						<div className="flex flex-col gap-2 items-start  w-full">
							<section className="text-left font-playfair flex flex-col gap-2">
								<span className=" text-sm font-semibold">
									[{feature.number}]
								</span>
								<span className="text-2xl font-semibold uppercase">
									{feature.title}
								</span>
							</section>
							<section className="font-playfair font-semibold ">
								<p className="leading-tight tracking-tighter">{feature.desc}</p>
							</section>
						</div>
					</div>
				);
			})}
		</section>
	);
}

export default DisplayFeatures;
