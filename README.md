# Recipe Finder

Tired of cooking the same stuff all time? Have a ton of random vegetable cans and no idea what to make with them? On a budget and trying to use the whole pantry for dinner instead of picking up something? Recipe Finder is made with you in mind!

Recipe Finder allows you to use the ingredients you have on hand to search for recipes that use those ingredients. It's a great way to save money, learn some new recipes, and expand your cooking repertoire. 

Recipe Finder is a single page web application built with React, Redux, and Javascript on the frontend and Ruby on Rails on the backend. Utilizing the Spoonacular API, it makes fetch calls for recipes which include the ingredients, and then renders selected recipes for the user to favorite and come back to time and again.


Available features:

- **Users can sign up to create a new account, or login to an existing account.**
- **Users can view their favorited recipes on their profile page once logged in.**
- **Users can select from 1000 common ingredients to find recipes that use all or some of the selected ingredients.**
    - **Once an ingredient is selected, the button for that ingredient becomes disabled to prevent users from accidentally double clicking the same ingredient. The ingredient is then listed inside the "Current Selection" box.**
    - **Should a user not want to search for an ingredient in their "Current Selection" box, they can click on the ingredient in the box which removes it from the box and makes the ingredient button not disabled anymore.**
- **Recipes fetched from the API are displayed after a user selects to search; users can quickly see which ingredients the recipe uses, and which ingredients are needed for each recipe rendered from the API.**
- **Users can click on the recipe to view a more detail recipe card, which includes:**
   - **picture of the recipe**
   - **button to favorite the recipe and see on user profile**
   - **dietary information (vegan, vegetarian, gluten free, dairy free)**
   - **instructions**
   - **summary provided from API**
   - **link to original recipe**
   - **link to recipe on API**

## Installation

- Fork and clone this repo and [the backend repo](https://github.com/adybas/capstone-backend)

- First, make sure that Postgres is running on your computer. Then cd into the capstone-backend directory and run these commands:
  - Run `$ rails db:create`
  - Run `$ rails db:migrate`
  - Run `$ rails db:seed`
  - Run `$ rails s`
  
- After the backend is up, open the capstone-frontend directory and run these commands:
  - Run `$ npm install`
  - Run `$ npm start`
  
#### API Key
To be able to utlize this SPA, you will need to sign up for an account on [Spoonacular API](https://spoonacular.com/food-api). The API has a free tier, along with paid subscriptions. As long as you use less than 150 points/per day, you will be able to fetch and view recipes based on the ingredients selected. If you go over that limit, the API will not allow any more fetch calls for that day (unless you upgrade to a paid package). Once you have your API key, follow along this [stackoverflow](https://stackoverflow.com/questions/48699820/how-do-i-hide-api-key-in-create-react-app) question to add the API key to a .env file (as this constant `REACT_APP_APIKEY = spoonacular key`) and .gitnore file.


## Screenshots of Website

#### Home
![Home Screen](./src/assets/screenshots/home.png) 

#### Sign In
![Sign In](./src/assets/screenshots/signin.png)

#### Sign Up
![Sign Up](./src/assets/screenshots/signup.png) 

#### User Profile with Favorited Recipes
![User Profile](./src/assets/screenshots/profile.png) 

#### Ingredient Selection
![Ingredient Selection](./src/assets/screenshots/search1.png) 

#### Using Ingredient Searchbar
![Ingredient Search](./src/assets/screenshots/search2.png) 

#### Ingredient Button Disabled after Selection
![Ingredient Button Disabled after Selection](./src/assets/screenshots/search3.png) 

#### Recipes from Selected Ingredients
![Ingredient Recipes](./src/assets/screenshots/recipes.png) 

#### Recipe Detail Page - Picture and Favorite Button
![Recipe Detail Page - Picture and Favorite Button](./src/assets/screenshots/recipe1.png) 

#### Recipe Detail Page - Dietary Info, Instructions and More Info
![Recipe Detail Page - Dietary Info, Instructions and More Info](./src/assets/screenshots/recipe2.png) 

#### Favorite Recipe Button Change
![Favorite Recipe Button Change](./src/assets/screenshots/recipe3.png) 

## Frameworks and Libraries Used

- Front-end: JavaScript, [React](https://reactjs.org/), and [Redux](https://redux.js.org/)
- Back-end: [Ruby on Rails](https://github.com/rails/rails)
- UI: [Bootstrap](https://getbootstrap.com/), [React Bootstrap](https://react-bootstrap.github.io/), and custom CSS
    - Dietary Icons on Recipe Detail Page are custom made from [freelogodesign.org](https://www.freelogodesign.org)

## Author

- Anna Dybas (https://github.com/adybas)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/adybas/capstone-frontend/issues. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

This project is licensed under the terms of the [MIT](https://github.com/angular/angular.js/blob/master/LICENSE) license.
