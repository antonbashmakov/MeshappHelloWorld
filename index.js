const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const views = require('./views');
const components = require('./components');

const app = express();

app.use(cors(
  { origin: true } // allows all cross origin xhr requests
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.send(views.componentsList);
});

app.post('/action', async (req, res) => {
  const { command } = req.body;
  const { user } = req;
  console.log(req.body);

  if (!command) {
    res.send('You clicked some thing');
    return;

  }

  if (command.startsWith('goto')) {
    const view = command.split(':')[1];
    console.log('Navigating to view:', components);
    const toShow = views[view] ? views[view] : components[view];
    
    res.send(toShow);
  }
});

app.listen(3000, () => {
  console.log('Starting!');
});