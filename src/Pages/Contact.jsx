import React, { useRef, useState } from "react";
import { ExtraBtn, TitleCard } from "../Components";
import { linkedin, instagram, done } from "../Assets";
import { toast } from "react-hot-toast";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

function Contact() {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const serviceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
		const templateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

		emailjs
			.send(
				serviceID,
				templateID,
				{
					from_name: form.name,
					to_name: "Goutam Prasad",
					from_email: form.email,
					to_email: "goutam.prasad.2707@gmail.com",
					message: form.message,
				},
				publicKey
			)
			.then(
				() => {
					toast.success("Message sent successfully!");
					setForm({ name: "", email: "", message: "" });
				},
				(error) => {
					console.error(error);
					toast.error(
						"Failed to send message. Please try again."
					);
				}
			);
	};
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{
				delay: 0.4,
				duration: 0.5,
				ease: [1, -0.52, 0.11, 1.29],
			}}
			id="contact"
			className="sm:pt-24 py-6 flex flex-col items-center justify-center sm:justify-start"
		>
			<div className="flex flex-col sm:flex-row rounded-xl gap-10 p-10 w-full max-w-8xl">
				<div className="flex-1">
					<TitleCard title={"Let's Connect"} />
					<p className="text-justify sm:pr-10 pr-0">
						I'm always open to new{" "}
						<span className="text-accent/50 tracking-wider font-bold capitalize">
							opportunities
						</span>
						,{" "}
						<span className="text-accent/50 tracking-wider font-bold capitalize">
							collaborations
						</span>
						, or just a{" "}
						<span className="text-accent/50 tracking-wider font-bold capitalize">
							friendly chat
						</span>
						. Feel free to reach out to me via{" "}
						<span>email</span> or connect with me on{" "}
						<span className="text-accent/50 tracking-wider font-bold capitalize">
							social media
						</span>
						. I'll get back to you as soon as possible!
					</p>

					<div className="pt-10 flex gap-5 relative ">
						{/* Social media links */}
						<a
							href="https://www.linkedin.com/in/goutam-rudraxi"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:-translate-y-1.5 transition-all duration-300"
						>
							<img
								src={linkedin}
								alt="LinkedIn"
								className="w-10"
							/>
						</a>
						<a
							href="https://www.instagram.com/rudra.xii/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:-translate-y-1.5 transition-all duration-300"
						>
							<img
								src={instagram}
								alt="Instagram"
								className="w-10"
							/>
						</a>
					</div>
				</div>

				<div className="flex-1 w-full">
					{/* Contact form */}
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="relative flex flex-col gap-5 rounded-xl"
					>
						<input
							type="text"
							name="name"
							value={form.name}
							required
							onChange={handleChange}
							placeholder="Your Name"
							className="outline-none border-2 border-offWhite/20 rounded-xl px-4 py-3 w-full"
						/>
						<input
							type="email"
							name="email"
							value={form.email}
							required
							onChange={handleChange}
							placeholder="Your email"
							className="outline-none border-2 border-offWhite/20 rounded-xl px-4 py-3 w-full"
						/>
						<textarea
							name="message"
							value={form.message}
							required
							onChange={handleChange}
							placeholder="Your message"
							className="rounded-xl h-32 w-full resize-none outline-none border-2 border-offWhite/20 px-4 py-3"
						/>
						<div className="self-end px-6 py-2 ">
							<ExtraBtn text={"Submit"} icon={done} />
						</div>
					</form>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
