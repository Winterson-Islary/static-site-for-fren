import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayServiceImage from "@/components/DisplayServiceImage";
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
					<span className=" font-tanker text-5xl md:text-7xl ">
						Your Premier Professional{" "}
						<span className="underline text-orange-500">Errands</span> running
						service...
					</span>
					<span className="font-montserrat font-thin pt-5 md:text-2xl md:w-[70%] xl:w-[55%]">
						<p className="tracking-tight leading-snug">
							Professional Errand Runners for All Your Needs: Finding, Booking,
							Fixing, Buying, and Delivering. Your One-Stop Solution for Any
							Task.
						</p>
					</span>
				</section>
			</div>
			<div
				id="clients-container"
				className=" min-h-[10rem] py-10 flex flex-col justify-center  "
			>
				<span className="font-tanker font-bold text-center text-4xl tracking-widest">
					CLIENTS
				</span>
				<section className="pt-5">
					<DisplayClients />
				</section>
			</div>
			<div
				id="features-container"
				className=" h-full flex flex-col py-20 md:pt-[10rem] md:pb-[5rem] bg-[#f8f6ef] border-y-[0.1em] border-slate-200 "
			>
				<span className=" font-tanker text-4xl md:text-7xl text-center font-bold tracking-widest">
					Features
				</span>
				<span className="text-black text-center pt-5 font-roboto font-light text-xl italic">
					<strong>"</strong>Want to simplify your life with errand runners?{" "}
					<strong>Go-Eazy </strong>is here to help.<strong>"</strong>
				</span>
				<section className="pt-14">
					<DisplayFeatures />
				</section>
			</div>
			<div
				id="services-container"
				className=" h-full bg-white py-20 md:pt-[10rem] md:pb-[5rem] flex flex-col"
			>
				<span className="font-tanker tracking-widest text-4xl md:text-7xl font-bold text-center">
					What we do
				</span>
				<span className="text-black text-center pt-5 font-roboto font-light text-xl italic">
					<strong>"</strong>Simplifying life, one task at a time.
					<strong>"</strong>
				</span>
				<section className="pt-10">
					<DisplayServices />
				</section>
			</div>

			<div
				id="place-holder"
				className=" h-screen text-center text-2xl font-bold overflow-hidden"
			>
				<DisplayServiceImage />
			</div>
		</>
	);
};
export default Home;
