function DisplayServices() {
	const serviceList = [
		{
			title: "Personal Shopping",
			description:
				"Need to purchase something? Let us buy and deliver it to you.",
			image: "img2",
		},
		{
			title: "Personal Assistance",
			description:
				"Delegate your professional and personal tasks to us, ensuring invaluable family time.",
			image: "img2",
		},
		{
			title: "Gift Procurement & Delivery",
			description:
				"We procure the perfect gift for your loved ones and ensure prompt delivery.",
			image: "img2",
		},
		{
			title: "Returns & Exchanges",
			description:
				"Need to return or exchange items? Count on us for swift and efficient service.",
			image: "img2",
		},
		{
			title: "Booking & Reservations",
			description:
				"Planning vacations? Let us find and book the perfect holiday for you with ease and expertise.",
			image: "img2",
		},
		{
			title: "Furniture Delivery",
			description:
				"Need furniture? We find it, buy it, deliver it and even assemble it for you.",
			image: "img2",
		},
		{
			title: "Flower Delivery",
			description:
				"Express your feelings with elegance. Let us deliver flowers to your loved ones effortlessly.",
			image: "img2",
		},
		{
			title: "Much More...",
			description: "Anything, anywhere, anytime. Ready to simplify your life.",
			image: "img2",
		},
	];
	return (
		<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[0.5rem] xl:gap-5 w-full mx-auto md:w-[95%] xl:w-[80%] ">
			{serviceList.map((service) => {
				return (
					<div
						style={{
							backgroundImage: `url(/assets/${service.image}.webp)`,
						}}
						className="bg-cover h-[320px] border-[0.05rem] xl:last-of-type:col-span-2 2xl:last-of-type:col-span-1 flex items-end hover:shadow-xl ease-in-out duration-500"
						key={service.title}
					>
						<div className="select-none bg-white p-[1rem] w-full flex flex-col items-start justify-start min-h-[5rem] md:min-h-[8.5rem]  gap-2 ">
							<section className="font-playfair text-xl uppercase font-bold underline">
								{service.title}
							</section>
							<section className="font-playfair font-semibold text-sm md:text-base ">
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
