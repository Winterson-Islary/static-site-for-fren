import styles from "@/styles/scrolls.module.css";
import { Link } from "react-router-dom";
function DisplayServices() {
	const serviceList = [
		{
			title: "Personal Shopping",
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
			title: "Gift Procurement & Delivery",
			description:
				"We procure the perfect gift for your loved ones and ensure prompt delivery.",
			image: "img3",
		},
		{
			title: "Returns & Exchanges",
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
			title: "Flower Delivery",
			description:
				"Express your feelings with elegance. Let us deliver flowers to your loved ones effortlessly.",
			image: "img7",
		},
		{
			title: "Much More...",
			description:
				"Anything, anywhere, anytime. Ready to simplify your life.",
			image: "img8",
		},
	];
	const corporateServiceList = [
		{
			title: "Efficient Document Logistics",
			description:
				"Streamline your workflow with reliable pick-up and drop-off of important documents.",
			image: "img9",
		},
		{
			title: "Secure Cheque Delivery",
			description:
				"Guaranteed and efficient handling of Cheques, saving you time and resources.",
			image: "img10",
		},
		{
			title: "Expedited Passport Delivery",
			description:
				"Get your passport where you need it, fast, for a seamless travel experience.",
			image: "img11",
		},
		{
			title: "Secure Cash in Transit Service",
			description:
				"Eliminate risk and ensure peace of mind with secure cash handling services.",
			image: "img12",
		},
	];

	return (
		<section className={"w-[93%] mx-auto"}>
			<section className="2xl:w-[85%] mx-auto">
				<div className="relative flex justify-between font-roboto mt-[3rem] mb-[1rem] text-sm md:text-md uppercase font-black underline underline-offset-4">
					<p className="hidden md:block">Personal Services</p>
					<p>Personal Services</p>
				</div>
				<div
					className={`flex justify-start overflow-x-scroll ${styles.scroll} gap-4 w-full mx-auto pb-2 `}
				>
					{serviceList.map((service, index) => {
						const indexing = `${index}personal`;
						return (
							<section
								key={indexing}
								className="flex flex-col gap-1 relative"
							>
								<Link to="/services">
									<div
										key={service.title}
										className="overflow-hidden h-[200px] w-[300px] md:w-[500px] md:h-[600px]"
									>
										<img
											src={`/assets/${service.image}.webp`}
											alt={`${service.title} illustration`}
											className="object-cover h-full w-full scale-110 hover:scale-100 transition-all duration-500 ease-in-out"
										/>
									</div>
									<div className="">
										<div
											key={service.title}
											className="text-black h-full"
										>
											<div className="pt-2 select-none w-full flex flex-col items-start justify-center h-full  gap-1 transition-all duration-5000 ease-in-out">
												<section className="font-roboto font-black text-xl uppercase">
													{service.title}
												</section>
												<section className="font-playfair font-semibold text-sm md:text-base h-full flex-1 pb-10">
													<p className="leading-tight tracking-tighter text-[#252422]">
														{service.description}
													</p>
												</section>
											</div>
										</div>
									</div>
								</Link>
							</section>
						);
					})}
				</div>
			</section>
			<section className="2xl:w-[85%] mx-auto">
				<div className="relative flex justify-between mt-[2rem] mb-[1rem] font-roboto text-sm md:text-md uppercase font-black underline underline-offset-4">
					<p className="hidden md:block">Corporate Services</p>
					<p>Corporate Services</p>
				</div>
				<div
					className={`flex overflow-x-scroll ${styles.scroll} gap-4 w-full mx-auto pb-2`}
				>
					{corporateServiceList.map((service, index) => {
						const indexing = `${index}corporate`;
						return (
							<section
								key={indexing}
								className="flex flex-col gap-1"
							>
								<Link to="/services">
									<div
										key={service.title}
										className="overflow-hidden h-[200px] w-[300px] md:w-[500px] md:h-[600px]"
									>
										<img
											src={`/assets/${service.image}.webp`}
											alt={`${service.title} illustration`}
											className="object-cover h-full w-full scale-110 hover:scale-100 transition-all duration-500 ease-in-out"
										/>
									</div>
									<div className="">
										<div
											key={service.title}
											className="text-black h-full"
										>
											<div className="pt-2 select-none w-full flex flex-col items-start justify-center h-full  gap-1 transition-all duration-5000 ease-in-out">
												<section className="font-roboto text-xl uppercase font-bold">
													{service.title}
												</section>
												<section className="font-playfair font-semibold text-sm md:text-base pb-10">
													<p className="leading-tight tracking-tighter text-[#252422]">
														{service.description}
													</p>
												</section>
											</div>
										</div>
									</div>
								</Link>
							</section>
						);
					})}
				</div>
			</section>
		</section>
	);
}

export default DisplayServices;
