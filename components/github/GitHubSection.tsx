import { Panel } from "@/components/ui/Panel";
import { Tag } from "@/components/ui/Tag";
import { ContributionGraph } from "./ContributionGraph";
import { fetchGitHubUser, fetchRecentRepos } from "@/lib/github";

// CHANGE ME — your GitHub username.
const GITHUB_USERNAME = "srreeenn";

interface GitHubSectionProps {
  compact?: boolean;
}

export async function GitHubSection({ compact = false }: GitHubSectionProps) {
  const [user, repos] = await Promise.all([
    fetchGitHubUser(GITHUB_USERNAME),
    fetchRecentRepos(GITHUB_USERNAME, 4),
  ]);

  return (
    <Panel tag="github.activity">
      <ContributionGraph username={GITHUB_USERNAME} />

      {!compact && (
        <>
          {user ? (
            <p className="mt-4 text-sm text-text-secondary">
              {user.public_repos} public repos · {user.followers} followers
            </p>
          ) : (
            <p className="mt-4 text-sm text-text-muted">profile unavailable — check back later</p>
          )}

          {repos && repos.length > 0 && (
            <ul className="mt-4 space-y-2">
              {repos.map((repo) => (
                <li key={repo.name} className="flex items-center gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-text-primary hover:text-accent"
                  >
                    {repo.name}
                  </a>
                  {repo.language && <Tag>{repo.language}</Tag>}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-accent hover:underline"
      >
        view full profile →
      </a>
    </Panel>
  );
}