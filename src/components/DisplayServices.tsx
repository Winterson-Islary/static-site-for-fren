import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
			description: "Anything, anywhere, anytime. Ready to simplify your life.",
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
	const fadeInAnimationVariants = (index: number) => ({
		initial: {
			opacity: 0,
			y: 200,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * index,
				x: { duration: 7000 },
			},
		},
	});
	return (
		<section className="w-full mx-auto md:w-[95%] 2xl:w-[1500px] p-1 min-[1650px]:w-[1600px]">
			<div className="font-playfair pb-5 text-3xl md:text-4xl uppercase font-black underline underline-offset-4">
				Personal Services
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1">
				{serviceList.map((service, index) => {
					return (
						<motion.section
							variants={fadeInAnimationVariants(index)}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							key={service.title}
							className="flex flex-col gap-1 "
						>
							<div
								key={service.title}
								className="overflow-hidden rounded-md border-2 border-black h-[200px] md:h-[300px] w-full"
							>
								<img
									src={`/assets/${service.image}.webp`}
									alt={`${service.title} illustration`}
									className="object-cover h-full w-full hover:scale-125 rounded-md transition-all duration-700 ease-in-out"
								/>
							</div>
							<div className=" flex-1">
								<Link to="/services">
									<div key={service.title} className="text-white h-full">
										<div className="select-none bg-black p-[1rem] w-full flex flex-col items-start justify-center h-full  gap-2 transition-all duration-5000 ease-in-out rounded-md">
											<section className="font-playfair text-xl lg:text-2xl uppercase font-bold underline underline-offset-4">
												{service.title}
											</section>
											<section className="font-playfair font-semibold text-sm md:text-base h-full flex-1">
												<p className="leading-tight tracking-tighter">
													{service.description}
												</p>
											</section>
										</div>
									</div>
								</Link>
							</div>
						</motion.section>
					);
				})}
			</div>
			<div className=" font-playfair pt-20 pb-5 text-3xl md:text-4xl uppercase font-black underline underline-offset-4">
				Corporate Services
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1 ">
				{corporateServiceList.map((service, index) => {
					return (
						<motion.section
							variants={fadeInAnimationVariants(index)}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							key={service.title}
							className="flex flex-col gap-1"
						>
							<div
								key={service.title}
								className="overflow-hidden rounded-md border-2 border-black h-[200px] md:h-[300px]"
							>
								<img
									src={`/assets/${service.image}.webp`}
									alt={`${service.title} illustration`}
									className="object-cover h-full w-full hover:scale-125 rounded-md transition-all duration-700 ease-in-out"
								/>
							</div>
							<div className="flex-1">
								<Link to="/services">
									<div key={service.title} className="text-white h-full">
										<div className="select-none bg-black p-[1rem] w-full flex flex-col items-start justify-center min-h-[5rem] md:min-h-[8.5rem] h-[8.5rem]  gap-2 transition-all duration-5000 ease-in-out rounded-md">
											<section className="font-playfair text-lg lg:text-2xl uppercase font-bold underline underline-offset-4">
												{service.title}
											</section>
											<section className="font-playfair font-semibold text-sm md:text-base ">
												<p className="leading-tight tracking-tighter">
													{service.description}
												</p>
											</section>
										</div>
									</div>
								</Link>
							</div>
						</motion.section>
					);
				})}
			</div>
		</section>
	);
}

export default DisplayServices;
