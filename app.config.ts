export default defineAppConfig({
  docus: {
    title: 'RedactJS',
    titleTemplate: "RedactJS",
    url: 'https://js.redact.tools',
    description: 'Fast And Powerful Discord.js Bot Builder to Simplify and Beautify your discord bot.',
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
      repo: 'redactcord',
      owner: 'redactdev',
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
      title: 'ReactJS',
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
