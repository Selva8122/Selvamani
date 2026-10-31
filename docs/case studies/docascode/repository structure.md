# Repository structure

The Docusaurus project lives at the root of the repository. The folders and files at the top level are:

| Path | Purpose |
| --- | --- |
| .github/workflows/ | GitHub Actions workflow that builds the site and deploys it to GitHub Pages |
| docs/ | All documentation content as Markdown files, grouped into folders such as portfolio, case studies and api reference. |
| src/ | Custom site code, including the stylesheet src/css custom.css. |
| static/ | Files copied to the site as-is, such as images (static/img/) and the favicon. |
| docusaurus.config.js | Main site configuration: title, URLs, navigation bar, footer and theme. |
| sidebars.js | Defines the sidebar menus and the order of pages in each. |
| package.json | Lists project dependencies and the npm scripts (start, build, serve, deploy, clear). |
| package-lock.json | Locks exact dependency versions so every build installs the same packages. |
| .gitignore | Tells Git which generated files not to track. |
| .gitattributes | Git settings for line endings and file handling. |
| README.md | Short project description with the local development, build and deployment commands. |

Two folders are created on your computer but are not stored in the repository:

- `node_modules/` (installed dependencies)
- `build/` (the generated site)

Git ignores both, and they can be recreated at any time with npm install and npm run build.

## Dependencies

The project uses Docusaurus core and the classic preset, React 18, and the Redoc package for rendering API reference content.The npm scripts defined in `package.json` are:

| Command | What it does |
| --- | --- |
| npm start | Starts the local development server with live reload. |
| npm run build | Builds the production site into the build folder |
| npm run serve | Serves the built site locally so you can test the production output |
| npm run clear | Clears Docusaurus caches when the build behaves unexpectedly |
| npm run deploy | Manual deployment command provided by Docusaurus. Not needed when GitHub Actions deploys automatically |
