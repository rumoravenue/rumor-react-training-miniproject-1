
# React Bootstrap - Mini-project 1

## Overview
Hello! This is a quick mini-project to help you learn React-Bootstrap. Complete this after completing the "React-Bootstrap" section of Module 6. 

In this project, you will implement the UI of the TODO list you completed last week, using only React-Bootstrap components. 

##  Figma
Use [the figma](https://www.figma.com/file/jgwwR5Tdwd1JZOMKVPAGDN/React-Practicals?type=design&node-id=0%3A1&mode=dev&t=NF7A08PfE4qFjCcP-1) to see the details of the design. **Follow this design as closely as possible**. 

## Getting started

Clone this repository using 
```bash
git clone https://github.com/rumoravenue/rumor-react-training-miniproject-1.git
```

Make a branch for yourself using
```bash
git checkout -b <your-name>
```

Open the `rumor-react-training-miniproject-1` folder in VSCode.

To run React locally, you must have the following:
- Node.js, follow [instructions to install](https://nodejs.org/en/download).
- yarn, follow [instructions to install](https://classic.yarnpkg.com/lang/en/docs/install).

Run `yarn install` to install all dependencies. 

Run `yarn start` to start the React app.

## Submission
After you complete each part, submit your assignment by completing the following:
- Open a pull request on the Github repository from your branch to main: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request 
- Record a video demo using Loom: https://www.loom.com/community/how-to-record-your-first-video
- Submit a link to your video demo and a link to the pull request to the Google Form in Google Classroom for this module. 

## Your Task
Your task is to implement **only the UI** of the todo list from assignment 1 using React Bootstrap. **Do not use CSS or any other styling**, only what React Bootstrap provides you. 

**You are free to deviate from the colours/fonts** of the design above, be creative! We are looking to ensure that you can perform a simple layout in React Bootstrap.

The requirements are the same as part 1 of assignment 1, see below.

### Requirements

In this part, you will implement the basic elements of design of the todo list. Implement:
- Each todo list item, including:
  - The checkbox
  - The title (#1: Item #1)
  - The description
- The text input for adding items
- The "add to list" button

### The finer points
You may notice some small details in the Figma. Make sure to implement them. For example, some expected behaviour from the Figma:
- The items in the todo list have a minimum width.
- Some items in the todo list are formatted differently _based on their position in the list_. Pay attention to:
  - The background colour
  - The format of the text in the title
- Some items in the list may have a different format when they are completed. 