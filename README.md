# Golden Goblet Lounge

**HTML5**, **CSS3**, **JavaScript**, **Node.js**, **Express**, **EJS** - Find your next favorite cocktail using our latest search engine! Golden Goblet Lounge is a straightforward full-stack platform to search for recipes and track your favorites.

## How It's Made:

When the user enters in the name or ingredient of a cocktail, our website sends a POST request to our sever containing the name of their drink. Our server then parses the query parameter and uses the fetch method to send that information to a professional cocktail database. This database returns any matches, which are then converted to JSON and embedded in our EJS template.

https://www.thecocktaildb.com/api.php

Every recipe "card" contains a bookmark icon, which saves the ID of the drink in the browser's localStorage. Cards that are bookmarked will appear brighter than the others, even after the user reloads the page.

Our site also features a "random" button, allowing the user to retrieve a random cocktail recipe from the database.

## Optimizations:

Golden Goblet Lounge has been tested for edge-cases and refined. Several errors were discovered in the cocktail database, which impacted certain results negatively. We are unable to fix these at the source, so ,where possible, we fixed them using EJS. The typical workflow for that involved splitting the strings into an array and correcting spacing or adding missing punctuation. As a result of our hard work, Golden Goblet Lounge is currently a fully functional search engine.

Future iterations will see the bookmark feature expanded. For example, the user will be able to click a "favorites" button to show a complete list of all their bookmarks. Keeping all their favorites in an easy to access location will improve the functionality of our website.

## Lessons Learned:

We learned a lot completing this website, which included both front-end and backend programming. It was extremely beneficial to write the code for both sides, as it helped us understand the client/server connection so much better.

In addition, EJS was a joy to work with, and we'll definitely be using it again in the near future. It saved us so much time by allowing us to create a template for each drink object without resorting to JavaScript for creating elements or duplicating nodes.

CSS in particular also required much attention, given the importance of the layout of each cocktail card. Careful consideration was given for each font, font size, padding, margin, etc. Flexbox was especially helpful as we worked to fit as much information in the compact space as possible, without hurting readability.

If you have any questions or comments, feel free to send me a message from my website. The link is on my Github homepage.