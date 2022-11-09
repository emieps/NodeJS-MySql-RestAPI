CREATE DATABASE IF NOT EXISTS companydb;

USE companydb; 

CREATE TABLE IF NOT EXISTS employee (
    id INT(11) NOT NULL AUTO_INCREMENT, 
    name VARCHAR(45) DEFAULT NULL, 
    salary INT(5) DEFAULT NULL, 
    PRIMARY KEY (id)
);

DESCRIBE employee 

INSERT INTO employee VALUES 
(1, 'Joe', 1000),
(2, 'Andreas', 1000),
(3, 'Lucas', 1000),
(4, 'Simon', 1000),
(5, 'Emily', 1000);