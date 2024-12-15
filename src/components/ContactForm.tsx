import { ValidationError, useForm } from "@formspree/react";
import { Link, Navigate } from "react-router-dom";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("xpwzagrk");
	if (state.succeeded) {
		return <Navigate to={"/thankyou"} replace />;
	}
	return (
		<article className="relative flex w-full mx-auto h-full items-center justify-center gap-5">
			<section className=" w-[37rem] h-[70%] flex flex-col justify-center">
				<header className="mb-[5rem] md:mb-[8rem]">
					<h1 className="font-boska font-bold text-4xl md:text-7xl md:pb-3 text-center md:text-start">
						Contact Us.
					</h1>
					<h2 className="font-satoshi font-light text-xl md:text-3xl text-center md:text-start">
						We love hearing from you!
					</h2>
				</header>
				<main>
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-5 mb-5 font-satoshi"
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
							className="bg-black text-white rounded-[5px] p-1 text-2xl font-bold font-satoshi hover:bg-slate-800"
							disabled={state.submitting}
						>
							Submit
						</button>
					</form>
					<Link
						to="/about"
						className="font-roboto text-sm underline cursor-pointer hover:text-blue-500"
					>
						Learn more about us.
					</Link>
				</main>
			</section>
			<section className="w-[37rem] h-[70%] overflow-hidden hidden lg:block">
				<div className="h-full flex items-center">
					<iframe
						className="w-full h-full rounded-[2px]"
						title="go-eazy office location"
						src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d585.2746682237026!2d55.266428812058884!3d25.187447340095737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f69e157416ff3%3A0x30402e548488e6d0!2sThe%20Binary%20by%20Omniyat%20-%20tower%201%2032%20Marasi%20Drive%20Street%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.1876174!2d55.266769999999994!5e0!3m2!1sen!2sin!4v1728750066509!5m2!1sen!2sin"
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>
		</article>
	);
};

export default ContactForm;
