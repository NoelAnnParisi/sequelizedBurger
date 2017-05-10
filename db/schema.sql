CREATE DATABASE cqj5tbdwu6dmgiv2;
USE cqj5tbdwu6dmgiv2;
CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(500) not null,
  eaten boolean,
  time_created TIMESTAMP,
  PRIMARY KEY (id)
);
