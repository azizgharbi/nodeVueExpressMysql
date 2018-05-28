### URL ###

* express : [www.expressjs.com](https://expressjs.com/)
* sequelizejs : [www.sequelizejs.com](http://docs.sequelizejs.com/)
* Vuejs : [www.vuejs.org](https://vuejs.org/)

##### Credentials for .env

* DB_HOST=localhost
* DB_NAME= database name
* DB_USER= user name
* DB_PASS= user password
* DB_CONNECTION=mysql

### Migrations cmd

* node_modules/.bin/sequelize model:generate --name User --attributes name:string,email:string,password:string
* node_modules/.bin/sequelize db:migrate
* node_modules/.bin/sequelize db:migrate:undo
* node_modules/.bin/sequelize seed:generate --name demo-user
* migrations doc for more details : [Migrations doc](http://docs.sequelizejs.com/manual/tutorial/migrations.html)

 
### What is this repository for? ###

* Quick starter kit to start a vue node express project + basic auth
* Version 0.3

## dev tricks

* install nodemon in global

```
By default, nodemon looks for files with the .js, .coffee, .litcoffee, and .json extensions. If you use the --exec option and monitor  app.py nodemon will monitor files with the extension of .py. However, you can specify your own list with the -e (or --ext) switch like so:  

nodemon -e js,jade Now nodemon will restart on any changes to files in the directory (or subdirectories) with the extensions .js, .jade. 
```