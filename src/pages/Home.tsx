import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayProcess from "@/components/DisplayProcess";
import DisplayServices from "@/components/DisplayServices";
import MessageUs from "@/components/MessageUs";
import ClientsCarousel from "@/components/ReviewCarousel";
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
				className="relative h-screen flex w-full 2xl:w-[80%] mx-auto"
			>
				<section className="flex flex-col text-black h-full w-[80%] xl:w-[50%] 2xl:w-[60%] mx-auto md:ml-10 2xl:ml-32 sm:ml-[5rem] md:px-8 justify-center text-left z-10">
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate1"
						viewport={{
							once: true,
						}}
						className=" font-light uppercase font-satoshi text-5xl sm:text-6xl text-center md:text-left leading-[2.8rem] md:text-7xl  2xl:text-8xl"
					>
						<h1 className="">Your Premier Professional</h1>{" "}
						<h1 className="underline text-[#cc3115]">Errands</h1>{" "}
						<h1 className="">Running Service.</h1>
					</motion.span>
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate2"
						viewport={{
							once: true,
						}}
						className="font-satoshi font-light py-5 md:text-xl xl:text-3xl"
					>
						<p className="tracking-tight text-center md:text-left leading-snug text-background">
							<h2 className="text-black text-lg md:text-3xl">
								Professional Errand Runners for All Your Needs :
								Finding, Booking, Fixing, Buying, and Delivering
								anything ASAP.
							</h2>
						</p>
					</motion.span>
					<motion.span
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate3"
						viewport={{
							once: true,
						}}
						className="relative top-[2rem] w-full"
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
					<h1 className=" font-boska text-4xl md:text-6xl font-bold tracking-tight z-10">
						Features.
					</h1>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0" />
					<h2 className=" text-center font-satoshi text-sm  md:text-lg font-light z-10">
						<strong>"</strong>Want to simplify your life with errand
						runners? <strong>Go-Eazy </strong>is here to help.
						<strong>"</strong>
					</h2>
				</section>
				<section className="pt-[5rem] w-full">
					<DisplayFeatures />
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-roboto text-[#787876]">03</p>
					<p className="font-black font-robot text-[#787876]">06</p>
				</section>
			</div>
			<div
				id="services-container"
				className=" h-full w-full mx-auto flex flex-col items-center py-20 md:py-[5rem] overflow-hidden"
			>
				<section className="flex flex-col w-full xl:w-[45%] justify-center items-center md:px-1 rounded-lg relative">
					<h1 className="font-boska tracking-tight text-4xl md:text-6xl font-bold text-center z-10">
						What we do.
					</h1>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<h2 className=" text-center font-satoshi font-light text-sm md:text-lg z-10">
						<strong>"</strong>Simplifying life, one task at a time.
						<strong>"</strong>
					</h2>
				</section>
				<section className="pt-[2rem] w-full">
					<DisplayServices />
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-roboto text-[#787876]">04</p>
					<p className="font-black font-roboto text-[#787876]">06</p>
				</section>
			</div>
			<div
				id="process-holder"
				className=" h-full overflow-hidden py-20 md:py-[10rem] "
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<h1 className="text-4xl md:text-6xl font-boska font-bold tracking-tight z-10">
						Our Process.
					</h1>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0" />
					<h2 className="font-satoshi font-light text-center text-sm md:text-lg z-10">
						<strong>"</strong>Life made easy in 3 simple steps.
						<strong>"</strong>
					</h2>
				</section>
				<section className="pt-16 md:pb-10">
					<DisplayProcess />
				</section>
			</div>
			<div className="relative w-[95%] mx-auto">
				<section id="divider" className="h-[1px] bg-[#787876] " />
				<section className="flex justify-between">
					<p className="font-black font-roboto text-[#787876]">05</p>
					<p className="font-black font-roboto text-[#787876]">06</p>
				</section>
			</div>
			<div
				id="about-holder"
				className=" h-full overflow-hidden py-20 md:py-[10rem] "
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<h1 className="text-4xl md:text-6xl font-boska font-bold tracking-tight z-10">
						Why Choose Go-Eazy?
					</h1>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0" />
					<h2 className="font-satoshi font-light text-center text-sm md:text-lg z-10">
						<strong>"</strong>Errands Done Right, Every Time
						<strong>"</strong>
					</h2>
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
							<span className="font-satoshi text-sm md:text-lg tracking-tight">
								<ul>
									<li className="">
										<h3 className="font-satoshi font-light text-xl md:text-3xl pb-2">
											1. Take Back Your Time
										</h3>{" "}
										<p className="font-light text-sm md:text-lg">
											At Go-Eazy, we know your time is
											valuable. That's why we exist - to
											help busy people like you conquer
											your to-do list, one errand at a
											time.{" "}
										</p>
									</li>
									<li className="pt-5 ">
										<h3 className="font-satoshi font-light  text-xl md:text-3xl pb-2">
											2. Effortless Errands
										</h3>{" "}
										<p className="font-light text-sm md:text-lg">
											Our platform connects you with
											pre-vetted, reliable errand runners
											who can tackle anything from grocery
											shopping to personal errands and
											beyond.{" "}
										</p>
									</li>
									<li className="pt-5">
										<h3 className="text-xl md:text-3xl font-satoshi font-light pb-2">
											3. Seamless Convenience
										</h3>{" "}
										<p className="font-light text-sm md:text-lg">
											We prioritize a smooth and
											convenient experience. Get back your
											time and energy - let Go-Eazy handle
											the errands, so you can focus on
											what truly matters.{" "}
										</p>
									</li>
									<li className="pt-5">
										<h3 className="text-base md:text-3xl font-satoshi font-light pb-2">
											4. Focus on What Matters
										</h3>{" "}
										<p className="text-sm md:text-lg font-light">
											Our passionate team is dedicated to
											helping you reclaim control of your
											schedule. Leave the errands to us,
											and handle your life with ease.
										</p>
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
					<p className="font-black font-roboto text-[#787876]">06</p>
					<p className="font-black font-roboto text-[#787876]">06</p>
				</section>
			</div>
			<div
				id="carousel-holder"
				className=" h-full overflow-hidden py-20 md:pt-[10rem]"
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<h1 className="text-4xl md:text-6xl font-boska font-bold tracking-tight z-10">
						Reviews From Clients.
					</h1>
					<span className="absolute h-[110px] w-[110px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<h2 className="font-satoshi text-center font-light text-sm md:text-lg pt-2 z-10">
						<strong>"</strong>Hear from our happy clients.
						<strong>" </strong>
					</h2>
				</section>
				<section className="w-full h-full pt-20">
					<ClientsCarousel />
				</section>
			</div>
		</>
	);
};
export default Home;
