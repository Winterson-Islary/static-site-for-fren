import ClientsCarousel from "@/components/ClientsCarousel";
import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayProcess from "@/components/DisplayProcess";
import DisplayServices from "@/components/DisplayServices";
import MessageUs from "@/components/MessageUs";
import { motion } from "framer-motion";

const Home = () => {
	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: 70,
		},
		animate1: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1,
				x: { duration: 2000 },
			},
		},
		animate2: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * 2,
				x: { duration: 2000 },
			},
		},
		animate3: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * 3,
				x: { duration: 2000 },
			},
		},
	};
	return (
		<>
			<div
				id="hero-section"
				className="relative h-screen flex w-full bg-[#f9f9f9]"
			>
				<section className="flex flex-col text-black h-full w-[80%] xl:w-[50%] 2xl:w-[60%]  ml-5 md:ml-10 2xl:ml-32 sm:ml-[5rem] md:px-8 justify-center text-left z-10">
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate1"
						viewport={{
							once: true,
						}}
						className=" font-tanker font-black text-[2.9rem] leading-[2.8rem] md:text-7xl  2xl:text-9xl"
					>
						<span className="">YOUR PREMIER PROFESSIONAL</span>{" "}
						<span className="underline text-[#cc3115]">
							ERRANDS
						</span>{" "}
						<span className="">RUNNING SERVICE.</span>
					</motion.span>
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate2"
						viewport={{
							once: true,
						}}
						className="font-thin py-5 md:text-xl xl:text-3xl"
					>
						<p className="tracking-tight leading-snug text-background font-tanker">
							<span className="text-black">
								Professional Errand Runners for All Your Needs :
								Finding, Booking, Fixing, Buying, and Delivering
								anything ASAP.
							</span>
						</p>
					</motion.span>
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate3"
						viewport={{
							once: true,
						}}
						className="relative top-[2rem]"
					>
						<MessageUs />
					</motion.span>
				</section>
				<section
					id="hero-section-logo"
					className=" hidden lg:block z-0 overflow-hidden h-full absolute right-0"
				>
					<motion.img
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate1"
						viewport={{ once: true }}
						className="md:top-20 xl:top-0 relative w-[50rem] xl:w-[60rem] h-full brightness-95 xl:brightness-100"
						src="/assets/delivery.svg"
						alt="delivery illustration"
					/>
					<span className="text-slate-600 italic flex items-end justify-end -rotate-90 absolute bottom-[50%] -right-[5rem]">
						<a
							href="https://storyset.com/business"
							className="text-[0.9rem]"
						>
							Business illustrations by Storyset
						</a>
					</span>
				</section>
			</div>
			<div
				id="clients-container"
				className="h-full flex flex-col justify-center border-t-2 border-black"
			>
				<section className="w-full overflow-hidden">
					<DisplayClients />
				</section>
			</div>
			<div
				id="features-container"
				className=" h-full flex flex-col py-20 md:py-[10rem] mx-auto w-[100%]"
			>
				<section className="flex flex-col items-center justify-center w-full relative">
					<span className=" font-playfair text-4xl md:text-6xl font-bold tracking-tight z-10">
						Features.
					</span>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0" />
					<span className=" text-center font-playfair text-sm  md:text-lg font-light z-10">
						<strong>"</strong>Want to simplify your life with errand
						runners? <strong>Go-Eazy </strong>is here to help.
						<strong>"</strong>
					</span>
				</section>
				<section className="pt-[5rem]">
					<DisplayFeatures />
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-bigShoulders text-[#787876]">
						03
					</p>
					<p className="font-black font-bigShoulders text-[#787876]">
						06
					</p>
				</section>
			</div>
			<div
				id="services-container"
				className=" h-full w-full mx-auto flex flex-col items-center py-20 md:py-[5rem] overflow-hidden"
			>
				<section className="flex flex-col w-full xl:w-[45%] justify-center items-center md:px-1 rounded-lg relative">
					<span className="font-playfair tracking-tight text-4xl md:text-6xl font-bold text-center z-10">
						What we do.
					</span>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<span className=" text-center font-playfair font-light text-sm md:text-lg z-10">
						<strong>"</strong>Simplifying life, one task at a time.
						<strong>"</strong>
					</span>
				</section>
				<section className="pt-[2rem] w-full">
					<DisplayServices />
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-bigShoulders text-[#787876]">
						04
					</p>
					<p className="font-black font-bigShoulders text-[#787876]">
						06
					</p>
				</section>
			</div>
			<div
				id="process-holder"
				className=" h-full overflow-hidden py-20 md:py-[10rem] "
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<span className="text-4xl md:text-6xl font-playfair font-bold tracking-tight z-10">
						Our Process.
					</span>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0" />
					<span className="font-playfair text-center text-sm md:text-lg z-10">
						<strong>"</strong>Life made easy in 3 simple steps.
						<strong>"</strong>
					</span>
				</section>
				<section className="pt-16 md:pb-10">
					<DisplayProcess />
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-bigShoulders text-[#787876]">
						05
					</p>
					<p className="font-black font-bigShoulders text-[#787876]">
						06
					</p>
				</section>
			</div>
			<div
				id="about-holder"
				className=" h-full overflow-hidden py-20 md:py-[10rem] "
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<span className="text-4xl md:text-6xl font-playfair font-bold tracking-tight z-10">
						Why Choose Go-Eazy?
					</span>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0" />
					<span className="font-playfair text-center text-sm md:text-lg z-10">
						<strong>"</strong>Errands Done Right, Every Time
						<strong>"</strong>
					</span>
				</section>
				<section className=" w-full h-full pt-11">
					<div className="flex flex-col items-center gap-11 w-[80%] h-full mx-auto">
						<section className="">
							<img
								className=" h-[200px] md:h-[400px] w-[700px] object-cover rounded-lg"
								src="/assets/about.svg"
								alt=""
							/>
						</section>
						<section className=" w-full lg:w-[60%] xl:w-[50%] ">
							<span className="font-serif text-sm md:text-lg ">
								<ul>
									<li className="">
										<strong className="font-roboto text-xl">
											#1. Take Back Your Time :
										</strong>{" "}
										<span className="text-base">
											At Go-Eazy, we know your time is
											valuable. That's why we exist - to
											help busy people like you conquer
											your to-do list, one errand at a
											time.{" "}
										</span>
									</li>
									<li className="pt-5 ">
										<strong className="font-roboto text-xl">
											#2. Effortless Errands :
										</strong>{" "}
										<span className="text-base">
											Our platform connects you with
											pre-vetted, reliable errand runners
											who can tackle anything from grocery
											shopping to personal errands and
											beyond.{" "}
										</span>
									</li>
									<li className="pt-5">
										<strong className="text-xl font-roboto ">
											#3. Seamless Convenience :
										</strong>{" "}
										<span className="text-base">
											We prioritize a smooth and
											convenient experience. Get back your
											time and energy - let Go-Eazy handle
											the errands, so you can focus on
											what truly matters.{" "}
										</span>
									</li>
									<li className="pt-5">
										<strong className="text-xl font-roboto">
											#4. Focus on What Matters :
										</strong>{" "}
										<span className="text-base">
											Our passionate team is dedicated to
											helping you reclaim control of your
											schedule. Leave the errands to us,
											and handle your life with ease.
										</span>
									</li>
								</ul>
							</span>
						</section>
					</div>
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-bigShoulders text-[#787876]">
						06
					</p>
					<p className="font-black font-bigShoulders text-[#787876]">
						06
					</p>
				</section>
			</div>
			<div
				id="carousel-holder"
				className=" h-full overflow-hidden py-20 md:pt-[10rem]"
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<span className="text-4xl md:text-6xl font-playfair font-bold tracking-tight z-10">
						Reviews From Clients.
					</span>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<span className="font-playfair text-center italic text-sm md:text-lg pt-2 underline z-10">
						<strong>"</strong>Hear from our happy clients.
						<strong>" </strong>
					</span>
				</section>
				<section className="w-full h-full pt-20">
					<ClientsCarousel />
				</section>
			</div>
		</>
	);
};
export default Home;
