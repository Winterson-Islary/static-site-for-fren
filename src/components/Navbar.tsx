import { cn } from "@/utils/tailwindUtils";
import { type Dispatch, type SetStateAction, useState } from "react";
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
	const [active, setActive] = useState(false);
	return (
		<div className="block md:hidden mx-auto border-separate bg-black fixed w-full h-[4rem] z-20">
			<nav className="w-full h-full flex items-center justify-between px-8">
				<div
					id="logo-container-mobile"
					className="font-tanker text-3xl text-white font-semibold"
				>
					<Link to="/">
						<img
							className="w-[9rem] h-[6rem]"
							src="/assets/logo.PNG"
							alt="go eazy logo"
						/>
					</Link>
				</div>
				<div
					id="sheet-container"
					className="flex items-center gap-3 text-white relative"
				>
					{!active && (
						<button
							type="button"
							className="w-full"
							onClick={() => setActive((prev) => !prev)}
						>
							<img
								src="/assets/hamburger.png"
								alt="hamburger icon"
								className="w-10 hover:cursor-pointer"
							/>
						</button>
					)}
					{active && (
						<button
							type="button"
							className="w-full "
							onClick={() => setActive((prev) => !prev)}
						>
							<img
								src="/assets/close.png"
								alt="hamburger icon"
								className="w-10 hover:cursor-pointer"
							/>
						</button>
					)}
					{active && (
						<section
							id="menu-container"
							className="flex flex-col gap-1 items-center justify-center w-[240px] h-[250px]  p-5 bg-black rounded-xl absolute -right-2 top-[4rem] duration-1000 ease-in-out -z-10"
						>
							{navItems.map((item) => (
								<NavbarItem
									key={item.label}
									label={item.label}
									link={item.link}
									setActive={setActive}
								/>
							))}
						</section>
					)}
				</div>
			</nav>
		</div>
	);
}

function DesktopNavbar() {
	return (
		<div className="hidden md:block border-separate rounded-xl fixed m-auto left-0 right-0 w-[90%] mt-5 bg-black z-20 h-[3.7rem]">
			<nav className=" flex w-full h-full items-center justify-between px-8">
				<div className="flex h-[65px] min-h-[60px] items-center justify-between gap-x-4 w-full">
					<div className="font-tanker text-3xl font-semibold text-white">
						<Link to="/" className="text-[#cc3115]">
							<img
								className="w-[9rem] h-[6.5rem]"
								src="/assets/logo.PNG"
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
	setActive,
}: {
	label: string;
	link: string;
	onLinkClick?: () => void;
	setActive?: Dispatch<SetStateAction<boolean>>;
}) {
	const location = useLocation();
	const isActive = location.pathname === link;

	return (
		<div className="relative">
			<Link
				to={link}
				className={cn(
					"font-tanker w-full justify-start text-3xl md:text-lg text-white hover:border-t-2 hover:border-[#cc3115] hover:text-[#cc3115]",
					isActive && "text-[#cc3115] border-t-2 border-[#cc3115]",
				)}
				onClick={() => {
					if (onLinkClick) {
						onLinkClick();
					}
					if (setActive) {
						setActive((prev) => !prev);
					}
				}}
			>
				{label}
			</Link>
		</div>
	);
}
