function DisplayClients() {
	const clientImages = ["img1", "img2", "img3", "img4", "img5"];
	return (
		<section className="flex items-center gap-2 justify-evenly mx-auto w-full md:w-[70%] flex-wrap pointer-events-none">
			{clientImages.map((image) => {
				return (
					<img
						className=" h-[50px] w-[125px] object-contain px-1"
						src={`./src/assets/clients/${image}.webp`}
						alt="client-image"
						key={image}
					/>
				);
			})}
		</section>
	);
}

export default DisplayClients;
