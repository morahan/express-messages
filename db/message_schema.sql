-- If you are using postgres, add your schema to this file
-- From the command line run psql -U dbuser -d dbname -a -f filename.sql
--  to create your database/ columns/ and some seed data
-- alternatively, open psql and copy and paste the code below
-- once you've made your schema

DROP DATABASE IF EXISTS messages;

CREATE DATABASE messages;

\c messages;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(47),
  message VARCHAR(247)
);

Insert into messages (name, message) values ('mike', 'this is the first message in my database');
Insert into messages (name, message) values ('mo', 'second message');

-- Seed your data with a collection of insert statements
-- INSERT INTO messages () VALUES ();


-- psql -U dbuser -d dbname -a -f filename.sql --> 
-- psql -U postgres --> to login as default user
-- \i /Users/mmorahan/Desktop/Hack/realCourse/mini-apps/express-messages/db/message_schema.sql
-- \i <absolute file path> --> run file from this location
-- \c postgres --> connect out to postgress