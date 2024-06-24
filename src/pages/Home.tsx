import DisplayClients from "@/components/DisplayClients";
import DisplayFeatures from "@/components/DisplayFeatures";
import DisplayServiceImage from "@/components/DisplayServiceImage";

const Home = () => {
	return (
		<>
			<div
				id="hero-section"
				className="pt-[3rem] md:pt-[5rem] h-[55rem] md:h-screen bg-black"
			>
				<section className="flex flex-col text-white mx-auto h-full w-[80%] lg:w-[50%] justify-center items-start">
					<span className=" font-tanker text-5xl md:text-7xl">
						Professional <span className="underline ">Errands</span> running
						service at your fingertips...
					</span>
					<span className="font-roboto font-semibold pt-5 md:text-xl md:w-[70%] xl:w-[55%]">
						Get your errands done with professional errand runners, everything
						from finding, booking, fixing, buying and delivering. One stop
						solution for any task
					</span>
				</section>
			</div>
			<div
				id="clients-container"
				className=" min-h-[10rem] py-10 flex flex-col justify-center border-b-4"
			>
				<span className="font-tanker font-bold text-center text-4xl border-b-4 border-b-black mx-auto">
					CLIENTS
				</span>
				<section className="pt-5">
					<DisplayClients />
				</section>
			</div>
			<div id="features-container" className=" h-screen flex flex-col py-10">
				<span className="font-tanker text-4xl text-center border-b-4 border-b-black mx-auto font-bold">
					Features
				</span>
				<span className="text-black text-center pt-4 font-roboto font-semibold text-lg">
					Life made easier one task at a time.
				</span>
				<section className="pt-10">
					<DisplayFeatures />
				</section>
			</div>
			<div
				id="services-container"
				className=" h-screen text-center text-2xl font-bold overflow-hidden"
			>
				<DisplayServiceImage />
			</div>
			<div className=" h-screen bg-red-300 text-center text-2xl font-bold">
				Section4
			</div>
		</>
	);
};
export default Home;
