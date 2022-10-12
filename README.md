# 3analytics-task

## Application is using react v-18

To Run Application

- npm i
- npm start
  username: admin
  password: admin@123

Application is divided into many components and using JSON api,

Created a loader which will be displayed before application has fetched data

Implemented a Higher order component which will check if user is logged when navigated to any page and if not logged in it will redirect to login page

A cookie on login is set for 30 min which after expiring will redirect to login

Since I did not had the ux design I have taken liberty to design elements as I like

Added error message on wrong username and password combination

Search and filter features are implemented
Search will only search through headings

Logout will expire the cookie and redirect to login
