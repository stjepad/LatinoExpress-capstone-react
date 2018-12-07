# Maíz

----
Maíz brings light to the 15 mile stretch of Nolensville Road in South Nashville. It highlights all 41 Latino food establishments to the greater population and encourages user feedback to get consumers excited and more comfortable with the variety of restaurants available.

[Maíz Github](https://github.com/stjepad/LatinoExpress-capstone-react)

## Tech
Maíz is a single page application built in React.js.

* NavBar used is from Reactstrap.
* Logo was build using Canva.
*  Database was hardcoded in JSON.

All other components, functionality, and styling were written in JSX, Javascript, and css. Map functions were frequently used to package intended information and display them according to the most friendly user view.

Each establishment has a unique messaging system, with crud functionality to only the active user. Therefore the active user cannot edit or delete other users messages.

Currently there are six food categories unique to each establishment that the user can upvote or downvote according to their preference. On the home page, the top five establishments in each category, according to highest rank are visually represented descending.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

NPM is a major for this project. It was created with npx create-react-app and makes use of react-router-dom as well as the various plugins for the style base.

Here's a preview of the package-json:
```
"dependencies": {
    "chart.js": "^2.1.1",
    "react": "^16.5.2",
    "react-chartjs": "^1.2.0",
    "react-chartjs-2": "^2.7.4",
    "react-dom": "^16.5.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.5",
    "react-tilt": "^0.1.4",
    "semantic-ui-css": "^2.4.0",
    "semantic-ui-react": "^0.82.5"
  },
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
```

In order to get the project running, make sure to install npm if you haven't already.
If you need it, [Install npm here](https://www.npmjs.com/get-npm).


To check if you have it:

```
node -v
npm -v
```

This will tell you if you have node, and what version (which you need for npm)
and the latter will tell you about npm.

You can also run this in your terminal of choice to install globally:
```
npm install npm@latest -g
```

### Downloading

First, fork the repo and clone it down.

Once it finished downloading, open **Visual Studio Code**.
From the root directory of the project, run:

```
npm install
```

In order for the NavBar to show you also need to run:

```
npm install bootstrap --save
```

and

```
npm install --save reactstrap react react-dom
```

Once the packages are done installing, from the root level run:

```
npm start
```

This will host the application in your browser.

In a separate terminal cd into the api directory and run:

```
json-server database.json database.json -p 5002
```

Check out the App!

## ERD

![Maíz ERD](https://github.com/stjepad/LatinoExpress-capstone-react/blob/master/Ma%C3%ADz%20ERD.png)

##

## Author

* **Dejan Stjepanovic**  - [Github](https://github.com/stjepad)

## Acknowledgments
* The most sincere gratitude for Nashville Software School Instructors and peers included.

* My wonderful fiancée that always believes in me.

* Coffee. I love you!

* Thank you for going through my ReadMe!
