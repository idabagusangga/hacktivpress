# hacktivpress
# Hacktivpres - A simple blogging app
simple loggin app made with express, mongoDB and vue

 # SERVER 
 ## How to install
 ``` sh
 $ npm install
 ```


## list User routes
| Route | HTTP | Description |
| ------| ----- | ---------- |
| /users| GET | get all user |
| /users/register | POST | sign up |
| /users/login | POST | sign in |


## list Blog
| Route | HTTP | Description |
| ------ | ----- | --------- |
| /blogs | GET | get all blogs |
| /blogs/:id | GET | get detail blogs |
| /blogs/:id | PUT | edit blog user authorization only |
| /blogs/delete | DELETE | delete blog user authorization only |
| /blogs/category | GET | get article by category |
| /blogs/author | GET | get article by author |

## usage 
``` sh
$ npm run dev
$ npm start
```
## ACCESS API VIA
`http://localhost:3000/` .