-- To add rows to a table, we use the 'INSERT INTO' command

INSERT INTO users ( id, name, email, password, profile_image, verified, age )
  VALUES (
    1,
    'Luke',
    'luke@ga.co',
    'chicken',
    'http://placekitten.com/200/200',
    1, -- this is still boolean, 1 means true
    100
  );

INSERT INTO users ( id, name, email, password, profile_image, verified, age )
  VALUES (
    2,
    'Ro',
    'roboat@ga.co',
    'chicken',
    'http://placekitten.com/400/400',
    0, -- this is still boolean, 1 means false
    20
  );

INSERT INTO users ( id, name, email, password, profile_image, verified, age )
  VALUES (
    3,
    'Lay',
    'lay@ga.co',
    'chicken',
    'http://placekitten.com/100/500',
    0, -- this is still boolean, 1 means false
    26
  );
