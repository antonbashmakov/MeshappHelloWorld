exports.components = {
  name: 'components',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      variant: 'centred',
      children: 'Доступные компоненты',
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Формы',
    },
    {
      type: 'Form',
      submitButton: {
        text: 'Отправить',
        variant: 'wide'
      },
      action: 'submit:someaction',
      fields: [
        {
          type: 'TextInput',
          name: 'nonobligatorytext',
          title: 'Необязательное текстовое поле',
        },
        {
          type: 'TextInput',
          name: 'nobligatorytext',
          required: true,
          pattern: '^coconut$',
          error: 'Надо написать coconut',
          title: 'Обязательное поле с Regex паттерном /^coconut$/',
        }
      ]
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Кнопки',
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
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Поисковая строка',
    },
    {
      type: 'SearchInput',
      action: 'search'
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Тексты и заголовки',
    },
    {
      type: 'Typography',
      as: 'h1',
      variant: 'centred',
      children: 'Заголовок H1',
    },
    {
      type: 'Typography',
      as: 'h2',
      variant: 'centred',
      children: 'Заголовок H2',
    },
    {
      type: 'Typography',
      as: 'h3',
      children: 'Заголовок H3',
    },
    {
      type: 'Typography',
      children: 'Обычный скучный текст без выделений и других элементов. В общем, съешь ещё этих мягких французских булок, да выпей чаю',
    },
    {
      type: 'Typography',
      as: 'html',
      children: 'Обычный скучный HTML. В общем, <b>съешь</b> ещё этих мягких французских булок, да выпей <a href="www.google.com">чаю</a>',
    },
    {
      type: 'Typography',
      as: 'small',
      children: 'Маленький текст. В общем, съешь ещё этих мягких французских булок, да выпей чаю',
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Хеадер с контактами',
    },
    {
      type: 'HeaderWithContactsAndLogo',
      image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/znaev-header.svg?alt=media&token=ce3bd45f-ff89-40e6-b952-3d7df9a87555',
      contacts: ['8-800-234-24-00', '8-800-234-24-00'],
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Картинки',
    },
    {
      type: 'Image',
      image: 'https://drznaev.ru/wp-content/uploads/2021/12/тревога-300x157.jpeg'
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Карточка с заголовком',
    },    
    {
      type: 'CardWithImageAndTitle',
      variant: 'full',
      backgroundImage: false,
      image: 'https://firebasestorage.googleapis.com/v0/b/meshapp-prod.appspot.com/o/ip_scr_01_sc.png?alt=media&token=3f85652f-633d-4c25-9e66-0012ec7267eb',
      title: 'Be Happy',
      subTitle: 'съешь ещё этих мягких французских булок, да выпей чаю',
      action: 'goto:behappy'
    },
    {
      type: 'Typography',
      as: 'h2',
      children: 'Грид компонент в 2 столбца',
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