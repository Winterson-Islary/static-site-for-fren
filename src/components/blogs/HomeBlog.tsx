import { Store } from "@/utils/Store";
import { Link } from "react-router-dom";

const HomeBlog = () => {
	return (
		<article className="h-full w-[90%] mx-auto pt-[10rem]">
			<header>
				<h1 className="text-7xl font-satoshi pb-10 font-light">
					Blogs
				</h1>
			</header>
			<section className="font-satoshi grid grid-cols-[repeat(auto-fit,minmax(0,_500px))] gap-5 justify-center md:justify-start">
				{Store.BlogsList.map((item) => (
					<Link
						to={"/blogs/blog1"}
						key={item.title}
						className="grid grid-cols-1 [grid-template-rows:auto_auto_1fr] border p-2"
					>
						<img src={item.image} alt={`${item.blog} preview`} />
						<h2 className="text-3xl font-light">{item.title}</h2>
						<h3 className="text-lg font-light tracking-tight leading-7 pt-2">
							{item.preview}
						</h3>
					</Link>
				))}
			</section>
		</article>
	);
};

export default HomeBlog;
