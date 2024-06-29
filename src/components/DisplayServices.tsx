function DisplayServices() {
	const serviceList = [
		{
			title: "Personal Shopper",
			description:
				"Need to purchase something? Let us buy and deliver it to you.",
			image: "img1",
		},
		{
			title: "Personal Assistance",
			description:
				"Delegate your professional and personal tasks to us, ensuring invaluable family time.",
			image: "img2",
		},
		{
			title: "Gift Procurement and Delivery",
			description:
				"We procure the perfect gift for your loved ones and ensure prompt delivery.",
			image: "img3",
		},
		{
			title: "Returns and Exchanges",
			description:
				"Need to return or exchange items? Count on us for swift and efficient service.",
			image: "img4",
		},
		{
			title: "Booking & Reservations",
			description:
				"Planning vacations? Let us find and book the perfect holiday for you with ease and expertise.",
			image: "img5",
		},
		{
			title: "Furniture Delivery",
			description:
				"Need furniture? We find it, buy it, deliver it and even assemble it for you.",
			image: "img6",
		},
		{
			title: "Flowers",
			description:
				"Express your feelings with elegance. Let us deliver flowers to your loved ones effortlessly.",
			image: "img7",
		},
		{
			title: "Much More...",
			description: "Anything, anywhere, anytime. Ready to simplify your life.",
			image: "img8",
		},
	];
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[0.2rem] xl:gap-0 w-full mx-auto xl:mx-0 xl:w-full">
			{serviceList.map((service) => {
				return (
					<div
						style={{
							backgroundImage: `url(./src/assets/${service.image}.webp)`,
						}}
						className="flex flex-col items-start justify-end min-h-[11em] md:min-h-[15em] xl:h-[20rem] w-full bg-cover bg-center lg:last-of-type:col-span-2 xl:last-of-type:col-span-1"
						key={service.title}
					>
						<div className="bg-[#faf8f8] p-[1rem] w-full flex flex-col items-start justify-end min-h-[5rem] md:min-h-[7rem]">
							<section className="font-playfair text-xl uppercase font-semibold">
								{service.title}
							</section>
							<section className="font-playfair font-medium text-sm md:text-base ">
								<p className="leading-tight tracking-tighter">
									{service.description}
								</p>
							</section>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default DisplayServices;
