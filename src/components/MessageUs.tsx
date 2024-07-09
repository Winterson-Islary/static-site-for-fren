function MessageUs() {
	return (
		<a
			href="https://wa.me/971508211455"
			target="_blank"
			rel="noreferrer"
			className="w-[200px] md:w-[250px]"
		>
			<div className="w-full flex">
				<div className="bg-white flex items-center w-[200px] md:w-[250px] rounded-lg p-2 justify-center gap-2 hover:bg-[#cc3115]  hover:cursor-pointer  duration-300 ease-in-out select-none">
					<img
						className="w-[30px] md:w-[40px]"
						src="/assets/whatsapp.png"
						alt="send us a message"
					/>
					<span className="text-black font-tanker text-xl md:text-2xl">
						Hire a runner
					</span>
				</div>
			</div>
		</a>
	);
}

export default MessageUs;
