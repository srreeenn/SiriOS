export interface GitHubUser {
    login: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    html_url: string;
  }
  
  export interface GitHubRepo {
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
  }
  
  const GITHUB_API = "https://api.github.com";
  
  // Optional: set GITHUB_TOKEN in your env to raise the unauthenticated rate
  // limit (60 req/hr per IP -> 5000 req/hr). Not required for this to work.
  function githubHeaders(): HeadersInit {
    const token = process.env.GITHUB_TOKEN;
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  
  /**
   * ISR: revalidate: 3600 per SYSTEM_ARCHITECTURE.md's "Performance Strategy"
   * ("GitHub: ISR with 1-hour revalidation"). Returns null on failure so
   * callers can render the UX_spec.md "GitHub API fail" placeholder state.
   */
  export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
    try {
      const res = await fetch(`${GITHUB_API}/users/${username}`, {
        headers: githubHeaders(),
        next: { revalidate: 3600 },
      });
      if (!res.ok) return null;
      return res.json();
    } catch {
      return null;
    }
  }
  
  /**
   * GitHub's REST API has no "pinned repos" endpoint (that requires the
   * GraphQL API + an authenticated token). As a no-token-required stand-in,
   * this pulls your most recently updated repos instead — swap for a GraphQL
   * call against api.github.com/graphql if you want true pinned-repo order
   * and have a token available server-side.
   */
  export async function fetchRecentRepos(
    username: string,
    limit = 6
  ): Promise<GitHubRepo[] | null> {
    try {
      const res = await fetch(
        `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=${limit}`,
        { headers: githubHeaders(), next: { revalidate: 3600 } }
      );
      if (!res.ok) return null;
      return res.json();
    } catch {
      return null;
    }
  }
  