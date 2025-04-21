import { themes } from 'prism-react-renderer'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').DocusaurusConfig} */
export default {
  title: 'Sage',
  tagline: 'AI at the Edge',
  url: 'https://waggle-sensor.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sage-favicon.png',
  organizationName: 'waggle-sensor',
  projectName: 'sage-website',
  trailingSlash: false,
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    navbar: {
      title: 'Sage',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.svg',
        className: 'custom-navbar-logo-class',
      },
      items: [
        {
          to: '/science/category/recent-projects',
          label: 'AI & Science'
        }, {
          to: '/news',
          label: 'News'
        }, {
          to: '/publications',
          label: 'Publications'
        }, /* {
          to: '/photos',
          label: 'Photos',
          position: 'left'
        },*/ {
          to: '/docs/about/overview',
          label: 'Docs'
        }, {
          type: 'dropdown',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          items: [
            {
              label: 'Sage GitHub',
              href: 'https://github.com/sagecontinuum'
            },
            {
              label: 'Waggle Sensor GitHub',
              href: 'https://github.com/waggle-sensor'
            }
          ],
        }, {
          // note: this is positioned right of search bar
          type: 'custom-signInBtn',
          position: 'right',
          itemProp: 44,
          anotherProp: 'xyz'
        },
      ],
    },
    footer: {
      // see custom (swizzled) footer component:
      // src/theme/Footer/index.js
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      prism: {
        additionalLanguages: ['bash', 'diff', 'json'],
      }
    },
    disableSwitch: true,
    algolia: {
      indexName: 'sage',
      contextualSearch: false, // mostly for versioned docs
      appId: 'XYV3A23P29',
      searchParameters: {},    // Optional: Algolia search parameters
      apiKey: '6e6879ba82bb9efece5580e945bd09ca',
    },
    colorMode: {
      disableSwitch: true
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    },
    blog: {
      sidebar: {
        groupByYear: false // Disable year grouping
      }
    },
    /*
    announcementBar: {
      content: '<b><a href="/fire">Call for Collaboration: Harnessing AI and Edge Computing for Fire Science</b>',
      isCloseable: true,
    }
    */
    /* uncomment the following to add a banner for outages/alerts or important news, see custom.css for more styling
    announcementBar: {
      content: '<b>ℹ️ Due to a planned data center migration, the Sage portal, web services, and nodes may be offline for extended periods. ℹ️</b>',
      isCloseable: false,
      textColor: 'rgb(102, 60, 0)',
      backgroundColor: 'rgb(255, 244, 229)',
    }
    */
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  scripts: [{
    src: 'https://apis.google.com/js/api.js'
  }],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/waggle-sensor/sage-website/edit/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          editUrl: 'https://github.com/waggle-sensor/sage-website/edit/main/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          onInlineAuthors: 'ignore', // ignore warnings about an author not being part of authors.yml, since not necessary
          onUntruncatedBlogPosts: 'ignore', // ignore warnings about no <!-- truncate --> marker, since some "blogs" are simply news snippets
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            frontMatter.hide_reading_time ?
              undefined :
              defaultReadingTime({content}),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ]
  ],
  plugins: [
    async function tailwindConfigPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },    [
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: require.resolve('./sidebars.js'),
        id: 'science',
        path: 'science',
        routeBasePath: 'science',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        // ... other options
      },
    ], [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/tutorials/accessing-data',
            from: ['/data', '/docs/data']  // obscure fix for /data/ vs /data redirect(?)
          },
          {
            to: '/science/category/recent-projects',
            from: ['/science']  // obscure fix for /data/ vs /data redirect(?)
          },
        ],
      },
    ], [
      '@docusaurus/plugin-content-blog',
      {
        id: 'partners',
        path: 'partners',
        routeBasePath: 'partners',
        editUrl: 'https://github.com/waggle-sensor/sage-website/edit/main/',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Partner User Stories',
        blogListComponent: '@theme/partners/PartnerListPage',
        blogPostComponent: '@theme/partners/PartnerPostPage',
        blogTagsListComponent: '@theme/partners/PartnerTagsListPage',
        blogTagsPostsComponent: '@theme/partners/PartnerTagsPostsPage',
      },
    ], [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-NMP80C7S04',
        anonymizeIP: true,
      }
    ],
    /* todo?: post science as blog entries for front matter and blog author meta?
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'sage-science',
        path: './science',
        routeBasePath: 'science',
        blogListComponent: '__todo__'
      },
    ],
    */
  ]
}
