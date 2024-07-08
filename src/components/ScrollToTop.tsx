function ScrollToTop() {
	return (
		<div
			className="hidden sm:block bg-[#cc3115] h-[100px] w-[100px] rounded-full fixed right-5 bottom-5  hover:cursor-pointer hover:scale-105 duration-300 ease-in-out select-none z-20"
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
		>
			<p className="font-black font-bigShoulders text-2xl leading-tight tracking-tighter flex items-center justify-center h-[100%]  ease-in-out duration-200">
				SCROLL UP
			</p>
		</div>
	);
}

export default ScrollToTop;
