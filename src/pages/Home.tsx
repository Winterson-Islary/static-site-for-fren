import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayProcess from "@/components/DisplayProcess";
import DisplayServices from "@/components/DisplayServices";
import HeroImg from "@/components/HeroImg";

const Home = () => {
	return (
		<>
			<div
				id="hero-section"
				className="pt-[3rem] md:pt-[5rem] h-[55rem] lg:h-screen flex w-[100%] items-center  overflow-hidden"
			>
				<HeroImg />
				<section className="flex flex-col  text-white h-full w-[80%] lg:w-[50%] ml-10 sm:ml-[5rem] md:px-8 justify-center text-left">
					<span className=" font-clash font-black text-5xl md:text-7xl xl:text-9xl">
						YOUR PREMIER PROFESSIONAL{" "}
						<span className="underline text-[#cc3115]">ERRANDS</span> RUNNING
						SERVICE.
					</span>
					<span className="font-thin pt-5 md:text-xl xl:text-3xl">
						<p className="tracking-tight leading-snug text-background font-tanker">
							<span className="bg-black">
								Professional Errand Runners for All Your Needs : Finding,
								Booking, Fixing, Buying, and Delivering anything ASAP. Your
								One-Stop Solution for Any Task.
							</span>
						</p>
					</span>
				</section>
				<section className="hidden lg:block">
					<img
						className=" -ml-10 sm:ml-0 xl:ml-[5rem] h-[550px]"
						src="/assets/delivery.svg"
						alt="delivery illustration"
					/>
					<span className="text-slate-600 italic flex items-end justify-end -rotate-90 absolute bottom-[50%] -right-[5rem]">
						<a href="https://storyset.com/business" className="text-[0.9rem]">
							Business illustrations by Storyset
						</a>
					</span>
				</section>
			</div>

			<div
				id="features-container"
				className=" h-full flex flex-col py-20 md:py-[10rem] mx-auto w-[100%] bg-white border border-slate-100"
			>
				<section className="flex flex-col items-center justify-center w-full relative">
					<span className=" font-playfair text-5xl md:text-7xl font-bold tracking-tight z-10">
						Features.
					</span>
					<span className="absolute h-[150px] w-[150px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<span className=" text-center pt-2 font-playfair text-lg font-light italic underline z-10">
						<strong>" </strong>Want to simplify your life with errand runners?{" "}
						<strong>Go-Eazy </strong>is here to help.<strong> "</strong>
					</span>
				</section>
				<section className="pt-[5rem]">
					<DisplayFeatures />
				</section>
			</div>
			<div
				id="services-container"
				className=" h-full w-full mx-auto bg-gray-100 flex flex-col items-center py-20 md:py-[10rem]"
			>
				<section className="flex flex-col w-full xl:w-[45%] justify-center items-center md:px-1 rounded-lg relative">
					<span className="font-playfair tracking-tight text-5xl md:text-7xl font-bold text-center z-10">
						What we do.
					</span>
					<span className="absolute h-[150px] w-[150px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<span className=" text-center pt-2 font-playfair font-light text-lg italic underline z-10">
						<strong>" </strong>Simplifying life, one task at a time.
						<strong> "</strong>
					</span>
				</section>
				<section className="pt-[5rem]">
					<DisplayServices />
				</section>
			</div>
			<div
				id="process-holder"
				className=" h-full overflow-hidden py-20 md:py-[10rem] border-t border-slate-100"
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<span className="text-5xl md:text-7xl font-playfair font-bold tracking-tight z-10">
						Our Process.
					</span>
					<span className="absolute h-[150px] w-[150px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<span className="font-playfair text-center italic text-lg pt-2 underline z-10">
						<strong>" </strong>Life made easy in 3 simple steps.
						<strong> "</strong>
					</span>
				</section>
				<section className="pt-16 md:pb-10">
					<DisplayProcess />
				</section>
			</div>
			<div
				id="clients-container"
				className=" min-h-[10rem] py-5 flex flex-col justify-center bg-gray-100 "
			>
				<section className="flex flex-col justify-center w-full text-black ">
					<span className="font-playfair font-bold text-center text-5xl tracking-tight pt-2">
						Clients.
					</span>
					<span className="font-playfair italic text-lg font-light text-center pb-3 underline">
						<strong>" </strong>We are proud to work with our exceptional
						clients!<strong> "</strong>
					</span>
				</section>
				<section className="pt-3">
					<DisplayClients />
				</section>
			</div>
			<div
				id="about-holder"
				className=" h-full overflow-hidden py-20 md:py-[10rem] border-t border-slate-100"
			>
				<section className="text-center flex flex-col relative justify-center items-center">
					<span className="text-5xl md:text-7xl font-playfair font-bold tracking-tight z-10">
						Why Choose Go-Eazy?
					</span>
					<span className="absolute h-[150px] w-[150px] rounded-full bg-[#cc3115] center-0 z-0">
						{""}
					</span>
					<span className="font-playfair text-center italic text-lg pt-2 underline z-10">
						<strong>" </strong>Errands Done Right, Every Time
						<strong> "</strong>
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
							<span className=" font-playfair text-sm md:text-lg ">
								<ul>
									<li className="">
										<strong className="text-xl underline">
											Take Back Your Time:
										</strong>{" "}
										At Go-Eazy, we know your time is valuable. That's why we
										exist - to help busy people like you conquer your to-do
										list, one errand at a time.{" "}
									</li>
									<li className="pt-5 ">
										<strong className="text-xl underline">
											Effortless Errands:
										</strong>{" "}
										Our platform connects you with pre-vetted, reliable errand
										runners who can tackle anything from grocery shopping to
										personal errands and beyond.{" "}
									</li>
									<li className="pt-5">
										<strong className="text-xl underline">
											Seamless Convenience:
										</strong>{" "}
										We prioritize a smooth and convenient experience. Get back
										your time and energy - let Go-Eazy handle the errands, so
										you can focus on what truly matters.{" "}
									</li>
									<li className="pt-5">
										<strong className="text-xl underline">
											Focus on What Matters:
										</strong>{" "}
										Our passionate team is dedicated to helping you reclaim
										control of your schedule. Leave the errands to us, and
										handle your life with ease.
									</li>
								</ul>
							</span>
						</section>
					</div>
				</section>
			</div>
		</>
	);
};
export default Home;
