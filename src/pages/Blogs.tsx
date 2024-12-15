import { Outlet } from "react-router-dom";

function Blogs() {
	return (
		<article className=" min-h-screen">
			<Outlet />
		</article>
	);
}

export default Blogs;
