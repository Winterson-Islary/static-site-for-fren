function MessageUs() {
	return (
		<main className="flex justify-center md:justify-start w-full">
			<a
				href="https://api.whatsapp.com/send/?phone=971508211455&text=Hey+there%21+%0AI+need+your+help+to+run+some+errands%2E+&app_absent=0"
				target="_blank"
				rel="noreferrer"
				className="w-full sm:w-[250px]"
			>
				<div className="w-full flex">
					<div className="w-full bg-[#cc3115] flex items-center p-2  justify-center gap-2 hover:bg-black  hover:cursor-pointer  duration-500 ease-in-out select-none">
						<span className="text-white font-satoshi font-light text-xl md:text-2xl flex items-center justify-center gap-2">
							Hire Runners{" "}
							<span className="text-3xl">&rarr;</span>
						</span>
					</div>
				</div>
			</a>
		</main>
	);
}

export default MessageUs;
