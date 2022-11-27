exports.texts = {
  name: 'texts',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      text: 'Text elements',
    },
    {
      type: 'Typography',
      as: 'h1',
      variant: 'centred',
      children: 'Header H1',
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Header H2',
    },
    {
      type: 'Typography',
      as: 'h3',
      children: 'Header H3',
    },
    {
      type: 'Quote',
      text: 'Very famous quote here',
    },
    {
      type: 'Typography',
      children: 'Simple boring plane text. The quick brown fox jumps over the lazy dog',
    },
    {
      type: 'Typography',
      as: 'html',
      children: 'Simple boring html. The quick brown fox jumps over the <a href="www.google.com">lazy</a> dog',
    },
    {
      type: 'Typography',
      as: 'small',
      children: 'Text in small. The quick brown fox jumps over the lazy dog',
    },  
  ]
}; 