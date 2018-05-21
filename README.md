# Bug Friend Finder

Bug Friend Finder is a compatibility-based "Bug Friend Finder" application.
This full-stack site will take in results from your users' surveys, then compare 
their answers with those from other users. The app will then display the name 
and picture of the user with the best overall match.

## Getting Started

These instructions will get you a copy of the project up and running on your local 
machine for development and testing purposes. See deployment for notes on how to 
deploy the project on a live system.

### How The App Works

Bug Friend Finder is a full stack node app deployed on Heroku. 
Data is saved as an array of objects inside of the friends.js file 
following the path, "app/data/friends.js". The user will fill out a form,
entering a name and a link to an image. They will also answer 10 questions 
that are weighed from a value of 1(strongly disagree) to 5(strongly agree).
That data is compared to the other bug friends and a match is made based on 
the total difference.



## Modules Used

* [body-parser] (https://www.npmjs.com/package/body-parser) - Body-Parser
* [express] (https://www.npmjs.com/package/express) - Express
* [path] (https://www.npmjs.com/package/path) - Path