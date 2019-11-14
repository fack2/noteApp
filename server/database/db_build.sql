BEGIN;

DROP TABLE IF EXISTS users_accounts, note, category
 CASCADE;

CREATE TABLE users_accounts
(
    user_id serial primary key,
    name VARCHAR(100),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(100) NOT NULL

);

CREATE TABLE category
(
    category_id serial primary key,
    name TEXT NOT NULL,
    image TEXT
);

CREATE TABLE note
(
    note_id serial primary key,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (category_id),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users_accounts (user_id),
    post_date DATE,
    pin BOOLEAN,
    note_text TEXT NOT NULL
);


COMMIT;