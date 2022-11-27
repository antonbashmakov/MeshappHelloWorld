exports.cards = {
  name: 'cards',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      text: 'Cards',
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Card with header',
    },
    {
      type: 'CardWithImageAndTitle',
      variant: 'full',
      backgroundImage: false,
      image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ip_scr_01_sc.png?alt=media&token=3f85652f-633d-4c25-9e66-0012ec7267eb',
      title: 'Be Happy',
      subTitle: 'The quick brown fox jumps over the lazy dog',
    },
    {
      type: 'Typography',
      as: 'small',
      children: 'The image is an img tag',
    }   
  ]
}; 