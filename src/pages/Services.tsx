function Services() {
	const serviceList = [
		{
			title: "Personal Shopping",
			description:
				"Need to purchase something? Let us buy and deliver it to you.",
			image: "img1",
			link: "",
			tag: "Personal",
		},
		{
			title: "Personal Assistance",
			description:
				"Delegate your professional and personal tasks to us, ensuring invaluable family time.",
			image: "img2",
			link: "",
			tag: "Personal",
		},
		{
			title: "Gift Procurement & Delivery",
			description:
				"We procure the perfect gift for your loved ones and ensure prompt delivery.",
			image: "img3",
			link: "",
			tag: "Personal",
		},
		{
			title: "Returns & Exchanges",
			description:
				"Need to return or exchange items? Count on us for swift and efficient service.",
			image: "img4",
			link: "",
			tag: "Personal",
		},
		{
			title: "Booking & Reservations",
			description:
				"Planning vacations? Let us find and book the perfect holiday for you with ease and expertise.",
			image: "img5",
			link: "",
			tag: "Personal",
		},
		{
			title: "Furniture Delivery",
			description:
				"Need furniture? We find it, buy it, deliver it and even assemble it for you.",
			image: "img6",
			link: "",
			tag: "Personal",
		},
		{
			title: "Flower Delivery",
			description:
				"Express your feelings with elegance. Let us deliver flowers to your loved ones effortlessly.",
			image: "img7",
			link: "",
			tag: "Personal",
		},
		{
			title: "Efficient Document Logistics",
			description:
				"Streamline your workflow with reliable pick-up and drop-off of important documents.",
			image: "img9",
			link: "",
			tag: "Corporate",
		},
		{
			title: "Secure Cheque Delivery",
			description:
				"Guaranteed and efficient handling of Cheques, saving you time and resources.",
			image: "img10",
			link: "",
			tag: "Corporate",
		},
		{
			title: "Expedited Passport Delivery",
			description:
				"Get your passport where you need it, fast, for a seamless travel experience.",
			image: "img11",
			link: "",
			tag: "Corporate",
		},
		{
			title: "Secure Cash in Transit Service",
			description:
				"Eliminate risk and ensure peace of mind with secure cash handling services.",
			image: "img12",
			link: "",
			tag: "Corporate",
		},
	];
	return (
		<div className="pt-[10rem] h-full w-[95%] md:w-[95%] xl:w-[70%] mx-auto pb-11">
			<section className="flex flex-col">
				<span className="font-playfair text-5xl md:text-7xl w-full text-center pb-10 font-black">
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
									className="w-[20%] h-[200px] rounded-md object-cover hidden md:block"
								/>
								<div className="font-playfair flex flex-col items-left justify-center gap-5">
									<section className="text-2xl font-bold underline uppercase">
										{item.title}
									</section>
									<section className="text-lg font-bold">
										<span className="opacity-70">Description: </span>
										{item.description}
									</section>
									<section className="text-lg font-bold">
										<span className="opacity-70">Tag: </span>
										{item.tag}
									</section>
									<a
										href="https://api.whatsapp.com/send/?phone=971508211455&text=Hey+there%21+%0AI+need+your+help+to+run+some+errands%2E+&app_absent=0"
										target="_blank"
										rel="noreferrer"
										className="w-[200px] bg-green-500"
									>
										<button
											type="button"
											className="bg-black w-[200px] p-2 rounded-md text-xl text-white  uppercase hover:w-[220px] duration-300 ease-in-out"
										>
											Avail Service
										</button>
									</a>
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
