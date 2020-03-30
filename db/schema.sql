drop DATABASE if EXISTS burgers_db;
CREATE DATABASE burgers_db;
use burgers_db;
create table burgers(
    id int auto_increment not NULL,
    burger_name VARCHAR(20) not NULL,
    devoured boolean default false,
    PRIMARY KEY(id)
);