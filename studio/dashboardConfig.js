export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fdce97beabd8200f58895e1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xarpwxqw',
                  apiId: '15866bf4-84c7-4bde-a998-671541cbc59d'
                },
                {
                  buildHookId: '5fdce97beabd82008f8895f3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6jtn1gqs',
                  apiId: '14979f3f-43f8-4b21-bce4-13213ce99a60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankhock/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6jtn1gqs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
