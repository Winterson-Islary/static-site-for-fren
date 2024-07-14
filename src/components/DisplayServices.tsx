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
	const corporateServiceList = [
		{
			title: "Efficient Document Logistics",
			description:
				"Streamline your workflow with reliable pick-up and drop-off of important documents.",
			image: "img2",
		},
		{
			title: "Secure Cheque Delivery",
			description:
				"Guaranteed and efficient handling of Cheques, saving you time and resources.",
			image: "img2",
		},
		{
			title: "Expedited Passport Delivery",
			description:
				"Get your passport where you need it, fast, for a seamless travel experience.",
			image: "img2",
		},
		{
			title: "Secure Cash in Transit Service",
			description:
				"Eliminate risk and ensure peace of mind with secure cash handling services.",
			image: "img2",
		},
	];

	return (
		<section className="w-full mx-auto md:w-[95%] xl:w-[80%]  p-10 ">
			<div className="font-playfair pb-5 text-3xl md:text-4xl uppercase font-black underline underline-offset-4">
				Personal Services
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 ">
				{serviceList.map((service) => {
					return (
						<div
							style={{
								backgroundImage: `url(/assets/${service.image}.webp)`,
							}}
							className="bg-cover h-[320px]  xl:last-of-type:col-span-2 2xl:last-of-type:col-span-1 flex items-end hover:shadow-md ease-in-out duration-500"
							key={service.title}
						>
							<div className="select-none bg-white p-[1rem] w-full flex flex-col items-start justify-start min-h-[5rem] md:min-h-[8.5rem]  gap-2 border border-black">
								<section className="font-playfair text-xl uppercase font-bold underline underline-offset-4">
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
			<div className=" font-playfair pt-20 pb-5 text-3xl md:text-4xl uppercase font-black underline underline-offset-4">
				Corporate Services
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 ">
				{corporateServiceList.map((service) => {
					return (
						<div
							style={{
								backgroundImage: `url(/assets/${service.image}.webp)`,
							}}
							className="bg-cover h-[320px]  xl:last-of-type:col-span-2 2xl:last-of-type:col-span-1 flex items-end hover:shadow-md ease-in-out duration-500"
							key={service.title}
						>
							<div className="select-none bg-white p-[1rem] w-full flex flex-col items-start justify-start min-h-[5rem] md:min-h-[8.5rem]  gap-2  border border-black">
								<section className="font-playfair text-xl uppercase font-bold underline underline-offset-4">
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
		</section>
	);
}

export default DisplayServices;
