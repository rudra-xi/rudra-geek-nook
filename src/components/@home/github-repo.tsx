"use client";

import { Calendar, Link2, Loader2, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ActivityTag } from "@/components";
import { CursorFollow, CursorProvider } from "@/components/ui";

// Define the TypeScript interface for a repository object
interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    pushed_at: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

/**
 * Client-side function to fetch repository data from our API route
 */
async function getRecentRepos(): Promise<Repo[]> {
    try {
        const res = await fetch("/api/github/recent-repos", {
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`API route failed: ${res.status}`);
            throw new Error(`API route returned status ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching repos:", error);
        return [];
    }
}

/**
 * Main Client Component for displaying recent GitHub activity.
 */
export default function GitHubRepo() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const data = await getRecentRepos();
                setRepos(data);
            } catch (e) {
                console.log(e);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRepos();
    }, []);

    // Format number with commas
    const formatNumber = (num: number): string => {
        return num.toLocaleString();
    };

    // Get programming language color
    const getLanguageColor = (language: string | null): string => {
        const colors: { [key: string]: string } = {
            JavaScript: "bg-yellow-400",
            TypeScript: "bg-blue-600",
            CSS: "bg-purple-500",
            HTML: "bg-orange-500",
        };
        return colors[language || ""] || "bg-gray-500";
    };

    if (isLoading) {
        return (
            <div>
                <ActivityTag text="fetch recent_repos" main="github" />

                <div className="mt-6 text-sm font-mono flex items-center text-foreground/60 space-x-4">
                    <Loader2 className={"animate-spin"} />
                    <span>Loading activity...</span>
                </div>
            </div>
        );
    }

    if (hasError || repos.length === 0) {
        return (
            <div>
                <ActivityTag text="fetch recent_repos" main="github" />

                <div className="mt-6 text-sm font-mono text-foreground/60">
                    Error fetching data or no recent activity found.
                </div>
            </div>
        );
    }

    return (
        <div>
            <ActivityTag text="fetch recent_repos" main="github" />

            <ul className={"mt-6 text-sm space-y-4 font-mono"}>
                {repos.map((repo) => (
                    <li key={repo.id} className={"text-foreground/70"}>
                        {/* Repository Header */}
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-accent/80" />
                            <span className={"text-accent/80 text-xs"}>
                                {new Date(repo.pushed_at).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    },
                                )}
                            </span>
                        </div>

                        {/* Repository Name and Link */}
                        <div className={"flex items-center space-x-4"}>
                            <p>{repo.name}</p>
                            <Link
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    "hover:text-accent/90 hover:underline underline-offset-4 transition-colors font-semibold text-foreground/90 mb-1 flex items-center space-x-2"
                                }
                            >
                                <Link2 className="size-4" />
                                <span className={"text-xs font-light"}>
                                    Link
                                </span>
                                <CursorProvider>
                                    <CursorFollow>
                                        <span className={"cursor-hover"}>
                                            preview
                                        </span>
                                    </CursorFollow>
                                </CursorProvider>
                            </Link>
                        </div>

                        {/* Repository Description */}
                        {repo.description && (
                            <p className="text-foreground/60 text-xs my-1.5 max-w-3xl md:max-w-4xl lg:max-w-5xl">
                                {repo.description}
                            </p>
                        )}

                        {/* Repository Stats */}
                        <div className="flex items-center gap-4 text-xs text-foreground/50">
                            {/* Stars */}
                            <div className="flex items-center gap-1">
                                <Star className="size-3" fill="currentColor" />
                                <span>
                                    {formatNumber(repo.stargazers_count)}
                                </span>
                            </div>

                            {/* Language */}
                            {repo.language && (
                                <div className="flex items-center space-x-2">
                                    <div
                                        className={`size-2 rounded-full ${getLanguageColor(repo.language)}`}
                                    />
                                    <span>{repo.language}</span>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
