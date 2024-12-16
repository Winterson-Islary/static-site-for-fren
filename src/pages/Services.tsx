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
				<h1 className="font-boska text-5xl md:text-7xl w-full text-center pb-10 font-black">
					Services
				</h1>
				<section className=" grid grid-cols-[repeat(auto-fit,_minmax(min(100%,350px),_1fr))] [grid-template-rows:auto] gap-5 justify-center">
					{serviceList.map((item) => {
						return (
							<div
								className="font-satoshi grid [grid-template-rows:subgrid] row-span-5 gap-0 border-y-2 border-black  p-5 duration-500 ease-in-out"
								key={item.title}
							>
								<img
									src={`assets/${item.image}.webp`}
									alt={`service ${item.title}`}
									className="w-full h-[200px] rounded-md object-cover"
								/>
								<div className="grid [grid-template-rows:subgrid] row-span-4 pt-5 gap-2">
									<section className="text-4xl font-light">
										<h2>{item.title}</h2>
									</section>
									<h3 className="text-xl font-roboto ">
										<span className="opacity-70">
											Description:{" "}
										</span>
										<span className="font-satoshi font-light text-lg">
											{item.description}
										</span>
									</h3>
									<h3 className="text-lg font-normal font-roboto">
										<span className="opacity-70">
											Tag:{" "}
										</span>
										<span className="font-satoshi font-light">
											{item.tag}
										</span>
									</h3>
									<a
										href="https://api.whatsapp.com/send/?phone=971508211455&text=Hey+there%21+%0AI+need+your+help+to+run+some+errands%2E+&app_absent=0"
										target="_blank"
										rel="noreferrer"
										className="w-full"
									>
										<button
											type="button"
											className="w-full font-light bg-black uppercase p-2 text-xl text-white  hover:bg-red-500 hover:font-normal duration-300 ease-in-out"
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
