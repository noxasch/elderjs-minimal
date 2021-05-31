module.exports = {
  origin: 'http://localhost:3000', // TODO: update this.
  lang: 'en',
  srcDir: 'src',
  distDir: 'public',
  rootDir: process.cwd(),
  build: {},
  prefix: '',
  server: {},
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this to disabled writing your files on build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog'],
      useSyntaxHighlighting: {
        theme: 'nord' // available themes: https://github.com/shikijs/shiki/blob/master/packages/themes/README.md#literal-values - try material-theme-darker
        // theme is the only option available - for now.
      },
      useTableOfContents: true // adds tocTree to each route's frontmatter data object.
    },
    '@elderjs/plugin-browser-reload': {
      // this reloads your browser when nodemon restarts your server.
      port: 8080,
    },
    // '@elderjs/plugin-seo-check': {
    //   display: ['errors', 'warnings'], // If the errors are too verbose remove 'warnings'
    //   //writeLocation: './report.json', // if you want to write a report of errors
    // },
  },
  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
