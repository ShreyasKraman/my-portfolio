# Portfolio

A portfolio website template built in react.js. Can be useful for students to display their skills and accomplishments on the internet. Recruiters can get to know more about their applicants by glancing at this single page application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Code editing softwares necessary to edit the contents and images. The following softwares are just few of the examples, but one can use any software they are comfortable with
- Visual studio code
- Atom
- Eclipse
- Intellij 
- .... many more

### Installing

#### Step 1: Install the dependencies
```
npm install
```

#### Step 2: Start the application
```
npm start
```

Thats it! Simple and easy.

### To build the project for production use
```
npm run build
```

#### Whats inside?
A quick look at directories inside the project
```
.
|- build
|- config
|- node_modules
|- public
|- scripts
|- src
  |- assets
  |- components
  |- container
  |- hoc
  |- App.css
  |- App.js
  |- App.test.js
  |- index.css
  |- index.js
  |- serviceWorker.js
|- .gitignore
|- package-lock.json
|- package.json
|- Readme.md
```

1. build: The directory where all of the code optimized for production use.
2. config: The directory where all global configuration js files are stored
3. node_modules: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.
4. public: The main index.html file resides here
5. scripts: Set of scripts specified in package.json to perform specific task
6. src: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
7. assets: The directory contains all images and logos used in this single page application.
8. components: This directory contains different segments of components used for building this app
9. container: This directory contains the parent component used for building this app. In large applications usually, there might be more number of containers, but in this case, its only one.
10. hoc: Higher order component
11. App.js: Root component of the application.
12. App.css: Css component for entire application
13. index.js: This is where the application renders its elements into React DOM 
14. serviceWorker.js: This js file is where we can turn this app into progressive web app, that is make this app work in offline mode. Read comments in index.js.

Copyright &copy; Shreyas Kalyanaraman

