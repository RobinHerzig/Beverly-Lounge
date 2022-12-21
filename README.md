# Beverly Lounge

<p align="center">
    <img src="https://img.shields.io/static/v1?label=|&message=HTML5&color=a33550&style=plastic&logo=html5"/>
    <img src="https://img.shields.io/static/v1?label=|&message=CSS3&color=a33550&style=plastic&logo=css3"/>
<!--     <img src="https://img.shields.io/static/v1?label=|&message=SASS&color=2b625f&style=plastic&logo=sass"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=BOOTSTRAP&color=316c5e&style=plastic&logo=bootstrap"/> -->
    <img src="https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=a33550d&style=plastic&logo=javascript"/>
    <img src="https://img.shields.io/static/v1?label=|&message=NODE.JS&color=35a34d&style=plastic&logo=node.js"/>
    <img src="https://img.shields.io/static/v1?label=|&message=EXPRESS&color=35a34d&style=plastic&logo=express"/>
    <img src="https://img.shields.io/static/v1?label=|&message=EJS&color=35a34d&style=plastic&logo=ejs"/>
    <!-- <img src="https://img.shields.io/static/v1?label=|&message=REACT.JS&color=35a34d&style=plastic&logo=react"/> -->
    <!-- <img src="https://img.shields.io/static/v1?label=|&message=REACT.NATIVE&color=35a34d&style=plastic&logo=react"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=TYPESCRIPT&color=4a935c&style=plastic&logo=typescript"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=PYTHON&color=52985b&style=plastic&logo=python"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=JAVA&color=cdf998&style=plastic&logo=java"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=SOLIDITY&color=8fbc56&style=plastic&logo=solidity"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=SELENIUM&color=cdf998&style=plastic&logo=selenium"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=AWS&color=98bf53&style=plastic&logo=amazon"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=WORDPRESS&color=cdd148&style=plastic&logo=wordpress"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=ADOBE&color=98bf53&style=plastic&logo=adobe"/> -->
    <!-- <img src="https://img.shields.io/static/v1?label=|&message=MONGO-DB&color=359ba3&style=plastic&logo=mongodb"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=WEBPACK&color=bbb111&style=plastic&logo=webpack"/> -->
<!--     <img src="https://img.shields.io/static/v1?label=|&message=LINUX&color=bbb111&style=plastic&logo=linux"/> -->
    <img src="https://img.shields.io/static/v1?label=|&message=GIT&color=359ba3&style=plastic&logo=git"/>
<!--     <img src="https://img.shields.io/static/v1?label=|&message=FIREBASE&color=cbb148&style=plastic&logo=firebase"/> -->
</p>

<p align="center">
    <a target="_blank" href="https://beverlylounge.onrender.com/"><img width="50%" src="https://github.com/RobinHerzig/RobinHerzig/blob/main/images/goldengobletlounge.jpg"></a>
    <br>
    <a align="center" target="_blank" href="https://beverlylounge.onrender.com/">Beverly Lounge</a>
</p>

Find your next favorite cocktail using my latest search engine! Beverly Lounge is a straightforward full-stack platform to search for recipes and track your favorites.

## How It's Made:

Drink information is provided by: https://www.thecocktaildb.com/api.php

When the server receives the client's search request, it fetches the drink information from the source above. Using EJS, that data is parsed and rendered to the page server-side.

The layout of each card was built using flexbox, and media queries were used to change the design at different device widths.

The bookmark icons save drink ID to localStorage. Cards that are bookmarked will appear brighter than the others, even after the user reloads the page.

## Optimizations:

Several errors were discovered in the cocktail database. Since I'm unable to fix these at the source, fixed them within EJS. The typical workflow for this involved splitting the strings into an array and correcting spacing or adding missing punctuation. While this fixed the majority of the issues, edge cases may still exist.

Future iterations will include membership signups and connection to a MongoDB database. This will allow for two new features:
1. User's can add new drinks.
2. User's can save drinks and access them later.

## Installation:

1. Download or clone the repo onto your local machine.
2. In your terminal, enter `npm install` to download and install the dependencies.
3. In the terminal, enter `npm start` to run the local server. Access it via `http://localhost:8000/`.

## Feedback:

Feedback is always welcome! I invite you to message me your comments and ideas using any of the social media listed within my profile.