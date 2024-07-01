import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayServices from "@/components/DisplayServices";
import HeroImg from "@/components/HeroImg";

const Home = () => {
	return (
		<>
			<div
				id="hero-section"
				className="pt-[3rem] md:pt-[5rem] h-[55rem] md:h-screen"
			>
				<HeroImg />
				<section className="flex flex-col text-white mx-auto h-full w-[80%] lg:w-[50%] justify-center text-center items-center">
					<span className=" font-tanker font-bold text-5xl md:text-8xl">
						Your Premier Professional{" "}
						<span className="underline text-orange-500 font-playfair">
							ERRANDS
						</span>{" "}
						running service...
					</span>
					<span className="font-thin pt-5 md:text-2xl md:w-[70%] xl:w-[55%]">
						<p className="tracking-tight leading-snug text-background font-tanker">
							<span className="bg-black">
								Professional Errand Runners for All Your Needs : Finding,
								Booking, Fixing, Buying, and Delivering. Your One-Stop Solution
								for Any Task.
							</span>
						</p>
					</span>
				</section>
			</div>
			<div
				id="clients-container"
				className=" min-h-[10rem] py-10 flex flex-col justify-center bg-gray-100 "
			>
				<span className="font-playfair font-bold text-center text-5xl tracking-tight">
					Clients.
				</span>
				<section className="pt-5">
					<DisplayClients />
				</section>
			</div>
			<div
				id="features-container"
				className=" h-full flex flex-col py-20 md:pt-[10rem] md:pb-[10rem] mx-auto w-[100%] bg-white"
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
				className=" h-full w-full mx-auto bg-white flex flex-col xl:flex-row border-y-[0.05rem] border-black"
			>
				<section className="flex flex-col w-full xl:w-[45%] bg-black justify-center text-white py-10 md:px-1">
					<span className="font-playfair tracking-tight text-5xl md:text-7xl font-bold text-center">
						What we do.
					</span>
					<span className="text-white text-center pt-2 font-playfair font-light text-lg italic">
						<strong>" </strong>Simplifying life, one task at a time.
						<strong> "</strong>
					</span>
				</section>
				<section className="">
					<DisplayServices />
				</section>
			</div>

			<div
				id="place-holder"
				className=" h-screen text-center text-2xl font-bold overflow-hidden"
			>
				{/* <DisplayServiceImage /> */}
			</div>
		</>
	);
};
export default Home;
