import { cn } from "@/utils/tailwindUtils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
		</>
	);
};

const navItems = [
	{ label: "Services", link: "/services" },
	{ label: "Blogs", link: "/blogs" },
	{ label: "About us", link: "/about us" },
];

function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="block md:hidden border-separate border-b bg-background">
			<nav className="container flex items-center justify-between px-8 py-2">
				<div id="logo-container-mobile" className="text-2xl">
					<Link to="/">LOGO</Link>
				</div>
				<div id="sheet-container" className="flex items-center gap-3">
					INCOMPLETE
				</div>
			</nav>
		</div>
	);
}

function DesktopNavbar() {
	return (
		<div className="hidden md:block border-separate border-b bg-background">
			<nav className="container flex items-center justify-between px-8">
				<div className="flex h-[80px] min-h-[60px] items-center justify-between gap-x-4 w-full">
					<div className="font-montserrat font-semibold">
						<Link to="/">LOGO</Link>
					</div>
					<div className="flex h-full">
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
		<div className="relative flex items-center">
			<Link
				to={link}
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"font-roboto font-bold w-full justify-start text-md text-muted-foreground hover:text-foreground",
					isActive && "text-foreground",
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
