const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sage Website',
  tagline: 'AI at the Edge',
  url: 'https://waggle-sensor.github.io',
  baseUrl: '/sage-website/',
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
      // see custom footer component
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    disableSwitch: true,
    algolia: {
      apiKey: 'BH4D9OD16A',
      indexName: 'waggle-edge',
      contextualSearch: false, // mostly for versioned docs
      appId: 'MPDJQF6T11',
      searchParameters: {},    // Optional: Algolia search parameters
      apiKey: '02a5ef7ab6307c2a0a4d8c76036af3cf',
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/tutorials/accessing-data',
            from: ['/data', '/docs/data']  // obscure fix for /data/ vs /data redirect(?)
          },
        ],
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};
