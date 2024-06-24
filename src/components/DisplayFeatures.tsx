import { cn } from "@/utils/tailwindUtils";

function DisplayFeatures() {
	const featureList = [
		{
			icon: "icon1",
			title: "Find",
			desc: "Your personal search assistant",
			color: "#af9159",
		},
		{
			icon: "icon2",
			title: "Book",
			desc: "We will help you book anything with ease",
			color: "#efe9dd",
		},
		{
			icon: "icon3",
			title: "Buy",
			desc: "Buy anything with our assistance",
			color: "#af9159",
		},
		{
			icon: "icon4",
			title: "Delivery",
			desc: "Get anything delivered fast",
			color: "#efe9dd",
		},
	];
	return (
		<section className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-[2rem] w-[80%] mx-auto">
			{featureList.map((feature) => {
				return (
					<div
						key={feature.title}
						style={{ backgroundColor: `${feature.color}` }}
						className={
							"flex md:flex-col flex-1 border-2 rounded-l-full rounded-r-full md:rounded-lg p-3 gap-4 md:gap-0 items-center md:items-start min-w-[10em]"
						}
					>
						<img
							className="h-[50px] w-[50px] object-cover border-4 rounded-full"
							src={`./src/assets/features/${feature.icon}.webp`}
							alt={`feature ${feature.title}`}
							key={feature.title}
						/>
						<section className="text-left md:pt-5 font-tanker text-2xl md:text-4xl underline">
							{feature.title}
						</section>
						<section className="text-left md:py-2 font-roboto font-semibold md:text-xl">
							{feature.desc}
						</section>
					</div>
				);
			})}
		</section>
	);
}

export default DisplayFeatures;
