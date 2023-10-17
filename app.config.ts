export default defineAppConfig({
  docus: {
    title: 'DevTools',
    titleTemplate: "DevTools",
    url: 'https://devtools.kars.bio',
    description: 'SuperCharge React Development; Code Faster, Build Beter.',
    image: 'https://media.kars.bio/assets/react/cover.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'ReactDevTools',
      owner: 'kars1996',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      title: 'React DevTools',
      exclude: [],
      fluid: true,

    },footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Made By Kars',
        href: 'https://kars.bio',
      }
  }}
})
