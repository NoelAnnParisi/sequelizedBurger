CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(500) not null,
  eaten boolean,
  time_created TIMESTAMP,
  PRIMARY KEY (id)
);
