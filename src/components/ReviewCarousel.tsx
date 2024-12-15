import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function ClientsCarousel() {
	const reviewers = [
		{
			name: "Rekib Gaming",
			review: "I have purchased a gaming chair from Sharjah I found these guys. They paid for the item on my behalf and deliver it to my doorstep within 1 & half hourThank you always recommend them",
			image: "reviewer2",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Gerald Jay Anay",
			review: "Fast Delivery and easy to deal. I'm using this courier for quite while and since then, all of my transactions are smoothly performed. Great Job!",
			image: "reviewer1",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Tahir Dar",
			review: "Satisfied  very fast service buy bag from Dubai mall and delivered too on my door thanks.",
			image: "reviewer3",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Hatem Kadous",
			review: "Excellent experience . Driver was on time and very polite . Definitely use again",
			image: "reviewer4",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Bilal Ahmad Chattha",
			review: "Extremely satisfied with the support, cooperation, professionalism and services. I'm 100% sure that I will definitely recommend it to my family & friends. The Rider Ali was very professional and careful about the cake that was send to my Niece on her Birthday. Once again thanks a lot for the efforts and services.",
			image: "reviewer5",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Beau Johnson",
			review: "Great business. Came quick and delivered my items in a timely manner. Greatly appreciated Will use these guys again.",
			image: "reviewer6",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "SOMESH MATHAD",
			review: "Very accurate in time, great and quick service, recommend their service to parcel the things to Dubai to abudhabi.",
			image: "reviewer7",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Usama Chahal",
			review: "satisfied on this service,Deliver on time, Quick response.",
			image: "reviewer8",
			stars: "🌟🌟🌟🌟🌟",
		},
		{
			name: "Cristina Fernando",
			review: "Very nice service..easy transaction.",
			image: "reviewer9",
			stars: "🌟🌟🌟🌟🌟",
		},
	];
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					pauseOnMouseEnter: true,
					reverseDirection: false,
				}}
				speed={3000}
				pagination={{ clickable: true }}
				modules={[Autoplay, Pagination]}
				className="h-full w-full md:w-[500px]"
			>
				{reviewers.map((item) => {
					return (
						<SwiperSlide
							key={item.name}
							className=" select-none font-satoshi h-full w-full p-2 md:p-5 hover:cursor-grab active:cursor-grabbing"
						>
							<section className="flex flex-col items-center justify-center">
								<span>
									<img
										src={`/assets/reviewers/${item.image}.png`}
										alt={`reviewer ${item.name}`}
									/>
								</span>
								<span className="text-xl font-boska md:text-2xl">
									{item.name}
								</span>
								<span className="text-xl">{item.stars}</span>
							</section>
							<section className="py-5 flex items-center justify-center text-center">
								<p className="text-sm md:text-xl font-light">
									"{item.review}"
								</p>
							</section>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}

export default ClientsCarousel;
