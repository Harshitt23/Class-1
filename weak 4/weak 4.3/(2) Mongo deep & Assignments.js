/* we have done assignment which are both present in desktop : (course selling app) 
                                                              (course selling using JWT)

---------------ABOUT-----------------
we have done the assignment of course selling app and course selling using JWT with the help of mongoDB,
we created an organistation in { mongodb atlas } then created a cluster in it , 
then copied the connection string and connect it with using mongodb compass app.  

we used normal authorization using only username and psswrod in course selling app
but we used JWT in course selling using JWT

------------HOW TO OPEN--------------
just do { npm install } - to install the dependencies and packages for the app (we already did that so o need) ,
then node { index.js } to open/refresh the server.

once all good just connect it to mongodb compass app using the connection string.

also dont forget to paste the connection string in index.js of DB folder in both -
course selling app, course selling app using JWT

you can test all the routes(admin, user) in postman. 
we have created middleware(admin, user) to check the authentication of the user and admin.

*/