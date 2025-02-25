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
		"client8",
		"client9",
		"client10",
		"client11",
		"client12",
		"client1",
		"client2",
		"client3",
		"client4",
		"client5",
		"client6",
		"client7",
		"client8",
		"client9",
		"client10",
		"client11",
		"client12",
	];
	return (
		<>
			<section className="flex pointer-events-none overflow-hidden text-black font-playfair font-black text-4xl md:text-5xl h-[5rem]">
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
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
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
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
					<span className="  mr-20">CLIENTS</span>
					<span className=" h-[90px] w-[5px]  bg-black mr-20">
						{""}
					</span>
				</motion.div>
			</section>
			<section className="flex pointer-events-none p-2 overflow-hidden border-y-2 border-black bg-white h-full">
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
					{clientImages.map((image, index) => {
						const indexing = `${index}key`;
						return (
							<img
								className=" h-[5rem] w-[10rem] mr-40 object-contain  px-2 "
								src={`/assets/clients/${image}.webp`}
								alt="client-image"
								key={indexing}
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
					{clientImages.map((image, index) => {
						const indexing = `${index}key`;
						return (
							<img
								className=" h-[5rem] w-[10rem] mr-40 object-contain  px-2 "
								src={`/assets/clients/${image}.webp`}
								alt="client-image"
								key={indexing}
							/>
						);
					})}
				</motion.div>
			</section>
		</>
	);
}

export default DisplayClients;
