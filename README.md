# JOBMadrid-networking-grid

Panel with list of companies and filter by sector, with foundation data, type of industry, number of employees and link to the web.

## Usage

The project is based on an API with company data from which the necessary data for the realization of the panel have been filtered.
Due to a problem with API url cors, the fetch doesn't work correctly. As a solution:
Chrome: open the task runner, write this comand if you are on Windows

windows + R

and enter the following line of code:

chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

## Installation

What do you need to install the software?

```
You need to have installed Node JS

1. Download this repository in zip or clone the repository on your device (if you clone the repository, note that you will not be able to add your commits).
2. Open a terminal in the root folder of your repository.
3. Install the local dependencies by running the command in the terminal:

```
npm install

Once you have done the previous step, start the project. To do this, run the command:

```
npm start
```

Then you can see that:

- A window will open in your pre-finished browser, which will display your website.
- The files you will be working on are inside the `src/` folder.

### Publish the project

To publish the project in GitHub Pages, enter the command:


```
npm run guthubpages
```

And:

- Go to the settings tab of your repo
- In the GitHub Pages section activate the **master branch/docs folder** option.

## Built with

- HTML
- SASS
- React

## Code Quality

## License 

[MIT](https://opensource.org/licenses/MIT)
