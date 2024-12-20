# project description

This project is an event booking platform built with Node.js for the backend,
uses MySQL for managing user data and event details,
while Redis is utilized for real-time storage of event booking counts to ensure high-speed performance and scalability.
To enhance user experience, the system integrates RabbitMQ for queuing tasks,
such as sending confirmation emails upon successful bookings.

# pre requisites || set up the environment

1. install nodejs into system. version => 18
2. intall MySQL into system. and create user, databasse to grand all permission user to database
3. run scripts for create tables and seeder admin. run command to terminal> "yarn install && yarn run:scripts"
4. install Redis into the system.
5. install RabbitMQ into the system.
6. create a .env file and add app config using keys "PORT, ACCESS_TOKEN_EXP, ACCESS_TOKEN_KEY"
7. Add MySQL config to .env file and use keys "DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASE"
8. Add Redis config to the .env file and use keys "REDIS_HOST, REDIS_PORT"
9. Add RabbitMQ config to the .env file and use keys "RABIT_MQ_HOST, RABIT_MQ_PORT"
10. run command to terminal> "yarn dev"

# test the application

click bellow link to download the postman collection. import to postman
https://drive.google.com/file/d/1Rv0UK_EfZb4ebn27_IaXL9DT0jnnlaqt/view?usp=sharing
