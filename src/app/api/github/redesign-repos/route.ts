import { NextResponse } from "next/server";

// GitHub username for API requests.
const GITHUB_USERNAME = "rudra-xi";
// GitHub personal access token for authenticated requests.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * Handles GET requests for GitHub repositories with "redesign" topic.
 * Fetches all user repositories and filters them by the "redesign" topic.
 * Returns a simplified JSON response of the filtered repositories.
 */
export async function GET() {
    try {
        // Prepare headers for GitHub API requests.
        const headers: HeadersInit = {
            "User-Agent": "rudra-geek-nook",
        };

        // Add authorization header if a token exists.
        if (GITHUB_TOKEN) {
            headers["Authorization"] = `token ${GITHUB_TOKEN}`;
        }

        // Fetch all repositories for the specified GitHub user.
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
            { headers },
        );

        // Handle non-OK responses from GitHub API.
        if (!response.ok) {
            return NextResponse.json(
                { error: `GitHub API returned status ${response.status}` },
                { status: response.status },
            );
        }

        // Parse the JSON response from GitHub.
        const repos = await response.json();

        // Filter repositories that have "redesign" as a topic.
        const redesignRepos = repos.filter(
            (repo: any) => repo.topics && repo.topics.includes("redesign"),
        );

        // Transform filtered data to a simplified structure.
        const simplifiedRepos = redesignRepos.map((repo: any) => ({
            // Unique identifier for the repository.
            id: repo.id,
            // Name of the repository.
            name: repo.name,
            // URL to repository on GitHub.
            html_url: repo.html_url,
            // Description of the repository.
            description: repo.description,
            // Timestamp of the last push to the repository.
            pushed_at: repo.pushed_at,
            // Number of stargazers for the repository.
            stargazers_count: repo.stargazers_count,
            // Primary programming language used.
            language: repo.language,
            // Project homepage or demo link.
            homepage: repo.homepage,
            // List of repository topics.
            topics: repo.topics,
        }));

        // Return simplified redesign repository data.
        return NextResponse.json(simplifiedRepos);
    } catch (error: any) {
        // Handle and return any errors during the API request.
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
