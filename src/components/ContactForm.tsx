import { ValidationError, useForm } from "@formspree/react";
import { Link, Navigate } from "react-router-dom";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("xpwzagrk");
	if (state.succeeded) {
		return <Navigate to={"/thankyou"} replace />;
	}
	return (
		<article className="relative flex w-full mx-auto h-full items-center justify-center gap-5">
			<section className=" w-[40rem] h-full flex flex-col justify-center">
				<header className="mb-[5rem] md:mb-[8rem]">
					<h1 className="font-serif font-bold text-4xl md:text-7xl md:pb-3 text-center md:text-start">
						Contact Us.
					</h1>
					<h2 className="font-playfair font-bold text-xl md:text-3xl text-center md:text-start">
						We love hearing from you!
					</h2>
				</header>
				<main>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-5 mb-5"
					>
						<input
							name="username"
							type="text"
							className="border-b-2 w-full text-black py-2 focus:px-1 bg-transparent"
							placeholder="Name"
						/>
						<input
							name="subject"
							type="hidden"
							value={"New submission from {{username}}"}
						/>
						<input
							id="email"
							name="email"
							type="email"
							className="border-b-2 w-full text-black py-2 focus:px-1 bg-transparent"
							placeholder="Email"
						/>
						<ValidationError
							prefix="email"
							field="email"
							errors={state.errors}
						/>
						<textarea
							id="message"
							name="message"
							className="border-b-2 w-full text-black py-2 focus:px-1 bg-transparent"
							placeholder="How can we help?"
						/>
						<ValidationError
							prefix="message"
							field="message"
							errors={state.errors}
						/>
						<button
							type="submit"
							className="bg-black text-white rounded-[5px] p-1 text-2xl font-bold font-playfair hover:bg-slate-800"
							disabled={state.submitting}
						>
							Submit
						</button>
					</form>
					<Link
						to="/about"
						className="text-sm underline cursor-pointer hover:text-blue-500"
					>
						Learn more about us.
					</Link>
				</main>
			</section>
			<section className="w-[40rem] h-full hidden lg:block">
				<div className="h-full flex items-center">
					<img
						src="/assets/contact_us.webp"
						className="w-full h-[890px] brightness-75 object-cover opacity-90 rounded-[5px]"
						alt=""
					/>
				</div>
			</section>
		</article>
	);
};

export default ContactForm;
