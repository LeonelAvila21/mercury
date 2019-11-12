CREATE DATABASE mercury_db;
USE mercury_db;

CREATE TABLE user_table (
    u_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    u_firstname VARCHAR(75) NOT NULL,
    u_lastname VARCHAR(75) NOT NULL,
    u_email VARCHAR(75) NOT NULL,
    u_username VARCHAR(25) NOT NULL,
    u_password VARCHAR(50) NOT NULL
);

CREATE TABLE chat_table (
    c_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    c_transmitter INTEGER NOT NULL,
    c_receiver INTEGER NOT NULL,
    c_message VARCHAR(250) NOT NULL, 
    c_datetime DATETIME NOT NULL,
    c_received INTEGER NOT NULL
);

ALTER TABLE chat_table
    ADD CONSTRAINT chat_user_fkt FOREIGN KEY ( c_transmitter )
        REFERENCES user_table ( u_id );

ALTER TABLE chat_table
    ADD CONSTRAINT chat_user_fkr FOREIGN KEY ( c_receiver )
        REFERENCES user_table ( u_id );
