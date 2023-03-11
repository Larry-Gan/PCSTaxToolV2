# PCS Tax Tool V2

This tool is designed to calculate the expected tax liability for individuals/households hosted at https://larry-gan.github.io/PCSTaxToolV2/. It's made as part of a project for Political Computer Science @ Berkeley and is built using [svelte](https://svelte.dev/tutorial/basics). The previous version was built using React, and can be found [here](https://github.com/Larry-Gan/PCSTaxTool).

## Recommended Setup:

I recommend downloading [VS Code](https://code.visualstudio.com/) an installing the [Svelte Plugin](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). You need to also download [Node.js](https://nodejs.dev/en/download/).

After cloning the repo and downloading node.js, enter the /PCSTaxToolV2 folder and run `npm install`, `npm run build`, and `npm run dev`. Those commands will set up the project and run it locally. You should be able to go to http://localhost:5173/PCSTaxToolV2/ to see the project.

## How to make changes:

1. Assign a ticket to yourself.

2. Create a new branch using `git checkout -b {your branch name here}`. Try to name the branch according to what what you're actually doing. For example, if you want to add support for the standard deduction, you should name the branch something along the line of "add-standard-deduction".

3. Make the necessary changes and test that they work locally.

4. One you've implemented the changes push you changes remotely and create a pull request.
   Pull requests should discuss the background of why it was necessary, the changes you made to the files and generally how they work, and how you tested the changes as well as pictures of the final result.

5. This repo is set so that other contributors have to comment on your pull requests in order for them to be able to be merged. Take their opinions into account and update your code accoringly!

6. Once the pull request has enough approvals, you can merge the pull request using Squash and Merge.

7. Automatic website updating upon merge isn't enabled yet, so right now you need to run `npm run build` followed by `npm run deploy` locally on the main branch after merge in order to have the website update.
