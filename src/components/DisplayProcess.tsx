function DisplayProcess() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 w-[95%] md:w-[50%] mx-auto gap-2">
			<section className="">
				<img
					className="w-full object-cover"
					src="./src/assets/img2.webp"
					alt="step 1 of process"
				/>
				<section className="flex flex-col justify-end pt-5 pb-2 font-playfair">
					<span>
						STEP <span className="font-montserrat">1.</span>
					</span>
					<span className="font-semibold text-xl">Reach us on WhatsApp.</span>
					<span>
						Connect directly with your dedicated virtual assistant via WhatsApp
						for personalized, one-on-one assistance.
					</span>
				</section>
			</section>
			<section className="">
				<img
					className="w-full object-cover"
					src="./src/assets/img2.webp"
					alt="step 1 of process"
				/>
				<section className="flex flex-col justify-end pt-5 pb-2 font-playfair">
					<span>
						STEP <span className="font-montserrat">2.</span>
					</span>
					<span className="font-semibold text-xl">We get to work.</span>
					<span>
						The moment you reach out, we spring into action! Our dedicated team
						will promptly begin working to find the ideal solution for your
						specific needs.
					</span>
				</section>
			</section>
			<section className=" lg:col-span-2 flex flex-col lg:flex-row">
				<img
					className="w-full lg:w-[50%] object-cover"
					src="./src/assets/img2.webp"
					alt="step 1 of process"
				/>
				<section className="flex flex-col justify-end py-2 lg:py-0 px-2 font-playfair">
					<span className="">
						STEP <span className="font-montserrat">3.</span>{" "}
					</span>
					<span className="text-xl font-semibold">
						Your guaranteed satisfaction.
					</span>
					<span>
						Our dedicated team is committed to exceeding your expectations. We
						take the time to understand your needs, develop a tailored plan, and
						execute it flawlessly.
					</span>
				</section>
			</section>
		</div>
	);
}

export default DisplayProcess;
