import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'myenv',
    description: 'rhi ecosystem orchestrator',

    base: '/myenv/',

    srcExclude: ['**/CLAUDE.md'],

    themeConfig: {
      nav: [
        { text: 'Guide', link: '/introduction' },
        { text: 'Manifest', link: '/manifest' },
        { text: 'Seeds', link: '/seeds' },
        { text: 'rhi', link: 'https://docs.rhi.zone/' },
      ],

      sidebar: [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/introduction' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Design', link: '/design' },
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Manifest Format', link: '/manifest' },
            { text: 'Seeds', link: '/seeds' },
            { text: 'Tool Integration', link: '/tool-integration' },
          ]
        },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/rhi-zone/myenv' }
      ],

      search: {
        provider: 'local'
      },

      editLink: {
        pattern: 'https://github.com/rhi-zone/myenv/edit/master/docs/:path',
        text: 'Edit this page on GitHub'
      },
    },

    vite: {
      optimizeDeps: {
        include: ['mermaid'],
      },
    },
  }),
)
