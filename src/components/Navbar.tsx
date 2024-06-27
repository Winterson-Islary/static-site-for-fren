import { cn } from "@/utils/tailwindUtils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
		</>
	);
};

const navItems = [
	{ label: "Home", link: "/" },
	{ label: "Services", link: "/services" },
	{ label: "Blogs", link: "/blogs" },
	{ label: "About us", link: "/about" },
];

function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="block md:hidden mx-auto border-separate bg-black absolute w-full">
			<nav className="container flex items-center justify-between px-8">
				<div
					id="logo-container-mobile"
					className="font-tanker text-3xl text-white font-semibold"
				>
					<Link to="/">
						<img
							className="w-[9rem] h-[6rem]"
							src="./src/assets/logo.png"
							alt="go eazy logo"
						/>
					</Link>
				</div>
				<div
					id="sheet-container"
					className="flex items-center gap-3 text-white"
				>
					INCOMPLETE
				</div>
			</nav>
		</div>
	);
}

function DesktopNavbar() {
	return (
		<div className="hidden md:block border-separate rounded-lg  bg-black absolute m-auto left-0 right-0 w-[70%] mt-5">
			<nav className="container flex items-center justify-between px-8">
				<div className="flex h-[65px] min-h-[60px] items-center justify-between gap-x-4 w-full">
					<div className="font-tanker text-3xl font-semibold text-white">
						<Link to="/" className="text-orange-500">
							<img
								className="w-[9rem] h-[6.5rem]"
								src="./src/assets/logo.png"
								alt="go eazy logo"
							/>
						</Link>
					</div>
					<div className="flex h-full items-center gap-5">
						{navItems.map((item) => (
							<NavbarItem
								key={item.label}
								label={item.label}
								link={item.link}
							/>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
}

function NavbarItem({
	label,
	link,
	onLinkClick,
}: { label: string; link: string; onLinkClick?: () => void }) {
	const location = useLocation();
	const isActive = location.pathname === link;

	return (
		<div className="relative">
			<Link
				to={link}
				className={cn(
					"font-tanker w-full justify-start text-lg text-white hover:border-t-2 hover:border-orange-500 hover:text-orange-500 ",
					isActive && "text-orange-500 border-t-2 border-orange-500",
				)}
				onClick={() => {
					if (onLinkClick) onLinkClick();
				}}
			>
				{label}
			</Link>
		</div>
	);
}
