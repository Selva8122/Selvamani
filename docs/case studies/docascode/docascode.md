# Docs-as-Code Workflow with Docusaurus

This guide explains how the help site is organised as a docs-as-code project: content is written in
Markdown, tracked in Git, built into a static website by Docusaurus, and published automatically to
GitHub Pages. It is written so that you can follow it step by step to rebuild the same setup from
scratch.

## Overview

In a docs-as-code workflow, documentation is treated the way developers treat source code. Writers
author plain-text files, store them in a Git repository, review changes through commits and pull
requests, and let an automated pipeline build and publish the result.
Docusaurus is an open-source static site generator from Meta. It converts Markdown files into a
documentation website with a navigation bar, a sidebar, search-engine-friendly pages and a
configurable theme. The output is a folder of plain HTML, CSS and JavaScript, which is why it can be hosted for free on GitHub Pages.

## Key facts about this setup

| Item | Value |
| --- | --- |
| GitHub repository | https://github.com/Selva8122/Selvamani |
| Local repository path | `D:\Repos\Selvamani` |
| Published site | https://selva8122.github.io/Selvamani/ |
| Site generator | Docusaurus 3 (classic preset) |
| Authoring format | Markdown (.md) files in the docs folder |
| Editor | Visual Studio Code |
| Git client | GitHub Desktop (or the Git command line) |
| Default branch | `main` |
| Hosting | GitHub Pages |
| Publishing method | GitHub Actions workflow (automatic deployment) |


