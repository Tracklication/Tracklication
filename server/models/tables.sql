 CREATE TABLE IF NOT EXISTS users (
   user_id INT GENERATED ALWAYS AS IDENTITY,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
 );

 -- Location Options Main Table
 CREATE TABLE IF NOT EXISTS location_options (
     id SERIAL PRIMARY KEY,
     option_name VARCHAR(50) NOT NULL
 );

 -- Inserting into location options table
 INSERT INTO location_options (option_name) VALUES
     ('Onsite'),
     ('Hybrid'),
     ('Remote');

 CREATE TABLE IF NOT EXISTS job_post (
   id SERIAL PRIMARY KEY,
   user_id INT NOT NULL,
   company_name VARCHAR(255) NOT NULL,
   salary DECIMAL(10, 2) NOT NULL,
   position VARCHAR(100) NOT NULL,
   contact VARCHAR(100) NOT NULL,
   location INT REFERENCES location_options(id) NOT NULL,
   address VARCHAR(100) NOT NULL,
   last_heard VARCHAR(100) NOT NULL
   notes VARCHAR(500), 
   status VARCHAR(100) NOT NULL,
 );