import DisplayClients from "@/components/DisplayClients";
import DisplayServiceImage from "@/components/DisplayServiceImage";

const Home = () => {
	return (
		<>
			<div className="pt-[3rem] md:pt-[5rem] h-[55rem] md:h-screen bg-black">
				<section className="flex flex-col text-white mx-auto h-full w-[80%] lg:w-[50%] justify-center items-center">
					<span className=" font-tanker text-5xl md:text-7xl">
						Professional <span className="underline ">Errands</span> running
						service at your fingertips...
					</span>
					<span className="font-roboto font-semibold pt-5 md:text-xl">
						Get your errands done with professional errand runners, everything
						from finding, booking, fixing, buying and delivering. One stop
						solution for any task
					</span>
				</section>
			</div>
			<div className=" min-h-[10rem] py-10 text-center text-2xl font-bold flex flex-col justify-center">
				<span className="font-tanker text-4xl border-b-4 border-b-black mx-auto">
					CLIENTS
				</span>
				<section className="pt-5">
					<DisplayClients />
				</section>
			</div>
			<div className=" h-screen bg-red-300 text-center text-2xl font-bold">
				Section2
			</div>
			<div className=" h-screen text-center text-2xl font-bold overflow-hidden">
				<DisplayServiceImage />
			</div>
			<div className=" h-screen bg-red-300 text-center text-2xl font-bold">
				Section4
			</div>
		</>
	);
};
export default Home;
