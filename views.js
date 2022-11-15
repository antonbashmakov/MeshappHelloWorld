exports.components = {
  name: 'components',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      variant: 'centred',
      children: 'List od components',
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
      children: 'Buttons',
    },
    {
      type: 'Button',
      text: 'Primary',
    },
    {
      type: 'Button',
      text: 'Secondary',
      variant: 'secondary',
    },
    {
      type: 'Button',
      text: 'Tertiary',
      variant: 'tertiary',
    },
    {
      type: 'Button',
      text: 'Alert',
      variant: 'alert',
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
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Texts and Headers',
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
    {
      type: 'Typography',
      as: 'h2',
      children: 'Header with contacts',
    },
    {
      type: 'HeaderWithContactsAndLogo',
      image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/znaev-header.svg?alt=media&token=ce3bd45f-ff89-40e6-b952-3d7df9a87555',
      contacts: ['8-800-234-24-00', '8-800-234-24-00'],
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Images',
    },
    {
      type: 'Image',
      image: 'https://drznaev.ru/wp-content/uploads/2021/12/тревога-300x157.jpeg'
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
      action: 'goto:behappy'
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Grid component',
    },
    {
      type: 'Container',
      variant: 'grid2',
      components: [
        {
          type: 'CardWithImageAndTitle',
          variant: 'full',
          backgroundImage: true,
          image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ip_scr_01_sc.png?alt=media&token=3f85652f-633d-4c25-9e66-0012ec7267eb',
          title: 'Be Happy',
          subTitle: 'subtitle',
          action: 'goto:behappy'
        },
        {
          type: 'CardWithImageAndTitle',
          variant: 'full',
          image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ip_scr_02_sc.png?alt=media&token=85188c78-b304-4826-92e4-c14790ed836b',
          title: 'Rose & Lily',
          subTitle: 'subtitle',

          backgroundImage: true,
          action: 'goto:roseandlily'
        },
        {
          type: 'CardWithImageAndTitle',
          variant: 'full',
          backgroundImage: true,
          image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ip_scr_03_sc.png?alt=media&token=3be8594a-593b-480b-af27-4a27cabdaea9',
          title: 'In My Heart',
          subTitle: 'subtitle',

          action: 'goto:inmyheart'
        },
        {
          type: 'CardWithImageAndTitle',
          variant: 'full',
          backgroundImage: true,
          image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ip_scr_04_sc.png?alt=media&token=6bb0a959-83cc-43e8-9607-cb954a8034f9',
          title: 'Rainbow Roses',
          subTitle: 'subtitle',

          action: 'goto:dozen'
        },
      ]
    }
  ]
}; 