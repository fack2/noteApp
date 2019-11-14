# Notes App

The app is an a simple small notepad allowing creating and editing text notes, which they categorized as a group of categories.

## user journey
- As a user i can write my notes, edit any notes and delete notes.
- As a user i can pinned notes which is important for me to be in top.

## [Figma Wireframe](https://www.figma.com/file/g7Y21w7pvWEINP9C7ETHkg/NOTES?node-id=0%3A1)

## Database schema

![NotsDB](https://user-images.githubusercontent.com/36266244/68834788-40913600-06bf-11ea-99f8-37f1aaeefc49.png)


## How to Use our website !!

### In terminal

- Clone these repo:

```
    git clone https://github.com/fack2/noteApp.git
    cd noteApp
```
- Install node modules:
  ```
     npm i
     cd client 
     npm i 
     cd ..
     
  ```
- Create database locally.
- Create config.env file in root and put these variables in it:
```
 DATABASE_URL = postgress://{username}:{password}@localhost:5432/{databasename}
   SECRET = {secret}
```
- build database table :
```
   node ./server/database/db_bulid.js

```
- if you want initial values for database:
```
  psql 
    \c {databasename} 
    \i ./server/database/init_values.sql
```
- Run this to start the website:
...
## Team member

- [Sara](https://github.com/sara219)
- [Yaqoot](https://github.com/yaqootturman)
- [Someya](https://github.com/someyaaltous)
- [Duaa](https://github.com/DuaaH)

