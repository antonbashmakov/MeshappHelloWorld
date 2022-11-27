exports.componentsList = {
  name: 'components',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      text: 'List of supported components',
    },    
    {
      type: 'ListItem',
      action: 'goto:headers',
      item: {
        name: 'Headers',
        description: 'Example of headers',
        icon: 'heading'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:texts',
      item: {
        name: 'Texts',
        description: 'Text components',
        icon: 'font'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:socials',
      item: {
        name: 'Social mechanics',
        description: 'Social mechanics',
        icon: 'heart'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:buttons',
      item: {
        name: 'Buttons',
        description: 'Supported buttons',
        icon: 'key'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:forms',
      item: {
        name: 'Forms and Fields',
        description: 'Forms examples',
        icon: 'file'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:images',
      item: {
        name: 'Images',
        description: 'Images examples',
        icon: 'images'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:cards',
      item: {
        name: 'Cards',
        description: 'Cards examples',
        icon: 'image'
      }
    },
    {
      type: 'ListItem',
      action: 'goto:grids',
      item: {
        name: 'Grids',
        description: 'Grids examples',
        icon: 'table'
      }
    },
  ]
}; 