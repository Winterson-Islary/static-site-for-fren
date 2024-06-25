function DisplayServices() {
	const serviceList = [
		{
			title: "Personal Shopper",
			description:
				"Need to purchase something? Let us buy and deliver it to you.",
			image: "",
		},
		{
			title: "Personal Assistance",
			description:
				"Delegate your professional and personal tasks to us, ensuring invaluable family time.",
			image: "",
		},
		{
			title: "Gift Procurement and Delivery",
			description:
				"We procure the perfect gift for your loved ones and ensure prompt delivery.",
			image: "",
		},
		{
			title: "Returns and Exchanges",
			description:
				"Need to return or exchange items? Count on us for swift and efficient service.",
			image: "",
		},
		{
			title: "Booking & Reservations",
			description:
				"Planning vacations? Let us find and book the perfect holiday for you with ease and expertise.",
			image: "",
		},
		{
			title: "Furniture Delivery",
			description:
				"Need furniture? We find it, buy it, deliver it and even assemble it for you.",
			image: "",
		},
		{
			title: "Flowers",
			description:
				"Express your feelings with elegance. Let us deliver flowers to your loved ones effortlessly.",
			image: "",
		},
		{
			title: "Much More...",
			description: "Anything, anywhere, anytime. Ready to simplify your life.",
			image: "",
		},
	];
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto w-[90%] sm:w-[80%]">
			{serviceList.map((service) => {
				return (
					<div
						className="flex flex-col items-start justify-end border-2 rounded-[1.5rem] p-3 h-full min-h-[11em] md:min-h-[15em] w-full"
						key={service.title}
					>
						<section className="font-tanker text-2xl">{service.title}</section>
						<section className="font-roboto font-medium text-sm md:text-base ">
							<p className="leading-tight tracking-tighter">
								{service.description}
							</p>
						</section>
					</div>
				);
			})}
		</div>
	);
}

export default DisplayServices;
