let express = require('express'),
  router = express.Router();

let messages = [
  {title: 'First message', body: 'First message body'},
  {title: 'Second message', body: 'Second message body'},
  {title: 'Third message', body: 'Third message body'},
];

router.get('/', (req, res) => {
  res.json(messages);
});

router.put('/', (req, res) => {
  console.log(req);
  if (!req.body.title || !req.body.body) {
    res.status(400).send('Invalid parameters!');
  } else {
    messages.push({title: req.body.title, body: req.body.body});
    res.json(messages);
  }
});

module.exports = router;
