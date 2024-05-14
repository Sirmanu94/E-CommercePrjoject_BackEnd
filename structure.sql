CREATE TABLE users (
id BIGINT AUTO_INCREMENT PRIMARY KEY ,
name VARCHAR(50),
surname VARCHAR (50),
mail VARCHAR(100) NOT NULL,
password VARCHAR(250) NOT NULL,
role_id BIGINT NOT NULL,
created_at timestamp default current_timestamp NOT NULL
);


CREATE TABLE roles (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL
);


ALTER TABLE users
ADD CONSTRAINT FK_userRole
FOREIGN KEY (role_id) REFERENCES roles(id);





