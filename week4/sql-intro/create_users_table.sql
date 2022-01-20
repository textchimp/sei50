
-- This file defines the structure for creating a new table called 'users'
-- It's also known as a "schema"

CREATE TABLE users (

  id INTEGER PRIMARY KEY, -- make sure the values in this column are unique
  name TEXT,
  email TEXT,
  password TEXT,
  profile_image TEXT,
  verified BOOLEAN,
  age INTEGER
  
); -- DON'T FORGET THE SEMICOLON
