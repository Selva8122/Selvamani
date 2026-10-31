# Setting up Doc-as-Code

Follow these steps to recreate the setup. Commands are shown for Windows PowerShell or the VS
Code terminal.

## Creating the GitHub repository

1. Sign in to **GitHub** and select **New repository**.
2. Name the repository **Selvamani** and set the visibility to Public (GitHub Pages on a free account requires a public repository).
3. Create the repository with a **README** so that it can be cloned immediately.

## Cloning the repository to your computer

1. Open **GitHub Desktop** and **Sign In**.
2. Select **File > Clone repository**, choose Selva8122/Selvamani, and set the local path to
D:\Repos\Selvamani.
3. Select **Clone**. The repository folder now exists on your disk.
4. Select **Open** in Visual Studio Code to open the folder in the editor.

## Creating the Docusaurus project in the repository root

The Docusaurus generator needs an empty target folder, so create the project in a temporary folder and move its contents into the repository root.

1. Open the **VS Code** terminal with **Terminal > New Terminal**.
2. Move to the parent folder and run the generator
 **cd D:\Repos**
 **npx create-docusaurus@latest temp-site classic**
3. When the command finishes, copy everything inside temp-site (including hidden files such as .gitignore) into D:\Repos\Selvamani. Keep the existing .git folder and README.md.
4. Delete the temp-site folder.

The repository root now **contains docs, src, static, docusaurus.config.js, sidebars.js and package.json**, matching the structure in section 4.