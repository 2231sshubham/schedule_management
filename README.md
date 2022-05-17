# Schedule Mangaement
### Set appointments for users



- Clean code
- Data validation
- Agile development

## Features

- Create appointment for user
- Collision/Clash detection
- Support for multiple users
- View appointments for specific user

## Installation

Schedule Management requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/2231sshubham/schedule_management.git
cd schedule_management
npm i
```
- Create a local Database named "schedule_management" in your psql connection.
- Run the following command after creating the DB successfully to create modes/tables.
```sh
sequelize db:migrate
node index.js
```

## Plugins

Api are defined as :-

| Plugin | README |
| ------ | ------ |
| main route | http://localhost:3000/api/ |
| set appointment | /api/appointment/add |
| fetch appointment | /api/user_appointment/appointments |

## Swagger

This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

Appointment:

```sh
appointment/add
```

User_appointments:

```sh
user_appointment/appointments
```
