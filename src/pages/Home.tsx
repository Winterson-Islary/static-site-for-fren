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
								Booking, Fixing, Buying, and Delivering. Your One-Stop Solution
								for Any Task.
							</span>
						</p>
					</span>
				</section>
				<section className="hidden lg:block">
					<img
						className=" -ml-10 sm:ml-0 xl:ml-[5rem] h-[550px]"
						src="./src/assets/delivery.svg"
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
				className=" h-full flex flex-col py-20 md:pt-[10rem] md:pb-[10rem] mx-auto w-[100%] bg-white border border-slate-100"
			>
				<section className="flex flex-col justify-center w-full">
					<span className=" font-playfair text-5xl md:text-7xl text-center font-bold tracking-tight">
						Features.
					</span>
					<span className=" text-center pt-2 font-playfair text-lg font-light italic">
						<strong>" </strong>Want to simplify your life with errand runners?{" "}
						<strong>Go-Eazy </strong>is here to help.<strong> "</strong>
					</span>
				</section>
				<section className="pt-[3rem]">
					<DisplayFeatures />
				</section>
			</div>
			<div
				id="services-container"
				className=" h-full w-full mx-auto bg-white flex flex-col items-center py-20 md:py-[5rem]"
			>
				<section className="flex flex-col w-full xl:w-[45%] justify-center md:px-1 rounded-lg">
					<span className="font-playfair tracking-tight text-5xl md:text-7xl font-bold text-center ">
						What we do.
					</span>
					<span className=" text-center pt-2 font-playfair font-light text-lg italic">
						<strong>" </strong>Simplifying life, one task at a time.
						<strong> "</strong>
					</span>
				</section>
				<section className="pt-5">
					<DisplayServices />
				</section>
			</div>
			<div
				id="process-holder"
				className=" h-full overflow-hidden py-20 md:py-[5rem] border-t border-slate-100"
			>
				<section className="text-center flex flex-col">
					<span className="text-5xl md:text-7xl font-playfair font-bold tracking-tight">
						Our Process.
					</span>
					<span className="font-playfair text-center italic text-lg pt-2">
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
				className=" min-h-[10rem] pb-2 flex flex-col justify-center bg-gray-100 "
			>
				<section className="flex flex-col justify-center w-full bg-black">
					<span className="font-playfair font-bold text-center text-5xl tracking-tight text-white pt-2">
						Clients.
					</span>
					<span className="font-playfair italic text-white text-lg font-light text-center pb-3">
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
				className=" h-full overflow-hidden py-20 md:py-[5rem] border-t border-slate-100"
			>
				<section className="text-center flex flex-col">
					<span className="text-5xl md:text-7xl font-playfair font-bold tracking-tight">
						About Us.
					</span>
					<span className="font-playfair text-center italic text-lg pt-2">
						<strong>" </strong>Your satisfaction, our Goal.
						<strong> "</strong>
					</span>
				</section>
				<section className=" w-full h-full pt-11">
					<div className="flex flex-col items-center gap-11 w-[80%] h-full mx-auto">
						<section className="">
							<img
								className=" h-[200px] md:h-[400px] w-[700px] object-cover rounded-lg"
								src="./src/assets/about.svg"
								alt=""
							/>
						</section>
						<section className=" w-full lg:w-[60%] xl:w-[50%] ">
							<span className=" font-playfair text-sm md:text-xl">
								<p className="">
									At <strong>Go-Eazy</strong>, we believe that time is precious.
									That's why we're dedicated to helping busy individuals like
									you manage your to-do list, one errand at a time.
								</p>{" "}
								<p className="pt-5 ">
									Our platform connects you with trusted and reliable errand
									runners who can help you with anything from grocery shopping
									to personal assistance, and everything in between. Our mission
									is to provide a seamless and convenient experience that saves
									you time and energy.{" "}
								</p>
								<p className="pt-5 ">
									Our team is passionate about helping you regain control of
									your schedule, so you can focus on what matters most. Let us
									handle your errands, so you can handle your life.
								</p>
							</span>
						</section>
					</div>
				</section>
			</div>
		</>
	);
};
export default Home;
