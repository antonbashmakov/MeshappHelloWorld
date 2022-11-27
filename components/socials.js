exports.socials = {
  name: 'socials',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      text: 'Social mechanics example',
    },
    {
      type: 'Typography',
      as: 'small',
      text: 'The text underneath has a social mechanics attached to it. User can see number of likes and like it if logged in.',
    },
    /** Folowing text item has id 6Vgd3WeVgQaLaujOiDTc in your DB  **/
    {
      type: 'Typography',
      text: 'This is the text you want user to react on',
    },
    {
      type: 'SocialButtons',
      itemId: '6Vgd3WeVgQaLaujOiDTc' // id of the text piece above
    },
    {
      type: 'Typography',
      as: 'h1',
      text: 'Adding share buttons to an image',
    },
    {
      type: 'Image',
      image: 'https://drznaev.ru/wp-content/uploads/2021/12/тревога-300x157.jpeg'
    },
    {
      type: 'SocialButtons',
      facebook: 'http://meshapp.cc',
      twitter: 'http://meshapp.cc',
      vk: {
        url: 'http://meshapp.cc',
        title: 'For those who loves programming but not the frontend',
        image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ic_launcher-web.png?alt=media&token=1890e164-c7c5-448d-9a0a-f74fc7969ba0'
      },
      telegram: {
        url: 'http://meshapp.cc',
        text: 'For those who loves programming but not the frontend',
      }
    },
  ]
}; 