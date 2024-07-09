function Blogs() {
	return (
		<div className="h-full  py-[10rem]">
			<section className=" flex flex-col gap-2 md:gap-5 items-center justify-center h-full">
				<section className="relative">
					<img
						className="w-[500px] md:w-[700px] h-[500px] md:h-[700px]"
						src="/assets/no-blogs.svg"
						alt="no blogs illustration"
					/>
					<span className="text-slate-400 italic flex items-end justify-end -rotate-90 absolute bottom-[50%] -right-[5rem]">
						<a href="https://storyset.com/people">
							People illustrations by Storyset
						</a>
					</span>
				</section>
				<h1 className=" font-playfair text-3xl md:text-5xl text-center">
					No Blogs Available Yet...
				</h1>
			</section>
		</div>
	);
}

export default Blogs;
