function DisplayProcess() {
	return (
		<div className="flex flex-col w-[95%] lg:w-[60%] 2xl:w-[50%] mx-auto gap-11">
			<section className="flex flex-col sm:flex-row  gap-6 items-center sm:items-start">
				<img
					className="w-[200px] h-[150px] rounded-xl object-cover"
					src="/assets/step1.webp"
					alt="step 1 of process"
				/>
				<section className="flex flex-col justify-center pt-5 pb-2 font-satoshi text-center sm:text-left">
					<span className="underline">
						STEP <span className="font-roboto">1.</span>
					</span>
					<span className="font-light text-2xl md:text-3xl">
						Reach us on WhatsApp.
					</span>
					<span className="text-sm md:text-base pt-2 font-light">
						Connect directly with your dedicated virtual assistant
						via WhatsApp for personalized, one-on-one assistance.
					</span>
				</section>
			</section>
			<section className="flex flex-col sm:flex-row-reverse gap-6 items-center sm:items-start">
				<img
					className="w-[200px] md:w-[300px] h-[150px] object-cover rounded-xl"
					src="/assets/step2.webp"
					alt="step 2 of process"
				/>
				<section className="flex flex-col justify-center text-center sm:text-right pt-5 pb-2 font-satoshi">
					<span className="underline">
						STEP <span className="font-roboto">2.</span>
					</span>
					<span className="font-light text-2xl md:text-3xl">
						We get to work.
					</span>
					<span className="text-sm md:text-base pt-2 font-light">
						The moment you reach out, we spring into action! Our
						dedicated team will promptly begin working to find the
						ideal solution for your specific needs.
					</span>
				</section>
			</section>
			<section className="flex flex-col sm:flex-row  gap-6 items-center sm:items-start">
				<img
					className="w-[200px] md:w-[300px] h-[150px] object-cover rounded-xl"
					src="/assets/step3.webp"
					alt="step 3 of process"
				/>
				<section className="flex flex-col justify-center text-center sm:text-left py-2 lg:py-0 px-2 font-satoshi">
					<span className="underline">
						STEP <span className="font-roboto">3.</span>{" "}
					</span>
					<span className="text-2xl md:text-3xl font-light ">
						Your guaranteed satisfaction.
					</span>
					<span className="text-sm md:text-base pt-2 font-light">
						Our dedicated team is committed to exceeding your
						expectations. We take the time to understand your needs,
						develop a tailored plan, and execute it flawlessly.
					</span>
				</section>
			</section>
		</div>
	);
}

export default DisplayProcess;
