# Example of creating a bot in Meshapp.cc

You can find detailed explanation in russian [here](https://project6351618.tilda.ws/).

- you need to create a webserver which listens on two types of web calls. In the example above [replit](https://replit.com/) was used for this purpose. Let's assume your bot is reachable at *https://mycoolbot.com*. The bot must reply on two types of calls:
  - a *GET* request to your bot URL when it is being started on the client. *https://mycoolbot.com* in our example
  - a *POST* request */action* path to react on the interaction with bot's components. *https://mycoolbot.com/action* in our example

- Go to [BotMother](https://meshapp.cc/application/1cfb4c3d516049_dashboard_generated_id)  , enter all the fields of the form and click the **Register Bot** button. Fields you need to fill in:
  - Icon URL. The url to the icon will be shown to user in the search result menu.
  - Bot endpoint URL. This is the URL your can be reached on. *https://mycoolbot.com*
  - Name of the bot. This field will be used in the search.
  - Short description of the bot. This field will be used in the search.
- You can go to [meshapp.cc](https://meshapp.cc/) and search your bot after your it has been registered. It should be searchable by name or description;
- Go to your bot's code and make it return following JSON formated response:
  ```
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
        text: 'The List of components',
      },
    ]
  };
  res.send(response);
  });
  ```
  This will render the landing page of your bot on the start. This is your landing page.

That is it. You have just created your first bot on [meshapp.cc](https://meshapp.cc/)

## How to handle actions performed by the user

All the interaction components (like buttons, cards etc) will fire up a POST reuest to your bot when interacted.

The call will be made to *{your-bot-url}/action*. Take a look at the example with our button from the snippet above. Our button component holds to following: 
```
  ...
  action: 'goto:components',
  ...
```

The *goto:components* string will be sent along with the rquest when button clicked. Lets write the code which will handle it:

```
app.post('/action', async (req, res) => {
  const { command } = req.body;

  console.log(command);

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
```

As you can see the *goto:components* string is stored as *command* field in the body of the request. By the design it says to us that we want user to navigate to *components* view after button click.  NOTE that the *goto* notion is not predefined by the system. You are free to choose what ever convention you like, just keep track of what you agreed on.

This being said we want to return the *components* view to the client as a response. Find the view in the *views.js* file to see what it consists of. 

### `views.js`

This file contains examples of the components system supports. It shows how to compile the view to be rendered by the client.

 

## Demo

You can see how does the bot from this tutorial work [here](https://meshapp.cc/application/7684233000).