# How the workflow works

Every change follows the same path from your editor to the live site:

| Stage | What happens | Where |
| --- | --- | --- |
| 1. Write | Create or edit a Markdown file in the docs folder. | VS Code |
| 2. Preview | Run the local development server and check the page in a browser. | Terminal, localhost |
| 3. Commit and push | Review the changed files, write a commit message, and push to the main branch. | GitHub Desktop |
| 4. Build | GitHub Actions installs dependencies and runs the Docusaurus build. A broken link or invalid configuration fails the build. | GitHub Actions |
| 5. Publish | The built site is deployed to GitHub Pages and goes live at the site URL. | GitHub Pages |