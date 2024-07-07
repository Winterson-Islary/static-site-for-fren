import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="w-full bg-[#000000]">
			<div className="w-[80%] mx-auto border-t-4 border-white xl:flex md:gap-48 justify-between">
				<section className="md:flex md:gap-48">
					<section className="text-white font-roboto text-3xl flex flex-col gap-2 my-10 font-bold text-nowrap flex-shrink">
						<Link to="/about" className="hover:underline">
							ABOUT US
						</Link>
						<Link to="" className="hover:underline">
							CONTACT US
						</Link>

						<Link to="/blogs" className="hover:underline">
							BLOGS
						</Link>
						<Link to="" className="hover:underline">
							TERMS OF SERVICES
						</Link>
						<Link to="" className="hover:underline">
							PRIVACY POLICY
						</Link>
					</section>
					<section className="text-white font-roboto text-3xl flex flex-col gap-2 my-10 font-bold text-nowrap">
						<Link to="" className="hover:underline">
							PERSONALIZED SERVICES
						</Link>
						<Link to="" className="hover:underline">
							BUSINESS SERVICES
						</Link>
						<Link to="" className="hover:underline">
							DELIVERY SERVICES
						</Link>
					</section>
				</section>
				<section className="flex items-end">
					<section className="flex items-end pb-10">
						<div className="flex flex-col gap-2 ">
							<section className="text-white font-roboto text-2xl font-bold">
								PAYMENTS
							</section>
							<section className="flex gap-2">
								<img
									className="h-8"
									src="/assets/american-express.png"
									alt="american-express-card"
								/>
								<img
									className="h-8"
									src="/assets/mastercard.png"
									alt="mastercard"
								/>
								<img className="h-8" src="/assets/visa.png" alt="visa card" />
							</section>
						</div>
					</section>
				</section>
			</div>
			<div className="w-[80%]  mx-auto border-t-4 border-white py-10">
				<section className="flex justify-between items-center text-white pb-10">
					<span className=" font-montserrat ">
						2024 © WINTERSON, ALL RIGHTS RESERVED
					</span>
				</section>
				<section className="font-roboto font-medium text-md text-white text-center mx-auto w-[70%]">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
					provident. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem animi nemo praesentium quod vitae. Vitae aliquid non
					saepe, fugiat ut reprehenderit minima in ipsa dolor corporis
				</section>
			</div>
		</footer>
	);
}

export default Footer;
