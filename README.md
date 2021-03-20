# Hello!
## It's a "JS Band Store".

### The final task at Ciklum University JS Band internship.

#### You can find a live version of the page [here](https://pechpavlo.github.io/js-band-store/)

### To start project locally you need:

1. Fork this repository
2. Checkout to develop branch
3. Navigate to the front folder
4. ```npm i```
5. ```npm start```
6. you are in business!


#### Description.
 It's  a online shop, Book online shop.;

  Application should includes next functionality:
* User can log in with username;
* Browse books catalog;
* Search book by title;
* Filter book by price (dropdown options: 0 < price < 25, 25 < price < 50, price > 50);
* Browse specific book details;
* Add a specific book to cart;
* Browse Cart with added books;
* Make a purchase of added books;

For task implementation I must use:
* React, Redux
* Functional React components;
* Create React App as a boilerplate;
* eslint-config-airbnb config for ESLint;
* Github pages;
* Github project.
I should cover my code with unit tests. For testing, I should use Jest;
For running eslint and test I should use pre-commit hooks;
My web-application fields validation should be based on Validation provided in the Arch notes section;
My web-application should be based on Wireframes provided in the Arch notes section;

#### Scenarios
1. User goes to the JS Band store website;
2. If User unauthorized System redirects the user to the Login page (That's the only page available for unauthorized user);
3. User login with username, System return user token (API provide token), redirects User to the Book catalog and store token in LocalStorage and Application State;
4. User see the list of books (provided by Api); Search by book name, filter list by the price;
5. User navigate to the specific Book details clicking on View button;
6. User choose the needed count of books, sees the total price, and adds the book to the cart. Then User can navigate back to the catalog or go forward to the Cart;
7. User goes to the Cart, see order list and press 'Purchase' button;
8. System place order, show a modal window with ordered items and successful message, and clear the cart;
9. Then User sign out, System redirects the User to the Login screen.

#### Arch notes
##### Validation
* username: required, minLength: 4, maxLength: 16;
* * errorMessage: 'Username is not valid'
* count: user can add only available count of books to the cart

#### Acceptance criteria
* All listed functionality should be provided and work;
* React should be used for task implementation;
* Redux should be used as a state management ;
* Only own created components should be used (you may use only styles from 3rd party libraries such as Bootstrap, etc...);
* Only functional react components should be used;
* Components should be placed in separated files (don't forget about modularity);
* Code should be linted with eslint-config-airbnb;
* Other routes should be unavailable and respond with not found UI;
* Only /login and /not-found routes should be available for the unauthorized user, another else should be restricted;
* Pull requests mechanism should be used for making changes into the repository;
* The project should be deployed to the GitHub pages;
* Tasks should be decomposed and defined in Github project board (at least 7 tasks);
* Usage documentation should be provided;
* Test coverage should be at least 50%;
* Use Husky for pre-commit hooks and add linting and testing on pre-commit;