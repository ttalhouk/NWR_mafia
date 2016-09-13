# NWR_mafia

### App Description

App for viewing details of past games of mafia that were hosted on the Nintendo World Report forum.  This is a app created with React that calls from the rails API backend.

From the main landing page users can enter a search term to look bring up games that match the title or description.  Otherwise they can select the browse all which will pull up the complete list of games.  A search bar can be used to dynamically filter down the choices.  Once the user finds the game they want to see details about they can select the game to go to the details page.  

On the details page information about the game is loaded which includes title, description, image, and the players that were involved in the game.

### Deployed Link

[NWR Mafia Database](http://nwr-mafia.herokuapp.com/)

### Running Locally

**Clone Repos**

fork & clone the API repos located here.

[NWR-RAILS-API](https://github.com/ttalhouk/nwr_mafia_api)

[NWR-APP](https://github.com/ttalhouk/NWR_mafia)

*Rails API*

Once you have cloned the repo, bundle the required gems, create your database migrate the schema, and seed the data base (may need to uncomment out the section player and game data section in the seed.rb file).  You can then run the server to serve the data on `localhost:3000`

```
> bundle install
> rake db:create
> rake db:schema:load
> rake db:seed
```

*React App*

Install the dependencies from the package.json file.

```
> npm install
```

Inside the package.json file are some scripts for linting and packaging or running the server as needed.

* `> npm run watch` runs webpack --watch and runs all precompilers for bundling the JS and JSX files
* `> npm run prod` stars the app on a `localhost:8080` server

### Contributers

Thanks to Khushrenada (user on the NWR Mafia Chat Forum) for the information and [Nintendo World Report Forums](http://www.nintendoworldreport.com/forums/index.php?board=47.0)

**To Contribute**

If you are interested in working on the project send me a message and I can set you up as a contributor on the project.

***Other Potential Features to Add***

* Add admin editing of information through the app
* Add game creation/addition through the app
* Add more details to the games such as
  * Winning Team
  * Winning players
  * Highlighting for Mafia players
* Add Player details such as
  * Games played
  * Times Mafia
  * Wins
* Suggest Features ...
