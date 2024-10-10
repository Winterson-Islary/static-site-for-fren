const Welcome = () => {
	return (
		<main className=" h-[50rem] pt-[5rem] w-[90%] mx-auto flex flex-col items-center justify-center gap-2 md:gap-7">
			<h1 className="font-playfair text-3xl md:text-6xl">
				Thank you for reaching out.
			</h1>
			<div className="flex gap-10">
				<h2 className="place-self-end">
					<a
						href="/contact"
						className="text-lg md:text-2xl underline underline-offset-4"
					>
						Go back.
					</a>
				</h2>
				<h2 className="place-self-end">
					<a
						href="/"
						className="text-lg md:text-2xl underline underline-offset-4"
					>
						Go home.
					</a>
				</h2>
			</div>
		</main>
	);
};

export default Welcome;
