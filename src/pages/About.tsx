function About() {
	return (
		<div
			id="about-holder"
			className=" h-full overflow-hidden py-[10rem] md:pt-[15rem] border-t border-slate-100"
		>
			<section className="text-center flex flex-col relative justify-center items-center">
				<span className="text-5xl md:text-7xl font-playfair font-bold tracking-tight z-10">
					About Us.
				</span>
				<span className="absolute h-[150px] w-[150px] rounded-full bg-[#cc3115] center-0 z-0">
					{""}
				</span>
				<span className="font-playfair text-center italic text-lg pt-2 underline z-10">
					<strong>" </strong>Your satisfaction, our Goal.
					<strong> "</strong>
				</span>
			</section>
			<section className=" w-full h-full pt-11">
				<div className="flex flex-col items-center gap-11 w-[80%] h-full mx-auto">
					<section className="">
						<img
							className=" h-[200px] md:h-[400px] w-[700px] object-cover rounded-lg"
							src="/assets/about.svg"
							alt=""
						/>
					</section>
					<section className=" w-full lg:w-[60%] xl:w-[50%] ">
						<span className="md:leading-loose font-playfair text-sm md:text-xl">
							<p className="">
								<strong>Go-Eazy </strong>is the new personal assistant of choice
								for thousands of users across the UAE. With bunch of positive
								reviews on google, we always ensure you get what you want!
							</p>{" "}
							<p className="pt-5">
								Simply text <strong>Go-Eazy </strong>in whatsapp with your
								requirements and sit back while we handle it all! Whether its
								arranging the perfect day, buying an item, taking care of your
								pet, cleaning your home, renting a car or taking a car to the
								garage anddeliveringanything else asap that comes to your mind,
								Go-Eazy can handle it all!
							</p>
						</span>
					</section>
				</div>
			</section>
		</div>
	);
}

export default About;
