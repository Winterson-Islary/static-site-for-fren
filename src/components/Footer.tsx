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

						<Link to="/terms" className="hover:underline">
							TERMS OF SERVICES
						</Link>
						<Link to="/terms" className="hover:underline">
							PRIVACY POLICY
						</Link>
					</section>
					<section className="text-white font-roboto text-3xl flex flex-col gap-2 my-10 font-bold text-nowrap">
						<Link to="/services" className="hover:underline">
							SERVICES
						</Link>
						<Link to="/blogs" className="hover:underline">
							BLOGS
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
						2024 © GO-EAZY, ALL RIGHTS RESERVED
					</span>
				</section>
				<section className="font-roboto font-medium text-md text-white text-center mx-auto md:w-[70%]">
					Go-Eazy, its services and its websites, www.Go-Eazy.com, is owned
					wholly by Go-Eazy Limited, Therefore, any referral to Go-Eazy or its
					services, directly refers to Go-Eazy Limited. United Arab of Emirates
					is our country of domicile
				</section>
			</div>
		</footer>
	);
}

export default Footer;
