# [freelancer-home](https://freelancer-home-6e057d.netlify.app/)
This is the third project from Juan Pablo's course of [CSS Grid and Flexbox](https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/).

> **Note:** Recently I've started to deploy my sites on [Netlify](https://app.netlify.com/), therefore I changed the domain's link to the new one (in the HTML and the README files), but I kept the screenshots that held the old domain (there's no reason for changing it, the result would've been the same with a different link only).

> **Disclaimer:** I'm starting to learn how to use **Git/Github** correctly, therefore there'll be plenty of pull requests, commits and other stuff as tests in this repository, however, *this won't represent my way of working forever*, I'll learn more things along the way as always :D!.

## Table of contents
* [Preview](#preview)
* [What I learned](#what-i-learned)
* [Reports](#reports)
    - [Lighthouse](#lighthouse)
    - [GTmetrix](#gtmetrix)
* [Open Graph](#open-graph)
    - [Facebook](#facebook)
    - [Twitter](#twitter)

## Preview
![](readme/screenshot.png)

## What I learned
* As first I'd like to say that this time I didn't focus too much on adding plenty of things to the project, or in reading lots of articles for improving the project's quality because I was more focused on learning more about Git, and for now I can say that I've learned very useful things:

    - How to initialize a local Git repository with the command **git init**.
    - How to add changes to the staging (or index) with the command **git add** followed by the name of the file or folder (if it's that's just one) or with a period (if you'd like to add everything). There are also other options such as **-a** and **-all** which from what I understood allows adding all the files to the index (even those that were deleted), but I'm not completely sure yet, therefore I'll continue looking for more information.
    - How to commit the changes with the **git commit** command followed by the flag **-m** which allows us to write the summary of the commit (if it's that you can define the change in just one line), or without it which will send you to your default text editor and will allow you to write a larger message describing the commit.

    > **Note:** A lecture that I had when learning all of this was about the good practices for writing commit messages such as: 

    - Summaries should be no longer than 50 characters
    - Separate subject from body with a blank line.
    - Do not end the subject line with a period.
    - Use the imperative mood in the subject line (Add the submodules > I added the submodules).
    - The summary should have a bullet or issue tracker at the end (this way if the change is related to an issue, it's easier to understand your changes and to have a better track of the project).
    - Capitalize the subject line.
    - Body should be no longer than 72 characters.
    - The content should say the reason/s of the change, how it works, and other additional stuff that could be useful.
    - The body should explain what and why more than how (the code already explains it).

    - How to add files to the staging and commit it at the same time with the **git commit** command followed by the **-am** flag which allows us to do both things and write the summary of the change.

    > **Disclaimer:** You can only do it once you've already done the process individually in that repository at least once.

    - How to clone repositories with the **git clone** command followed by the URL that should finish in .git.
    - How to clone repositories and its submodules (if it's the case) with the command **git clone** followed by the **--recursive** flag.
    - How to create new branches with the **git branch** command followed by the name of the branch.
    - How to move to another branch with the **git checkout** command followed by the name of the branch you'd like to go to.
    - How to create a branch at the same time that you move to it with the **git checkout** command followed by the **-b** flag and the name of the branch you want to create.
    - How to add a remote repository to your local repository as upstream with the **git remote add** command followed by the name you'd like to assign to the repository to refer to it once added (when you clone a repository, you already have one upstream repository called **origin**) and the URL of the repository at the end.
    - How to push commits from your local repository to your remote repository with the  **git push** command followed by the remote repository and the branch where you'd like to send those changes (for instance, ***origin main***).
    - How to change the name of a branch with the **git branch** command followed by the **-m** flag, or **-M** to force the change no matter what.
    - How to bring the most recent changes from the remote repository to our local repository with the **git pull** command followed by the repository and the branch where we'd like to receive the changes from.
    - How to solve conflicts (for instance, when you bring changes from your remote repository and those changes have also been touched by you) by going to the file/s of the conflict and eliminating the change you don't want to preserve and then pushing everything back to the upstream.
    - How to add submodules (which are repositories nested inside another main repository) with the **git submodule add** command followed by the URL of the git repository you'd like to add as a submodule.
    - How to initialize the submodule configuration with the **git submodule** command followed by the **--init** flag.
    - How to update the submodules according to the commit the .gitsubmodules file is pointing to with the **git submodule update** command.
    - How to update the submodules according to the last commit in the original repository with the command **git submodule update** followed by the **--remote** flag.
    - How to load submodules if it's that you didn't clone them altogether with the main repository with the **git submodule** command followed by the **--init** flag.
    - How to delete branches in your local repository with the **git branch** command followed by the **-d** flag (or **-D** if you want to force it) and the branch you'd like to remove.
    - How to delete branches in your remote repository with the **git push** command followed by the **-d** flag (or **-D**if you want to force it) and the upstream repository you'd like to point to with the branch you'd like to remove.
    - How to add aliases with the **git config** command followed by the **--global** flag and its alias with the next syntax **alias.co** (in this case **co** is my alias for checkout) and the command the alias stands for at the end.
    - How to reset branches to a specific commit with the **git reset** command followed by the **--hard** or **--soft** flag (with soft you conserve the changes that are in the index) and the ID of the commit you'd like to go back to.
    - How to see the state of your repository (which files have been added to the staging and which don't) with the **git status** command.
    - How to see the commits that have been done in the repository with the **git log** command. It'll show you all the details of the commits, including the whole ID number, if you'd like to have a shorter version of it you can use the **--oneline** flag at the end.
    - How to see the commits that a person in the team has made with the **git shortlog** command.

    > **Note:** there's a certain probability that I had forgotten some things along the way, but I think that I've summarized well enough the most important things I learned this week at least.

* Furthermore, I also was learning a few things related to Github on my own such as:
    
    - How to create pull requests.
    - How to create issues (and adding labels for categorizing them).
    - How to point Github pages to the dev branch to test changes before sending them to the main branch.
    - How to upload repositories with Netlify (pointing to the main branch) and have a connected deploy environment.

> **Note:** now, something important I'd like to comment is that I created my deploy environment with Github and Netlify, and thanks to that I can have Github pages pointing to the dev branch to test things before going to the main branch (with Netlify).

* The project includes some basic Javascript and JSON, I'm not confident to say that I did everything on my own, most of the code was copy + paste from the course, but I'd like to comment that I added a few things to challenge myself:
    
    - I change the structure of the injected HTML (originally it only injected a basic container with an <img> element and a few texts) by adding more complex things to the layout such as the picture element with the sources to the image in **avif** and **webp** format (and with different options of size according to the DPR of the device where the user would be visiting the page).
    - Due to I changed the structure of the HTML injected by Javascript I also had to change the structure of the object in JSON where Javascript was taking the data from (Wasn't too much complicated because I've already worked with objects in SASS).

* I added some basic animations to go beyond (they're only available for desktop due to in mobile the animations when hovering doesn't make too much sense).

* Also, this is the first project where I try to use totally responsive sizes with the [**clamp()**](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()) function in order to avoid overwriting in different viewport widths. Here's an example to illustrate what I'm talking about:
    ![](readme/clamp().png)

* And as a last thing, I'd like to say that I learned some basic GNU/Linux commands to improve my development speed such as:
    - **rm** to remove fihttps://www.hostinger.es/tutoriales/renombrar-archivos-linuxles.
    - **rmdir** to remove empty directories.
    - **rm -r** to remove folder that aren't empty.
    - **rm -rf** to force the deletion.
    - **touch** to create files without data.
    - **cat** to create files with data.
    - **nano** to open the Linux default editor.
    - **vi** to open the Unix default editor.
    - **mv** to rename (or move the location of) a file.

> **Note:** Something important to add is that when deploying the sites in Netlify I had some troubles with respect to the names (there were sites' names already taken), therefore in order to avoid those issues I'll start to name the sites with an abbreviation of the repository's name followed by an unique ID of 6 characters, e.g. **fh-2381ch**.

> That'd be everything for this project :D.

> Some lectures I did while doing this project (this time I didn't read something about English grammar in order to impruve these REAMDE files quality because of the time, but I'll upload this part of the section once I read something new): 

- [Used and Abused – CSS Inheritance and Our Misuse of the Cascade](https://www.phase2technology.com/blog/used-and-abused-css)
- [Opt-in typography](https://css-tricks.com/opt-in-typography/)
- [Chainable BEM modifiers](https://webuild.envato.com/blog/chainable-bem-modifiers/)
- [BEM modifiers: multiple classes vs @extend](https://www.bensmithett.com/bem-modifiers-multiple-classes-vs-extend/)
- [BEM - Block Element Modifier (introduction)](http://getbem.com/introduction/)
- [BEM - Block Element Modifier (naming)](http://getbem.com/naming/)
- [How to Scale and Maintain Legacy CSS with Sass and SMACSS](https://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/)
- [Maintainable CSS with BEM](https://www.integralist.co.uk/posts/bem/#4)
- [‘Scope’ in CSS](https://csswizardry.com/2013/05/scope-in-css/)
- [‘Why BEM?’ in a nutshell](https://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/)
- [MindBEMding – getting your head ’round BEM syntax](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [Cómo renombrar archivos en Linux – Comando mv](https://www.hostinger.es/tutoriales/renombrar-archivos-linux)
 
## Reports

> **Note:** this is the first time I'm using another tool similar to lighthouse ([**GTmetrix**](https://gtmetrix.com/)) for analyzing different metrics in order to see how good is the page's performance. I had already tried to use it in the [last project](https://github.com/said-alrove/what-the-flexbox) but there were some problems with the page and the test failed on repeated occasions.

### Lighthouse
![](readme/lighthouse.png)

### GTmetrix
![](readme/gtmetrix.png)

## Open Graph

### Facebook
![](readme/facebook.png)

### Twitter
![](readme/twitter.png)
