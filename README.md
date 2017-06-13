# Kellys-Closet
Pick out your outfit before you go to the closet

## DIRECTIONS
THere are currently 3 server files in this repo.  They need to be combined.

### USER Authentication
In the myOauth folder:
 There is a server for user authentification running on port 3003.
 Prior to your first run of this server go to the myOath folder and run npm install,
 then open a new terminal and run mongod so the MongoDB is running.
 To see it in action use
 
    node server
   
 to start the server.
 
 If you open a browser window and go to localhost:3003 you will see a login screen and may login with:
  
    email - password
    facebook
    twitter
    google +
    
 once logged in you may connect the accounts.  All password data is hashed with bcrypt for security and all accounts are saved to MongoDB.
 
 ### REACT-Backend
 
 In the react-backend folder I created a server for a REST API.  it currently just runs a user route and is not hooked up to ay database.
 Prior to your first run of this server, please run
 
    npm install
  
 This server must be started before the react-app.  To start theis server enter the following:
 
    PORT=3001 node bin/www
 
 This server will then start on port 3001.
 
 ### Kellys CLoset React App
 
 I used create-react-app to set this up.  Prior to your first run go to react-backend/kellys-closet and run
 
    npm install.
 
 Before you start this app, ensure the react backend server is running in a seperate window.
 To start this app, from the react-backend/kellys-closet folder run
  
    npm start
  
if it asks for a new port say Y.
 
