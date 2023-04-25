const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          label: 'Science',
          position: 'left'
        }, {
          to: '/blog',
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
        },
        {
          to: '/docs/about/overview',
          position: 'left',
          label: 'Docs'
        },
        {
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
          position: "right",
          itemProp: 44,
          anotherProp: "xyz"
        },
      ],
    },
    footer: {
      // see custom (swizzled) footer component:
      // src/theme/Footer/index.js
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    disableSwitch: true,
    algolia: {
      apiKey: 'BH4D9OD16A',
      indexName: 'sage',
      contextualSearch: false, // mostly for versioned docs
      appId: 'XYV3A23P29',
      searchParameters: {},    // Optional: Algolia search parameters
      apiKey: '8dd26cf6515c47eade5695acecd06671',
    },
    colorMode: {
      disableSwitch: true
    },
    docs: {
      sidebar: {
        hideable: true,
      }
    }
  },
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
          showReadingTime: true,
          editUrl:
            'https://github.com/waggle-sensor/sage-website/edit/main/',
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
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
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
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-NMP80C7S04',
        anonymizeIP: true,
      }
    ]
  ]
};
