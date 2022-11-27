exports.grids = {
  name: 'grids',
  components: [
    {
      type: 'Typography',
      as: 'h1',
      text: 'Grids',
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
    },
 
  ]
}; 