const {themes} = require('prism-react-renderer')
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
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
          to: '/about',
          position: 'left',
          label: 'About',
        }, {
          to: '/science',
          label: 'AI/Science',
          position: 'left'
        }, {
          to: '/news',
          label: 'News',
          position: 'left'
        }, {
          to: '/publications',
          label: 'Publications',
          position: 'left'
        }, {
          to: '/team',
          label: 'Team',
          position: 'left'
        }, /* {
          to: '/photos',
          label: 'Photos',
          position: 'left'
        },*/ {
          to: '/docs/about/overview',
          position: 'left',
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
    /* uncomment the following to add a banner for outages/alerts or important news, see custom.css for more styling */
    announcementBar: {
      content: '<b>ℹ️ Due to a planned data center migration, the Sage portal, web services, and nodes may be offline for extended periods from Monday, July 8th to Friday, July 12th. ℹ️</b>',
      isCloseable: false,
      textColor: 'rgb(102, 60, 0)',
      backgroundColor: 'rgb(255, 244, 229)',
    }
  },
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
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          editUrl: 'https://github.com/waggle-sensor/sage-website/edit/main/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
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
    }, [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/tutorials/accessing-data',
            from: ['/data', '/docs/data']  // obscure fix for /data/ vs /data redirect(?)
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
