import { motion } from "framer-motion";

function DisplayClients() {
	const clientImages = [
		"client1",
		"client2",
		"client3",
		"client4",
		"client5",
		"client6",
		"client7",
		"client1",
		"client2",
		"client3",
		"client4",
		"client5",
		"client6",
		"client7",
	];
	return (
		<>
			<section className="flex pointer-events-none overflow-hidden text-black font-playfair font-black text-6xl md:text-7xl ">
				<motion.div
					className=" flex flex-shrink-0 gap-20 items-center"
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					<span className="ml-20  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
				</motion.div>
				<motion.div
					className="flex flex-shrink-0 gap-20 items-center"
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					<span className="ml-20 mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">{""}</span>
				</motion.div>
			</section>
			<section className="flex pointer-events-none p-2 overflow-hidden border-y-2 border-black bg-white">
				<motion.div
					className="flex flex-shrink-0"
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 30,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					{clientImages.map((image) => {
						return (
							<img
								className=" h-20 w-40 mr-40 object-contain  px-2 "
								src={`/assets/clients/${image}.webp`}
								alt="client-image"
								key={image}
							/>
						);
					})}
				</motion.div>
				<motion.div
					className="flex flex-shrink-0"
					aria-hidden
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 30,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					{clientImages.map((image) => {
						return (
							<img
								className=" h-20 w-40 mr-40 object-contain  px-2 "
								src={`/assets/clients/${image}.webp`}
								alt="client-image"
								key={image}
							/>
						);
					})}
				</motion.div>
			</section>
		</>
	);
}

export default DisplayClients;
