const express = require('express');
const app = express();
const port = 3000;
const dbMethods = require('./db/pgconfig');
const body = require('body-parser');

// if you are using mongo/mongoose uncomment this line
// const Message = require('./db/Message');

// if you are using postgres, uncomment this line
app.use(body.json());

// get all messages
app.get('/api/messages', (req, res) => {
  dbMethods.allMessages()
  .then(result => res.send(result));
})

// add message
app.post('/api/messages', (req, res) => {
  let arr = [req.body.name, req.body.message];
  dbMethods.writeMessage(arr)
  .then(data => res.sendStatus(201));
})

// update message
app.put('/api/messages/:id', (req, res) => {
  let arr = [req.params.id, req.body.name, req.body.message]
  dbMethods.updateMessage(arr)
  .then(result => res.send(result))
})

//delete message
app.delete('/api/messages/:id', (req, res) => {
  let arr = [req.params.id];
  dbMethods.deleteMessage(arr)
  .then(result => res.send(result))
})

// get one specific message
app.get('/api/messages/:id', (req, res) => {
  let arr = [req.params.id];
  dbMethods.oneMessage(arr)
  .then(result => res.send(result))
})


app.use((req,res,next) => {
  res.status(404).send('That route does not exist Bailey!');
});

app.listen(port, () => {
  console.log('Listening on port, 123', port);
});

module.exports = app;
