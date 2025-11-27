"use client";

// Imports necessary icons for skill categories and React type.
import { Bot, Code, Layers, Terminal, Wrench, Zap } from "lucide-react";
import type React from "react";
// Imports ActivityTag component for UI display.
import { ActivityTag } from "@/components";

/**
 * Interface for a single skill item.
 * Defines the structure for each individual skill.
 */
interface SkillItem {
	name: string;
	level: 1 | 2 | 3;
}

/**
 * Interface for a skill category.
 * Groups related skills under a specific category.
 */
interface SkillCategory {
	id: number;
	title:
		| "Frontend Development"
		| "Backend Development"
		| "Tools & Platforms"
		| "AI/ML Tools"
		| "Design & Other";
	icon: React.ElementType;
	description: string;
	skills: SkillItem[];
}

/**
 * ProficiencyDots component.
 * Renders a visual representation of skill proficiency.
 * Displays 1 to 3 filled dots to indicate expertise level.
 */
const ProficiencyDots: React.FC<{ level: 1 | 2 | 3 }> = ({ level }) => {
	// Array to map and render proficiency dots.
	const dots = [1, 2, 3];
	return (
		<div className="flex gap-0.5 ml-1">
			{dots.map((dot) => (
				<div
					key={dot}
					className={`size-1 rounded-full transition-colors duration-300 ${
						dot <= level ? "bg-accent/90" : "bg-accent/30"
					}`}
				/>
			))}
		</div>
	);
};

// Constant array containing all skill categories and their respective skills.
const SKILL_CATEGORIES: SkillCategory[] = [
	{
		id: 1,
		title: "Frontend Development",
		icon: Code,
		description:
			"Core technologies and frameworks for building user interfaces and client-side logic.",
		skills: [
			{ name: "React", level: 3 },
			{ name: "Next.js", level: 3 },
			{ name: "TypeScript", level: 3 },
			{ name: "Tailwind CSS", level: 3 },
			{ name: "GSAP", level: 2 },
			{ name: "Motion", level: 1 },
			{ name: "HTML5 & CSS3", level: 2 },
		],
	},
	{
		id: 2,
		title: "Backend Development",
		icon: Terminal,
		description:
			"Server-side logic, API creation, database management, and authentication systems.",
		skills: [
			{ name: "Node.js (Express)", level: 2 },
			{ name: "MongoDB", level: 2 },
			{ name: "REST APIs", level: 3 },
			{ name: "Authentication (JWT)", level: 2 },
		],
	},
	{
		id: 3,
		title: "Tools & Platforms",
		icon: Wrench,
		description:
			"Version control, cloud deployment, package management, and development utilities.",
		skills: [
			{ name: "Git & GitHub", level: 3 },
			{ name: "npm / pnpm", level: 3 },
			{ name: "HTTPie", level: 2 },
			{ name: "Vercel", level: 3 },
			{ name: "Netlify", level: 2 },
			{ name: "Zed", level: 2 },
			{ name: "VS Code", level: 3 },
		],
	},
	{
		id: 4,
		title: "AI/ML Tools",
		icon: Bot,
		description:
			"Experience leveraging AI models, integrating large language models, and utilizing AI-powered coding assistants.",
		skills: [
			{ name: "Gemini", level: 3 },
			{ name: "OpenAI API", level: 2 },
			{ name: "Perplexity", level: 2 },
			{ name: "DeepSeek", level: 2 },
			{ name: "Ollama (Local LLMs)", level: 1 },
			{ name: "Prompt Engineering", level: 2 },
		],
	},
	{
		id: 5,
		title: "Design & Other",
		icon: Layers,
		description:
			"Design proficiency, creative tools, and supplementary skills outside of core development.",
		skills: [
			{ name: "Photoshop", level: 3 },
			{ name: "Figma", level: 2 },
			{ name: "Canva", level: 3 },
			{ name: "UX/UI Principles", level: 2 },
			{ name: "Technical Writing", level: 2 },
			{ name: "Project Management", level: 1 },
		],
	},
];

/**
 * Interface for SkillCategoryCard component props.
 * Defines the data required to render a skill category card.
 */
interface SkillCategoryCardProps {
	category: SkillCategory;
	index: number;
}

/**
 * SkillCategoryCard component.
 * Renders an individual card for a skill category.
 * Displays the category title, description, and a list of skills.
 * Includes visual proficiency indicators for each skill.
 */
const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
	category,
	index,
}) => {
	// Destructure category properties for easier access.
	const { title, description, skills, icon: IconComponent } = category;

	return (
		<div
			className="relative flex flex-col gap-3 p-6 w-86 bg-background/50 border border-accent/20 rounded-lg group transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 focus-within:scale-[1.02] focus-within:border-accent/80 focus-within:ring-2 focus-within:ring-accent/50 animate-in fade-in slide-in-from-bottom-5"
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className="flex items-center gap-3 z-10 border-b border-accent/20 pb-2">
				<IconComponent className="size-6 text-accent" />
				<h3 className="text-xl font-bold text-foreground/90">
					{title}
				</h3>
			</div>

			<p className="text-foreground/60 text-sm mb-2 min-h-12">
				{description}
			</p>

			<div className="flex flex-wrap gap-2 mt-auto pt-2">
				{skills.map((skill) => (
					<span
						key={skill.name}
						className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-accent/10 text-foreground/80 rounded-full border border-accent/30 hover:bg-accent/20 transition-colors"
					>
						<Zap
							className="size-3 text-accent/80"
							strokeWidth={2}
							fill="none"
						/>
						{skill.name}
						<ProficiencyDots level={skill.level} />
					</span>
				))}
			</div>
		</div>
	);
};

/**
 * SkillSetGrid component.
 * This is the main component for displaying all skill categories.
 * It renders a responsive grid of SkillCategoryCard components.
 * The grid layout adjusts based on screen size, showing 2 or 3 columns.
 */
export default function SkillSetGrid() {
	return (
		<div>
			<ActivityTag
				text="fetch all_competencies_by_category"
				main="skills"
			/>
			{/* Grid container for skill category cards. */}
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
				{SKILL_CATEGORIES.map((category, index) => (
					<SkillCategoryCard
						key={category.id}
						category={category}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}
