BEGIN;

Insert into users_accounts(name, email, password) values('yaqoot', 'yaqoot@gmail.com', 1511),
  ('duaa', 'duaa@gmail.com', '$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG'), ('someya', 'someya@gmail.com', 123456);

Insert into category(name, image) values('Work', 'https://i.pinimg.com/564x/b8/2d/77/b82d77b291c7dd35e8a9c7ca9b268070.jpg'),
  ('Home', 'https://i.pinimg.com/564x/18/37/7a/18377abb31b8fde5a15c709e0dc77047.jpg'), ('Exercise', 'https://i.pinimg.com/564x/ed/56/c3/ed56c3c9b5f0491e64559515fb8cd738.jpg'), ('Study', 'https://i.pinimg.com/564x/5d/23/f1/5d23f15fc4c4fe0d89f56bbf5d1fa1a2.jpg');


COMMIT;

