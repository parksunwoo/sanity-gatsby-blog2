export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e33e8071c77180b07d40fcf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-bcpwm2iv',
                  apiId: '9fa32937-625c-48e2-b559-9f1c9269b912'
                },
                {
                  buildHookId: '5e33e8071b94844d16aebbbd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-a4sf5528',
                  apiId: '089b1300-6f37-4b34-b7bf-2526cb9e8543'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/parksunwoo/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-a4sf5528.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
