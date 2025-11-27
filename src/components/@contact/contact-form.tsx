"use client";

// Imports necessary icons for the contact form and React state hook.
import { Loader2, Mail, Pen, Send, User } from "lucide-react";
import { useState } from "react";

// Imports ActivityTag and UI components for form creation.
import { ActivityTag } from "@/components";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupTextarea,
	Label,
	toast,
} from "@/components/ui";

// Access key for Web3Forms service.
// This key enables form submissions to be processed.
const WEB3FORMS_TOKEN = process.env.NEXT_PUBLIC_WEB3FORMS_TOKEN;

/**
 * ContactForm component.
 * Renders an interactive contact form for user submissions.
 * Handles form state, submission logic, and feedback.
 */
export default function ContactForm() {
	// State to manage loading status during submission.
	const [isLoading, setIsLoading] = useState(false);
	// State to store and manage form input data.
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	/**
	 * Handles the form submission event.
	 * Prevents default form behavior and sends data to Web3Forms.
	 * Displays toast notifications for submission status.
	 */
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Prevent submission if a request is already in progress.
		if (isLoading) return;

		setIsLoading(true);

		// Data object prepared for sending to Web3Forms API.
		const dataToSend = {
			...formData,
			access_key: WEB3FORMS_TOKEN,
		};

		// Displays a loading toast during the submission process.
		const loadingToastId = toast.loading("Sending message...");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(dataToSend),
			});

			const data = await response.json();

			toast.dismiss(loadingToastId);

			if (data.success) {
				toast.success(
					"Message sent successfully! I'll be in touch soon.",
				);
				setFormData({ name: "", email: "", message: "" });
			} else {
				console.error("Web3Forms Error:", data);
				toast.error(
					`Error: ${data.message || "Failed to send message."}`,
				);
			}
		} catch (error) {
			toast.dismiss(loadingToastId);
			console.error("Fetch Error:", error);
			toast.error("Network error. Please check your connection.");
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Updates the form data state on input change.
	 * Generic handler for input and textarea elements.
	 * Preserves previous state while updating the current field.
	 */
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		// Main container for the contact form.
		<div className={"grid w-full max-w-2xl gap-4"}>
			<ActivityTag text={"send_message"} main="contact" />

			{/* HTML form element for user input. */}
			<form onSubmit={handleSubmit} className="grid gap-4">
				{/* Input group for user's name. */}
				<InputGroup>
					<InputGroupInput
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder=" "
						required
					/>
					<InputGroupAddon>
						<User className="size-4" />
						<Label>Name</Label>
					</InputGroupAddon>
				</InputGroup>

				{/* Input group for user's email. */}
				<InputGroup>
					<InputGroupInput
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						placeholder=" "
						required
					/>
					<InputGroupAddon>
						<Mail className="size-4" />
						<Label>Email</Label>
					</InputGroupAddon>
				</InputGroup>

				{/* Textarea group for user's message. */}
				<InputGroup>
					<InputGroupTextarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder=" "
						className={"min-h-32"}
						required
					/>
					<InputGroupAddon align="block-start">
						<Pen className="size-4" />
						<Label>Message</Label>
					</InputGroupAddon>
				</InputGroup>

				{/* Hidden honeypot field for spam prevention. */}
				<input
					type="checkbox"
					name="botcheck"
					className="hidden"
					style={{ display: "none" }}
					tabIndex={-1}
					autoComplete="off"
				/>

				{/* Submit button for the contact form. */}
				<InputGroupButton
					variant="contactBtn"
					size="sm"
					type="submit"
					disabled={isLoading}
					className="gap-2"
				>
					{isLoading ? (
						<>
							<Loader2 className="size-4 animate-spin" />
							Sending...
						</>
					) : (
						<>
							<Send className="size-4" />
							Send Message
						</>
					)}
				</InputGroupButton>
			</form>
		</div>
	);
}
