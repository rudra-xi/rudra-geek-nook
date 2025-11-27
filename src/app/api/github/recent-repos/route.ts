import { NextResponse } from "next/server";

// GitHub username for API requests.
const GITHUB_USERNAME = "rudra-xi";
// GitHub API URL for fetching recent repositories.
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=5`;
// GitHub personal access token for authenticated requests.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * Handles GET requests to fetch recent GitHub repositories.
 * Retrieves the 5 most recently pushed repositories for the user.
 * Returns a simplified JSON response of repository data.
 */
export async function GET() {
	try {
		// Initialize headers for the GitHub API request.
		const headers: HeadersInit = {
			"User-Agent": "rudra-geek-nook",
		};

		// Add Authorization header if a GitHub token exists.
		if (GITHUB_TOKEN) {
			headers["Authorization"] = `token ${GITHUB_TOKEN}`;
		}

		// Fetch recent repositories from the GitHub API.
		const response = await fetch(GITHUB_API_URL, { headers });

		// Handle non-OK responses from the GitHub API.
		if (!response.ok) {
			return NextResponse.json(
				{ error: `GitHub API returned status ${response.status}` },
				{ status: response.status },
			);
		}

		// Parse the JSON response from GitHub.
		const repos = await response.json();

		// Transform data to include only necessary fields.
		const simplifiedRepos = repos.map((repo: any) => ({
			// Unique identifier for the repository.
			id: repo.id,
			// Name of the repository.
			name: repo.name,
			// URL to the repository on GitHub.
			html_url: repo.html_url,
			// Description of the repository.
			description: repo.description,
			// Timestamp of the last push to the repository.
			pushed_at: repo.pushed_at,
			// Number of stargazers for the repository.
			stargazers_count: repo.stargazers_count,
			// Primary programming language used.
			language: repo.language,
		}));

		// Return the simplified recent repository data.
		return NextResponse.json(simplifiedRepos);
	} catch (error: any) {
		// Catch and handle any errors during the API request.
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
