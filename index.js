const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const views = require('./views');

const app = express();

app.use(cors(
  { origin: true } // allows all cross origin xhr requests
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  const response = {
    name: 'start',
    components: [
      {
        type: 'Typography',
        as: 'h1',
        variant: 'centred',
        children: 'Hello World!',
      },
      {
        type: 'Button',
        variant: 'primary',
        action: 'goto:components',
        text: `Список компонентов`,
      },
    ]
  };
  res.send(response);
});

app.post('/action', async (req, res) => {
  const { command } = req.body;
  const { user } = req;

  //console.log(user);
  console.log(req.body);

  if (!command) {
    res.send('You clicked some thing');
    return;

  }

  if (command.startsWith('goto')) {
    const view = command.split(':')[1];
    console.log('Navigating to view:', view);
    res.send(views[view]);
  }
});

app.listen(3000, () => {
  console.log('Starting!');
});