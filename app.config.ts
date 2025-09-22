export default defineAppConfig({
  title: 'Nominal',
  theme: {
    dark: true,
    colors: {
      primary: '#3B82F6',
    }
  },
  head: {
    title: 'Nominal - Your Web3 Identity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Your universal Web3 username across all blockchains' },
      { name: 'theme-color', content: '#111827' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/nominal.svg' },
      { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/images/nominal-32x32.svg' },
      { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/images/nominal-16x16.svg' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  }
})
