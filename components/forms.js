exports.forms = {
  name: 'forms',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      text: 'Forms and fields',
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Forms',
    },
    {
      type: 'Form',
      submitButton: {
        text: 'Submit',
        variant: 'wide'
      },
      action: 'submit:someaction',
      fields: [
        {
          type: 'TextInput',
          name: 'nonobligatorytext',
          title: 'Nonobligatory text field',
        },
        {
          type: 'TextInput',
          name: 'nobligatorytext',
          required: true,
          pattern: '^coconut$',
          error: 'You shall write coconut',
          title: 'Obligatory text field with Regex pattern /^coconut$/',
        }
      ]
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Search field',
    },    
    {
      type: 'SearchInput',
      action: 'search'
    },    
  ]
}; 