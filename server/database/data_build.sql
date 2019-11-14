BEGIN;

Insert into "user"(name, email, password) values('yaqoot', 'yaqoot@gmail.com', 1511),
  ('duaa', 'duaa@gmail.com', 147), ('someya', 'someya@gmail.com', 123456);

Insert into category(name, image) values('Work', 'https://i.ibb.co/VpfXnyR/92d3e1eb58556d90f51004bf7e226c75.jpg'),
  ('Home', 'https://i.ibb.co/DtWqxQ1/cb18c206e6e5b8f13a8eafe52c3b017a.jpg'), ('Exercise', 'https://i.ibb.co/QkJ3gdk/1f61416992f57dbc30898d23c111ac45.jpg'), ('Study', 'https://i.ibb.co/FHxppyP/f3845e55aa7ef31e136a303429e57a9e.jpg');


COMMIT;

