import DisplayServiceImage from "@/components/DisplayServiceImage";

const Home = () => {
	return (
		<>
			<div className=" h-screen bg-yellow-300 text-center text-2xl font-bold ">
				Section1
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
