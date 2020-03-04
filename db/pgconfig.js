const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages',
  user: 'postgres',
  password: '1234'
});

function allMessages() {
  return pool.query('select * from messages')
    .then(data => {
      return data.rows;
    }) 
}

function writeMessage(arr) {
  return pool.query('insert into messages (name, message) values ($1, $2)', arr)
  .then(result => {
    return 'wrote message to database';
  })
}

function updateMessage(arr){
  return pool.query('update messages set name = $2 ,message = $3  where id = $1', arr)
  .then(result => {
    return 'successfully updated message';
  })
}

function deleteMessage(arr){
  return pool.query('delete from messages where id =$1', arr)
  .then(result => {
    return 'message has been lazered into space!'
  } )
}

function oneMessage(arr){
  return pool.query('select * from messages where id=$1', arr)
  .then(result => {
    return result.rows;
  })
}

module.exports = {
  allMessages, 
  writeMessage,
  updateMessage,
  deleteMessage,
  oneMessage
}
