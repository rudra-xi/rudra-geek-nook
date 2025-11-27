import { NextResponse } from "next/server";

// GitHub username for fetching repositories.
const GITHUB_USERNAME = "rudra-xi";
// List of specific repositories to fetch.
const SPECIFIC_REPOS = [
    "am-i-here-or-not",
    "archive-dark-desire",
    "finance-flow",
    "sylvan-reveal-animation",
    "quick-bezier",
    "flicker-bar-site",
];
// GitHub personal access token for authenticated requests.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * Handles GET requests to fetch details of specific GitHub repositories.
 * It retrieves data for a predefined list of repositories.
 * The fetched data is transformed and returned as a simplified JSON response.
 */
export async function GET() {
    try {
        // Prepare headers for the GitHub API request.
        const headers: HeadersInit = {
            "User-Agent": "rudra-geek-nook",
        };

        // Add authorization header if a token exists.
        if (GITHUB_TOKEN) {
            headers["Authorization"] = `token ${GITHUB_TOKEN}`;
        }

        // Fetch details for each specified repository concurrently.
        const fetchPromises = SPECIFIC_REPOS.map((repoName) => {
            const repoUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`;
            return fetch(repoUrl, { headers })
                .then((res) => {
                    // Handle non-OK responses from the API.
                    if (!res.ok) {
                        console.warn(
                            `Could not fetch repo ${repoName}: ${res.status}`,
                        );
                        return null;
                    }
                    return res.json();
                })
                .catch((error) => {
                    // Log errors during individual repository fetches.
                    console.error(`Error fetching repo ${repoName}:`, error);
                    return null;
                });
        });

        // Await all concurrent fetch operations.
        const results = await Promise.all(fetchPromises);
        // Filter out any failed repository fetches.
        const repos = results.filter((repo): repo is any => repo !== null);

        // Transform fetched data into a simplified format.
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
            // Project homepage or demo link.
            homepage: repo.homepage,
        }));

        // Return the simplified repository data.
        return NextResponse.json(simplifiedRepos);
    } catch (error: any) {
        // Catch and handle any server errors during the API request.
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
