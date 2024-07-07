function Services() {
	const serviceList = [
		{
			title: "Personal Shopping",
			description:
				"Need to purchase something? Let us buy and deliver it to you.",
			image: "img2",
			link: "",
		},
		{
			title: "Personal Assistance",
			description:
				"Delegate your professional and personal tasks to us, ensuring invaluable family time.",
			image: "img2",
			link: "",
		},
		{
			title: "Gift Procurement & Delivery",
			description:
				"We procure the perfect gift for your loved ones and ensure prompt delivery.",
			image: "img2",
			link: "",
		},
		{
			title: "Returns & Exchanges",
			description:
				"Need to return or exchange items? Count on us for swift and efficient service.",
			image: "img2",
			link: "",
		},
		{
			title: "Booking & Reservations",
			description:
				"Planning vacations? Let us find and book the perfect holiday for you with ease and expertise.",
			image: "img2",
			link: "",
		},
		{
			title: "Furniture Delivery",
			description:
				"Need furniture? We find it, buy it, deliver it and even assemble it for you.",
			image: "img2",
			link: "",
		},
		{
			title: "Flower Delivery",
			description:
				"Express your feelings with elegance. Let us deliver flowers to your loved ones effortlessly.",
			image: "img2",
			link: "",
		},
	];
	return (
		<div className="pt-[10rem] h-full w-[95%] md:w-[80%] mx-auto pb-11">
			<section className="flex flex-col">
				<span className="font-playfair text-7xl w-full text-center pb-10 font-black">
					SERVICES
				</span>
				<section className="flex flex-col gap-2">
					{serviceList.map((item) => {
						return (
							<div
								className="flex gap-5 border-y-2 border-black  hover:bg-slate-200 p-5 duration-500 ease-in-out"
								key={item.title}
							>
								<img
									src={`assets/${item.image}.webp`}
									alt={`service ${item.title}`}
									className="w-[20%] rounded-md object-cover hidden md:block"
								/>
								<div className="font-playfair flex flex-col items-left justify-center gap-5">
									<section className="text-3xl font-black underline">
										{item.title}
									</section>
									<section className="text-xl font-bold">
										<span className="opacity-70">Description: </span>
										{item.description}
									</section>
									<button
										type="button"
										className="bg-black w-[200px] p-2 rounded-md text-xl text-white  uppercase hover:w-[220px] duration-300 ease-in-out"
									>
										Avail Service
									</button>
								</div>
							</div>
						);
					})}
				</section>
			</section>
		</div>
	);
}

export default Services;
