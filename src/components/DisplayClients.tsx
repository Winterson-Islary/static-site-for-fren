function DisplayClients() {
	const clientImages = ["client1", "client2", "client3", "client4", "client5"];
	return (
		<section className="flex items-center gap-2 justify-evenly mx-auto w-full md:w-[70%] flex-wrap pointer-events-none">
			{clientImages.map((image) => {
				return (
					<img
						className=" h-[50px] w-[125px] object-contain px-1"
						src={`/assets/clients/${image}.webp`}
						alt="client-image"
						key={image}
					/>
				);
			})}
		</section>
	);
}

export default DisplayClients;
