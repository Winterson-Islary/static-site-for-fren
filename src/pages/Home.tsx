import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayServiceImage from "@/components/DisplayServiceImage";
import DisplayServices from "@/components/DisplayServices";

const Home = () => {
	return (
		<>
			<div
				id="hero-section"
				className="pt-[3rem] md:pt-[5rem] h-[55rem] md:h-screen"
			>
				<section
					id="hero-img-container"
					className=" -top-0 h-[75%] md:h-full w-full absolute bg-[url('./src/assets/hero-section.webp')] brightness-[30%] bg-cover xl:bg-[center_top_-10rem] -z-50 pointer-events-none"
				/>
				<section className="flex flex-col text-white mx-auto h-full w-[80%] lg:w-[50%] justify-center items-start">
					<span className=" font-tanker text-5xl md:text-7xl">
						Your Premier Professional{" "}
						<span className="underline ">Errands</span> running service...
					</span>
					<span className="font-roboto font-semibold pt-5 md:text-2xl md:w-[70%] xl:w-[55%]">
						<p className="tracking-tight leading-snug">
							Professional Errand Runners for All Your Needs: Finding, Booking,
							Fixing, Buying, and Delivering. Your One-Stop Solution for Any
							Task.
						</p>
					</span>
				</section>
			</div>

			<div id="features-container" className=" h-full flex flex-col py-20">
				<span className=" font-tanker text-4xl md:text-7xl text-center border-b-4 border-b-black mx-auto font-bold tracking-wide">
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
				className=" h-full bg-red-300 py-10 flex flex-col"
			>
				<span className="font-tanker tracking-wide text-4xl md:text-7xl font-bold border-b-4 border-b-black mx-auto">
					What we do
				</span>
				<section className="pt-10">
					<DisplayServices />
				</section>
			</div>
			<div
				id="clients-container"
				className=" min-h-[10rem] py-10 flex flex-col justify-center border-b-4 border-b-slate-100"
			>
				<span className="font-tanker font-bold text-center text-4xl border-b-4 border-b-black mx-auto tracking-wide">
					CLIENTS
				</span>
				<section className="pt-5">
					<DisplayClients />
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
