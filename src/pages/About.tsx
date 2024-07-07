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
						<span className=" font-playfair text-sm md:text-lg text-center">
							<p className="">
								At <strong>Go-Eazy</strong>, we believe that time is precious.
								That's why we're dedicated to helping busy individuals like you
								manage your to-do list, one errand at a time.
							</p>{" "}
							<p className="pt-5 ">
								Our platform connects you with trusted and reliable errand
								runners who can help you with anything from grocery shopping to
								personal assistance, and everything in between. Our mission is
								to provide a seamless and convenient experience that saves you
								time and energy.{" "}
							</p>
							<p className="pt-5 ">
								Our team is passionate about helping you regain control of your
								schedule, so you can focus on what matters most. Let us handle
								your errands, so you can handle your life.
							</p>
						</span>
					</section>
				</div>
			</section>
		</div>
	);
}

export default About;
