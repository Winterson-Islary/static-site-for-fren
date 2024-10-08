function FixedMessageUs() {
	return (
		<a
			href="https://api.whatsapp.com/send/?phone=971508211455&text=Hey+there%21+%0AI+need+your+help+to+run+some+errands%2E+&app_absent=0"
			target="_blank"
			rel="noreferrer"
		>
			<div className="block h-[70px] w-[70px] md:h-[80px] md:w-[80px] fixed bottom-2 right-2 md:bottom-10 md:right-5  overflow-hidden  hover:cursor-pointer hover:scale-105 duration-300 ease-in-out select-none z-20">
				<img src="/assets/whatsappFixed.png" alt="whatsapp logo" />
			</div>
		</a>
	);
}

export default FixedMessageUs;
