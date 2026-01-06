"use client";

import {
	Calendar,
	ExternalLink,
	FileImageIcon,
	Loader2,
	Radio,
	Star,
	Terminal,
} from "lucide-react";
import Link from "next/link";
import NextVideo from "next-video";
import { useEffect, useState } from "react";
import { ActivityTag } from "@/components";
import { amIHerePreview, memoirPreview, wyldPreview } from "@/videos";

// --- Type Definitions ---
interface Repo {
	id: number;
	name: string;
	html_url: string;
	description: string | null;
	pushed_at: string;
	stargazers_count: number;
	language: string | null;
	homepage?: string;
	topics?: string[];
}

/**
 * GitHub repository data structure
 * Contains all necessary info for redesign project cards
 * Includes metadata and links for display
 */

// --- Demo URL Mapping ---
const DEMO_URLS: { [key: string]: string } = {
	"am-i-here-or-not": "https://am-i-here-or-not.vercel.app",
	"memoir-veritas": "https://memoir-veritas.vercel.app/",
	"wyld-ruby": "https://wyld-ruby.vercel.app",
};

// --- Video Preview Mapping ---
const VIDEO_PREVIEWS: { [key: string]: any } = {
	"am-i-here-or-not": amIHerePreview,
	"memoir-veritas": memoirPreview,
	"wyld-ruby": wyldPreview,

	// Add other video previews here as you create them
};

// --- Utility Function for Language Color ---
function getLanguageColor(language: string | null): string {
	const colors: { [key: string]: string } = {
		JavaScript: "bg-yellow-400",
		TypeScript: "bg-blue-600",
		CSS: "bg-purple-500",
		HTML: "bg-orange-500",
	};
	return colors[language || ""] || "bg-gray-500";
}

// --- Card Sub-Component ---
interface ProjectCardProps {
	repo: Repo;
	index: number;
}

const GitHubProjectCard: React.FC<ProjectCardProps> = ({ repo, index }) => {
	/**
	 * Renders individual redesign project card
	 * Displays repo info with preview and links
	 * Includes star count and language tag
	 */
	const updatedDate = new Date(repo.pushed_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const description =
		repo.description ||
		"A project without a description. Click to explore the code!";

	const formatNumber = (num: number): string => {
		return num.toLocaleString();
	};

	// Check if this repo has a demo URL
	const hasDemo = DEMO_URLS[repo.name] || repo.homepage;
	const demoUrl = DEMO_URLS[repo.name] || repo.homepage;

	// Check if video preview exists for this repo
	const hasVideoPreview = VIDEO_PREVIEWS[repo.name];
	const videoPreview = VIDEO_PREVIEWS[repo.name];

	return (
		<div
			className="relative flex flex-col gap-3 p-4 w-86 bg-background/50 border border-accent/20 rounded-lg group transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 animate-in fade-in slide-in-from-bottom-5"
			style={{ animationDelay: `${index * 100}ms` }}
		>
			{/* Video/Image Preview Container */}
			<div className="overflow-hidden relative z-0 w-full h-42 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
				{hasVideoPreview ? (
					<NextVideo
						src={videoPreview}
						autoPlay
						controls={false}
						loop
						muted
						playsInline
						className="w-full h-full object-cover"
					/>
				) : (
					<div className="flex flex-col items-center justify-center gap-2 text-accent/60">
						<FileImageIcon className="size-8" />
						<span className="text-xs text-center px-2">
							Preview will be here soon
						</span>
					</div>
				)}
			</div>

			{/* Title and Date Block */}
			<div className="flex flex-col gap-1 z-10">
				<div className="flex items-center gap-1 text-accent/80 text-xs">
					<Calendar className="size-3" />
					<span>{updatedDate}</span>
				</div>
				<h3 className="text-lg font-bold text-foreground/90 capitalize">
					{repo.name.replace(/-/g, " ")}
				</h3>
			</div>

			{/* Description */}
			<p className="text-foreground/60 text-xs mb-2 line-clamp-3 min-h-12">
				{description}
			</p>

			{/* Links Section */}
			<div className="flex items-center gap-4 z-10">
				{/* GitHub Link */}
				<Link
					href={repo.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1 text-xs text-foreground/70 hover:text-accent/90 transition-colors group/link"
				>
					<Terminal className="size-3" />
					<span>Code</span>
					<ExternalLink className="size-2 opacity-0 group-hover/link:opacity-100 transition-opacity" />
				</Link>

				{/* Live Demo Link */}
				{hasDemo && (
					<Link
						href={demoUrl!}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 text-xs text-foreground/70 hover:text-accent/90 transition-colors group/link"
					>
						<Radio className="size-3" />
						<span>Preview</span>
						<ExternalLink className="size-2 opacity-0 group-hover/link:opacity-100 transition-opacity" />
					</Link>
				)}
			</div>

			{/* Footer / Stats */}
			<div className="flex items-center justify-between z-10 mt-auto pt-2 border-t border-accent/20">
				{/* Star Count (left) */}
				<div className="flex items-center gap-1 text-sm font-medium text-foreground/70">
					<Star className="size-3" fill="currentColor" />
					<span>{formatNumber(repo.stargazers_count)}</span>
				</div>

				{/* Language Tag (right) */}
				{repo.language && (
					<div className="flex items-center gap-1 text-xs text-foreground/70">
						<div
							className={`size-2 rounded-full ${getLanguageColor(repo.language)}`}
						/>
						<span>{repo.language}</span>
					</div>
				)}
			</div>
		</div>
	);
};

// --- Main Client Component ---
export default function RedesignProjects() {
	/**
	 * Main redesign projects display component
	 * Fetches and renders GitHub redesign repositories
	 * Handles loading and error states
	 */
	const [repos, setRepos] = useState<Repo[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch("/api/github/redesign-repos");
				if (!response.ok) {
					throw new Error(`API returned status ${response.status}`);
				}
				const data = await response.json();
				setRepos(data);
			} catch (error) {
				console.error("Error fetching redesign repos:", error);
				setHasError(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRepos();
	}, []);

	if (isLoading) {
		return (
			<div>
				<ActivityTag text="fetch redesign_projects" main="github" />
				<div className="mt-6 text-sm font-mono text-foreground/60 flex items-center gap-2">
					<Loader2 className={"animate-spin"} />
					Loading redesign projects...
				</div>
			</div>
		);
	}

	if (hasError || repos.length === 0) {
		return (
			<div>
				<ActivityTag text="fetch redesign_projects" main="github" />
				<div className="mt-6 text-sm font-mono text-foreground/60">
					{repos.length === 0
						? "No redesign projects found. Add 'redesign' topic to your GitHub repositories."
						: "Could not load redesign projects. Please check GitHub API access."}
				</div>
			</div>
		);
	}

	return (
		<div>
			<ActivityTag text="fetch redesign_projects" main="github" />
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
				{repos.map((repo, index) => (
					<GitHubProjectCard
						key={repo.id}
						repo={repo}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}
