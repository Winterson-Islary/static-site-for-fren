import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="w-full bg-[#000000]">
			<div className="w-[80%] mx-auto border-t-4 border-white xl:flex md:gap-48 justify-between">
				<section id="links" className="md:flex md:gap-48">
					<section className="text-white font-roboto text-xl md:text-3xl flex flex-col gap-2 my-10 font-bold text-nowrap flex-shrink">
						<Link to="/about" className="hover:underline">
							ABOUT US
						</Link>
						<Link to="/contact" className="hover:underline">
							CONTACT US
						</Link>

						<Link to="/terms" className="hover:underline">
							TERMS OF SERVICES
						</Link>
						<Link to="/terms" className="hover:underline">
							PRIVACY POLICY
						</Link>
					</section>
					<section className="text-white font-roboto text-xl md:text-3xl flex flex-col gap-2 my-10 font-bold text-nowrap">
						<Link to="/services" className="hover:underline">
							SERVICES
						</Link>
						<Link to="/blogs" className="hover:underline">
							BLOGS
						</Link>
					</section>
				</section>
				<section id="payments" className="flex flex-col">
					<div
						id="socials"
						className="text-white mb-10 xl:my-10 flex flex-col"
					>
						<p className="font-bold font-roboto text-xl md:text-2xl pb-2">
							SOCIALS
						</p>
						<div className="flex gap-5 relative">
							{/* <a className="cursor-pointer">
							<img src="/assets/socials/twitter.svg" alt="twitter logo" className="w-[30px]" />
						</a> */}
							<a
								href="https://www.instagram.com/goeazyuae/profilecard/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer"
							>
								<img
									src="/assets/socials/instagram.svg"
									alt="instagram logo"
									className="w-[30px]"
								/>
							</a>
							<a
								href="https://www.facebook.com/share/mR94S6niTdqZQWaH/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer"
							>
								<img
									src="/assets/socials/facebook.svg"
									alt="instagram logo"
									className="w-[30px] "
								/>
							</a>
							<a
								href="https://www.linkedin.com/company/go-eazy/"
								target="_blank"
								rel="noreferrer"
								className="cursor-pointer"
							>
								<img
									src="/assets/socials/linkedin.svg"
									alt="instagram logo"
									className="w-[30px] "
								/>
							</a>
						</div>
					</div>
					<section className="flex items-end pb-10">
						<div className="flex flex-col gap-2 ">
							<section className="text-white font-roboto text-xl md:text-2xl font-bold">
								PAYMENTS
							</section>
							<section className="flex gap-2 flex-wrap">
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
								<img
									className="h-8"
									src="/assets/visa.png"
									alt="visa card"
								/>
								<img
									className="h-8 w-12 bg-white"
									src="/assets/cod.png"
									alt="visa card"
								/>
								<img
									className="h-8 bg-white"
									src="/assets/gpay.png"
									alt="visa card"
								/>
								<img
									className="h-8 bg-white"
									src="/assets/upi.png"
									alt="visa card"
								/>
							</section>
						</div>
					</section>
				</section>
			</div>
			<div className="w-[80%]  mx-auto border-t-4 border-white py-10">
				<section className="flex flex-col md:flex-row gap-5 justify-between  text-white pb-10">
					<span className=" font-satoshi font-light ">
						2024 © GO-EAZY, ALL RIGHTS RESERVED
					</span>
					<span className="font-satoshi font-light uppercase">
						The Binary by Omniyat - tower 1 32 Marasi Drive Street -
						Business Bay - Dubai
					</span>
				</section>
				<section className="font-satoshi font-light text-base text-white text-center mx-auto md:w-[70%]">
					Go-Eazy, its services and its websites, www.Go-Eazy.com, is
					owned wholly by Go-Eazy Limited, Therefore, any referral to
					Go-Eazy or its services, directly refers to Go-Eazy Limited.
					United Arab of Emirates is our country of domicile
				</section>
				<section className="font-satoshi font-light text-lg text-white text-left mx-auto pt-5">
					[ developed by{" "}
					<span className="underline">
						<a
							href="https://www.blackryce.com"
							target="_blank"
							rel="noreferrer"
						>
							BlackRyce
						</a>
					</span>{" "}
					]
				</section>
			</div>
		</footer>
	);
}

export default Footer;
