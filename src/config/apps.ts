export interface Application {
  name: string
  github: string
  url: string
  icon: string
  description: string
  badges?: Record<string, Badge>
  links?: Record<string, string>
  fa: string
}

export interface Category {
  name: string
  id: string
  apps: Application[]
}

interface Badge {
  src: string
  href: string
}

const googleBadge = (id: string): Badge => {
  return {
    src: `https://img.shields.io/chrome-web-store/users/${id}?logo=google&logoColor=white&label=&labelColor=4285F4&color=4285F4`,
    href: `https://chromewebstore.google.com/detail/link-extractor/${id}`,
  }
}
const mozillaBadge = (id: string): Badge => {
  return {
    src: `https://img.shields.io/amo/users/${id}?logo=mozilla&logoColor=white&label=&labelColor=E66000&color=E66000`,
    href: `https://addons.mozilla.org/addon/${id}`,
  }
}
const pypiBadge = (id: string): Badge => {
  return {
    src: `https://img.shields.io/pypi/dm/${id}?logo=pypi&logoColor=white&label=&labelColor=3776AB&color=3776AB`,
    href: `https://pypistats.org/packages/${id}`,
  }
}
const ghDownBadge = (github: string): Badge => {
  return {
    src: `https://img.shields.io/github/downloads/${github}/total?logo=listenhub&logoColor=white&label=&color=blue`,
    href: `https://github.com/${github}/releases/latest`,
  }
}
const npmDownBadge = (pkg: string, github: string = ''): Badge => {
  return {
    src: `https://img.shields.io/npm/dm/%40${encodeURIComponent(pkg)}?logo=npm&label=&color=red`,
    href: `https://npm-stat.com/charts.html?package=%40${encodeURIComponent(github || pkg)}`,
  }
}
const usedByBadge = (name: string, id: string = ''): Badge => {
  const url = new URL(
    `https://used-by.vercel.app/api/github-actions/used-by?action=${name}&badge=true`,
  )
  if (id) url.searchParams.append('package_id', id)
  return {
    src: `https://img.shields.io/endpoint?url=${encodeURIComponent(url.href)}&label=`,
    href: `https://github.com/${name}/network/dependents`,
  }
}
const imageSizeBadge = (repo: string, pkg: string): Badge => {
  return {
    src: `https://badges.cssnr.com/ghcr/size/${repo}?label=&labelColor=brightgreen`,
    href: `https://github.com/${repo}/pkgs/container/${pkg}`,
  }
}

const webExtensions: Application[] = [
  {
    name: 'Link Extractor',
    github: 'cssnr/link-extractor',
    url: 'https://link-extractor.cssnr.com/',
    icon: 'https://link-extractor.cssnr.com/media/logo.png',
    description:
      'Web Extension to easily extract, parse, or open all links/domains from a site or text with optional filters.',
    badges: {
      Google: googleBadge('ifefifghpkllfibejafbakmflidjcjfp'),
      Mozilla: mozillaBadge('link-extractor'),
    },
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'Open Links in New Tab',
    github: 'cssnr/open-links-in-new-tab',
    url: 'https://open-links-in-new-tab.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/cssnr/open-links-in-new-tab/master/src/images/logo128.png',
    description:
      'Web Extension to Open Links in New Tabs for Specified Domains or Temporarily on Any Tab.',
    badges: {
      Google: googleBadge('efahmjakjnnmleokcaomicgfhobabdkc'),
      Mozilla: mozillaBadge('open-links-in-new-tab'),
    },
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'Auto Auth',
    github: 'cssnr/auto-auth',
    url: 'https://github.com/cssnr/auto-auth',
    icon: 'https://raw.githubusercontent.com/cssnr/auto-auth/master/src/images/logo128.png',
    description:
      'Web Extension for Automatic Basic HTTP Authentication with many Options and Features.',
    badges: {
      Google: googleBadge('gpoiggobidhogpmmlakahiaaegibnogm'),
      Mozilla: mozillaBadge('auto-auth'),
    },
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'Cache Cleaner',
    github: 'cssnr/cache-cleaner',
    url: 'https://github.com/cssnr/cache-cleaner',
    icon: 'https://raw.githubusercontent.com/cssnr/cache-cleaner/master/src/images/logo128.png',
    description:
      'Easily clear cache and auto-reload with a single key press. Includes Service Workers on Firefox',
    badges: {
      Google: googleBadge('nbkhplnnajkikghffmincdbipjalpobi'),
      Mozilla: mozillaBadge('cache-cleaner-addon'),
    },
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'HLS Video Downloader',
    github: 'cssnr/hls-video-downloader',
    url: 'https://github.com/cssnr/hls-video-downloader',
    icon: 'https://raw.githubusercontent.com/cssnr/hls-video-downloader/master/src/images/logo128.png',
    description: 'Experimental Web Extension for Downloading HLS Videos using Native FFmpeg.',
    badges: {
      Google: googleBadge('mpmiiaolodhanoalpjncddpmnkbjicbo'),
      Mozilla: mozillaBadge('hls-video-downloader'),
    },
    links: {
      Client: 'https://github.com/cssnr/hls-downloader-client',
    },
    fa: 'javascript',
  },
  {
    name: 'Zipline Extension',
    github: 'cssnr/zipline-extension',
    url: 'https://zipline-extension.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/cssnr/zipline-extension/master/src/media/logo128.png',
    description: 'Zipline Web Extension to Upload, View and Edit files from a Zipline v4 Server.',
    badges: {
      Google: googleBadge('flmepeihikildcikjbmikbbmbeemedja'),
      Mozilla: mozillaBadge('zipline-extension'),
    },
    links: {
      Zipline: 'https://github.com/diced/zipline',
    },
    fa: 'javascript',
  },
  {
    name: 'Obtainium Extension',
    github: 'cssnr/obtainium-extension',
    url: 'https://github.com/cssnr/obtainium-extension',
    icon: 'https://raw.githubusercontent.com/cssnr/obtainium-extension/master/src/images/logo128.png',
    description:
      'Obtainium Extension for Desktop and Firefox Android to help installing apps through Obtainium.',
    badges: {
      Google: googleBadge('flmepeihikildcikjbmikbbmbeemedja'),
      Mozilla: mozillaBadge('obtainium-extension'),
    },
    links: {
      Obtainium: 'https://github.com/ImranR98/Obtainium',
    },
    fa: 'javascript',
  },
  {
    name: 'PlayDrift Extension',
    github: 'cssnr/playdrift-extension',
    url: 'https://playdrift-extension.cssnr.com/',
    icon: 'https://playdrift-extension.cssnr.com/media/logo.png',
    description:
      'PlayDrift Web Extension to view Rankings and Win/Loss Records on Player Profiles plus much more.',
    badges: {
      Google: googleBadge('anlkpnbhiiojmedlkchcdmigkdccnmcn'),
      Mozilla: mozillaBadge('playdrift-extension'),
    },
    links: { PlayDrift: 'https://dominoes.playdrift.com/' },
    fa: 'javascript',
  },
  {
    name: 'Django Files Extension',
    github: 'django-files/web-extension',
    url: 'https://django-files.github.io/clients/browser',
    icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
    description:
      'Web Extension for Django Files to view recent uploads, shorten URLs, and upload any Image, Video or Audio.',
    badges: {
      Google: googleBadge('abpbiefojfkekhkjnpakpekkpeibnjej'),
      Mozilla: mozillaBadge('django-files'),
    },
    links: { DjangoFiles: 'https://django-files.github.io/' },
    fa: 'javascript',
  },
  {
    name: 'SMWC Web Extension',
    github: 'cssnr/smwc-web-extension',
    url: 'https://github.com/cssnr/smwc-web-extension',
    icon: 'https://raw.githubusercontent.com/cssnr/smwc-web-extension/master/src/images/logo128.png',
    description:
      'Web Extension to to easily Patch and Play ROMs Online via the smwcworld.com site.',
    badges: {
      Google: googleBadge('foalfafgmnglcgpgkhhmcfhjgmdcjide'),
      Mozilla: mozillaBadge('smwc-web-extension'),
    },
    links: { SMWCWorld: 'https://smwcworld.com/' },
    fa: 'javascript',
  },
  {
    name: 'ASN Plus',
    github: 'cssnr/asn-plus',
    url: 'https://asn-plus.cssnr.com/',
    icon: 'https://asn-plus.cssnr.com/media/logo.png',
    description:
      'Aviation Safety Network Web Extension to enable dark mode plus add additional features.',
    badges: {
      Google: googleBadge('phcbcnpmcbkcnijkpfohkdmcofcofibh'),
      Mozilla: mozillaBadge('asn-plus'),
    },
    links: { ASN: 'https://aviation-safety.net/' },
    fa: 'javascript',
  },
  {
    name: 'Text Formatter',
    github: 'cssnr/text-formatter',
    url: 'https://github.com/cssnr/text-formatter',
    icon: 'https://raw.githubusercontent.com/cssnr/text-formatter/master/src/images/logo128.png',
    description: 'Web Extension for Splitting and Formatting Text.',
    badges: {
      Google: googleBadge('medimbembaeldnglneiipkenpagjfcdj'),
    },
    links: {
      Mozilla: 'https://github.com/cssnr/text-formatter/releases/latest',
    },
    fa: 'javascript',
  },
  {
    name: 'Aviation Tools',
    github: 'cssnr/aviation-tools',
    url: 'https://github.com/cssnr/aviation-tools',
    icon: 'https://raw.githubusercontent.com/cssnr/aviation-tools/master/src/images/logo128.png',
    description: 'Aviation Tools Web Extension. Currently a Work in Progress.',
    badges: {
      Google: googleBadge('cjjhackeogffajjndfhemgniokonimin'),
    },
    links: {
      Mozilla: 'https://github.com/cssnr/aviation-tools/releases/latest',
    },
    fa: 'javascript',
  },
  {
    name: 'Simple Extension',
    github: 'smashedr/simple-extension',
    url: 'https://github.com/smashedr/simple-extension',
    icon: 'https://raw.githubusercontent.com/smashedr/simple-extension/master/src/images/logo128.png',
    description:
      'Example Web Extension for copying and creating new web extensions based on Manifest V3.',
    // badges: {},
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'Web Enhancer',
    github: 'smashedr/web-enhancer',
    url: 'https://github.com/smashedr/web-enhancer',
    icon: 'https://raw.githubusercontent.com/smashedr/web-enhancer/master/src/images/logo128.png',
    description: 'Upcoming Web Extension with Various Browser Enhancements.',
    // badges: {},
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'Site Tools',
    github: 'smashedr/site-tools',
    url: 'https://github.com/smashedr/site-tools',
    icon: 'https://raw.githubusercontent.com/smashedr/site-tools/master/src/images/logo128.png',
    description: 'Upcoming Web Extension with Various Site Modifications.',
    // badges: {},
    // links: {},
    fa: 'javascript',
  },
]

const mobileApplications: Application[] = [
  {
    name: 'Django Files Android',
    github: 'django-files/android-client',
    url: 'https://django-files.github.io/android',
    icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
    description:
      'Android Application for sharing, uploading, and viewing files hosted on Django Files server.',
    badges: { Github: ghDownBadge('django-files/android-client') },
    links: {
      Download:
        'https://github.com/django-files/android-client/releases/latest/download/app-release.apk',
      DjangoFiles: 'https://django-files.github.io/',
    },
    fa: 'kotlin',
  },
  {
    name: 'Zipline Android',
    github: 'cssnr/zipline-android',
    url: 'https://zipline-android.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/cssnr/zipline-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
    description:
      'Android Application for sharing, uploading, and viewing files hosted on Zipline v4 server.',
    badges: { Github: ghDownBadge('cssnr/zipline-android') },
    links: {
      Download: 'https://github.com/cssnr/zipline-android/releases/latest/download/app-release.apk',
      Zipline: 'https://github.com/diced/zipline',
    },
    fa: 'kotlin',
  },
  {
    name: 'NOAA Weather',
    github: 'cssnr/noaa-weather-android',
    url: 'https://github.com/cssnr/noaa-weather-android',
    icon: 'https://raw.githubusercontent.com/cssnr/noaa-weather-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
    description:
      'Android Application for viewing NOAA weather.gov information and forecast with a widget.',
    badges: { Github: ghDownBadge('cssnr/noaa-weather-android') },
    links: {
      Download:
        'https://github.com/cssnr/noaa-weather-android/releases/latest/download/app-release.apk',
      NOAA: 'https://www.weather.gov/',
    },
    fa: 'kotlin',
  },
  {
    name: 'Remote Wallpaper',
    github: 'cssnr/remote-wallpaper-android',
    url: 'https://github.com/cssnr/remote-wallpaper-android',
    icon: 'https://raw.githubusercontent.com/cssnr/remote-wallpaper-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
    description:
      'Set a Random Wallpaper from a Remote Source at set intervals or manually from the widget.',
    badges: { Github: ghDownBadge('cssnr/remote-wallpaper-android') },
    links: {
      Download:
        'https://github.com/cssnr/remote-wallpaper-android/releases/latest/download/app-release.apk',
      Aviation: 'https://smashedr.github.io/random-image/',
    },
    fa: 'kotlin',
  },
  {
    name: 'Tibs3DPrints Android',
    github: 'cssnr/tibs3dprints-android',
    url: 'https://github.com/cssnr/tibs3dprints-android',
    icon: 'https://raw.githubusercontent.com/cssnr/tibs3dprints-android/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.webp',
    description:
      'Android Application for Tibs3DPrints website with recent news and alerts for updates.',
    badges: { Github: ghDownBadge('cssnr/tibs3dprints-android') },
    links: {
      Download:
        'https://github.com/cssnr/tibs3dprints-android/releases/latest/download/app-release.apk',
      Tibs3DPrints: 'https://tibs3dprints.com/',
    },
    fa: 'kotlin',
  },
]

const pyPackages: Application[] = [
  {
    name: 'ShareX CLI',
    github: 'cssnr/sharex-cli',
    url: 'https://cssnr.github.io/sharex-cli/',
    icon: 'https://cssnr.github.io/sharex-cli/assets/images/logo.svg',
    description:
      'Command Line Interface to Upload Files to a ShareX Server using a SXCU configuration.',
    badges: { PyPi: pypiBadge('sharex-cli') },
    links: { PyPi: 'https://pypi.org/project/sharex-cli' },
    fa: 'python',
  },
  {
    name: 'TOML Run',
    github: 'cssnr/toml-run',
    url: 'https://cssnr.github.io/toml-run/',
    icon: 'https://cssnr.github.io/toml-run/assets/images/logo.svg',
    description: 'Define custom scripts in your pyproject.toml and easily run them with this tool.',
    badges: { PyPi: pypiBadge('toml-run') },
    links: { PyPi: 'https://pypi.org/project/toml-run' },
    fa: 'python',
  },
  {
    name: 'Vultr Python',
    github: 'cssnr/vultr-python',
    url: 'https://cssnr.github.io/vultr-python/',
    icon: 'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/vultr-python/logo128.png',
    description: 'Vultr Cloud Hosting API Python 3 Library.',
    badges: { PyPi: pypiBadge('vultr-python') },
    links: {
      PyPi: 'https://pypi.org/project/vultr-python',
      Vultr: 'https://www.vultr.com/?ref=6905748',
    },
    fa: 'python',
  },
  {
    name: 'Actions Tools',
    github: 'cssnr/actions-tools',
    url: 'https://actions-tools.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions-tools/logo128.png',
    description: 'A Typed Python GitHub Actions Tookit similar to actions/toolkit.',
    badges: { PyPi: pypiBadge('actions-tools') },
    links: {
      PyPi: 'https://pypi.org/project/actions-tools',
      Actions: 'https://github.com/actions/toolkit/tree/main/packages/core#actionscore',
    },
    fa: 'python',
  },
  {
    name: 'Zipline CLI',
    github: 'cssnr/zipline-cli',
    url: 'https://zipline-cli.cssnr.com/',
    icon: 'https://zipline-cli.cssnr.com/assets/images/logo.png',
    description: 'Command Line Interface for Zipline and Django Files.',
    badges: { PyPi: pypiBadge('zipline-cli') },
    links: { PyPi: 'https://pypi.org/project/zipline-cli', Zipline: 'https://zipline.diced.sh/' },
    fa: 'python',
  },
  {
    name: 'Brew Python Resources',
    github: 'cssnr/brew-python-resources',
    url: 'https://cssnr.github.io/brew-python-resources/',
    icon: 'https://cssnr.github.io/brew-python-resources/assets/images/logo.svg',
    description: 'Generate and Update Homebrew Formula (Brew) Python Resources.',
    badges: { PyPi: pypiBadge('brew-python-resources') },
    links: {
      PyPi: 'https://pypi.org/project/brew-python-resources',
      Tap: 'https://github.com/cssnr/homebrew-tap',
    },
    fa: 'python',
  },
  {
    name: 'NPM Stat',
    github: 'cssnr/npmstat',
    url: 'https://cssnr.github.io/npmstat/',
    icon: 'https://cssnr.github.io/npmstat/assets/images/logo.svg',
    description: 'Get NPM Package Stats and Info from the command line or as a Python module.',
    badges: { PyPi: pypiBadge('npmstat') },
    links: { PyPi: 'https://pypi.org/project/npmstat' },
    fa: 'python',
  },
]

const npmPackages: Application[] = [
  {
    name: 'VitePress Swiper',
    github: 'cssnr/vitepress-swiper',
    url: 'https://vitepress-swiper.cssnr.com/',
    icon: 'https://vitepress-swiper.cssnr.com/images/logo.png',
    description: 'A VitePress Plugin to add a SwiperJS Photo Gallery.',
    badges: { Github: npmDownBadge('cssnr/vitepress-swiper') },
    links: { NPM: 'https://www.npmjs.com/package/@cssnr/vitepress-swiper' },
    fa: 'npm',
  },
  {
    name: 'VitePress Contributors',
    github: 'cssnr/vitepress-plugin-contributors',
    url: 'https://vitepress-contributors.cssnr.com/',
    icon: 'https://vitepress-contributors.cssnr.com/images/logo.png',
    description: 'A VitePress Plugin to generate and display GitHub Contributors.',
    badges: { Github: npmDownBadge('cssnr/vitepress-plugin-contributors') },
    links: { NPM: 'https://www.npmjs.com/package/@cssnr/vitepress-plugin-contributors' },
    fa: 'npm',
  },
  {
    name: 'VitePress CopyButton',
    github: 'cssnr/vitepress-plugin-copybutton',
    url: 'https://vitepress-copybutton.cssnr.com/',
    icon: 'https://vitepress-copybutton.cssnr.com/images/logo.png',
    description: 'A VitePress Plugin to easily add a Copy Button with automatic text detection.',
    badges: { Github: npmDownBadge('cssnr/vitepress-plugin-copybutton') },
    links: { NPM: 'https://www.npmjs.com/package/@cssnr/vitepress-plugin-copybutton' },
    fa: 'npm',
  },
]

const webApplications: Application[] = [
  {
    name: 'Node Badges',
    github: 'smashedr/node-badges',
    url: 'https://smashedr.github.io/node-badges-docs/',
    icon: 'https://smashedr.github.io/node-badges-docs/images/logo.png',
    description: 'A NodeJS Badge Server similar to Shields.io with extra badges/icons.',
    // badges: {},
    links: {
      API: 'https://badges.cssnr.com/',
      Dashboard: 'https://cssnr.grafana.net/public-dashboards/8a24a95171fe4127ada92afb071b9331',
    },
    fa: 'python',
  },
  {
    name: 'Django Files',
    github: 'django-files/django-files',
    url: 'https://django-files.github.io/',
    icon: 'https://raw.githubusercontent.com/django-files/web-extension/master/src/media/logo128.png',
    description: 'A Feature Packed Self-Hosted File Manager for Sharing Files with ShareX.',
    // badges: {},
    links: { Website: 'https://django-files.github.io/' },
    fa: 'python',
  },
  {
    name: 'SMWC ROM Archive',
    github: 'cssnr/smwc-web',
    url: 'https://smwcworld.com/',
    icon: 'https://smwcworld.com/static/images/logo.png',
    description: 'SMWCentral ROM Archive to archive, download, notify, patch and play SMW ROMs.',
    // badges: {},
    links: { Website: 'https://smwcworld.com/' },
    fa: 'python',
  },
  {
    name: 'SlashGIF',
    github: '',
    url: 'https://slashgif.com/',
    icon: 'https://slashgif.com/static/images/slashgif.png',
    description: 'Slack App to search for a random GIF and preview it, before posting publicly.',
    // badges: {},
    links: { Website: 'https://slashgif.com/' },
    fa: 'python',
  },
]

const dockerImages: Application[] = [
  {
    name: 'Docker Nginx Proxy',
    github: 'cssnr/docker-nginx-proxy',
    url: 'https://github.com/cssnr/docker-nginx-proxy',
    icon: '',
    description: 'Nginx Docker Image for Proxying to Other Services.',
    badges: { Size: imageSizeBadge('cssnr/docker-nginx-proxy', 'docker-nginx-proxy') },
    links: {
      Package: 'https://github.com/cssnr/docker-nginx-proxy/pkgs/container/docker-nginx-proxy',
    },
    fa: 'docker',
  },

  {
    name: 'Docker Nginx Static',
    github: 'cssnr/docker-nginx-static',
    url: 'https://github.com/cssnr/docker-nginx-static',
    icon: '',
    description: 'Nginx Docker Image for Serving Static Files.',
    badges: { Size: imageSizeBadge('cssnr/docker-nginx-static', 'docker-nginx-static') },
    links: {
      Package: 'https://github.com/cssnr/docker-nginx-static/pkgs/container/docker-nginx-static',
    },
    fa: 'docker',
  },
  {
    name: 'Readme Stats Docker Image',
    github: 'smashedr/github-readme-stats',
    url: 'https://github.com/smashedr/github-readme-stats/',
    icon: '',
    description: 'GitHub Readme Stats Docker Images, Compose and Workflows.',
    badges: { Size: imageSizeBadge('smashedr/github-readme-stats', 'github-readme-stats') },
    links: {
      Package: 'https://github.com/smashedr?tab=packages&repo_name=github-readme-stats',
      Source: 'https://github.com/anuraghazra/github-readme-stats',
    },
    fa: 'docker',
  },
]

const githubActions: Application[] = [
  {
    name: 'Stack Deploy',
    github: 'cssnr/stack-deploy-action',
    url: 'https://docker-deploy.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/cssnr/stack-deploy-docs/refs/heads/master/docs/public/images/logo/logo512.png',
    description: 'Deploy Docker Stack to Remote Host using SSH Authentication.',
    badges: { UsedBy: usedByBadge('cssnr/stack-deploy-action') },
    links: { Actions: 'https://github.com/marketplace/actions/docker-stack-deploy' },
    fa: 'powershell',
  },
  {
    name: 'Portainer Stack Deploy',
    github: 'cssnr/portainer-stack-deploy-action',
    url: 'https://portainer-deploy.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/cssnr/portainer-stack-deploy-docs/refs/heads/master/docs/public/images/logo/logo.png',
    description: 'Deploy Docker Stack to Remote Host using SSH Authentication.',
    badges: { UsedBy: usedByBadge('cssnr/portainer-stack-deploy-action') },
    links: { Actions: 'https://github.com/marketplace/actions/portainer-stack-deploy-action' },
    fa: 'javascript',
  },
  {
    name: 'Docker Context Action',
    github: 'cssnr/docker-context-action',
    url: 'https://github.com/cssnr/docker-context-action',
    icon: '',
    description:
      'Set up a Remote Docker Context over SSH using Password or Keyfile Authentication.',
    badges: { UsedBy: usedByBadge('cssnr/docker-context-action') },
    links: { Actions: 'https://github.com/marketplace/actions/docker-context' },
    fa: 'javascript',
  },
  {
    name: 'Docker Tags Action',
    github: 'cssnr/docker-tags-action',
    url: 'https://github.com/cssnr/docker-tags-action',
    icon: 'https://raw.githubusercontent.com/cssnr/docker-tags-action/refs/heads/master/.github/assets/logo.svg',
    description: 'Generate Docker Tags and Labels for building Docker images with GitHub Actions.',
    badges: { UsedBy: usedByBadge('cssnr/docker-tags-action') },
    links: { Actions: 'https://github.com/marketplace/actions/docker-tags' },
    fa: 'javascript',
  },
  {
    name: 'Update Version Tags',
    github: 'cssnr/update-version-tags-action',
    url: 'https://github.com/cssnr/update-version-tags-action',
    icon: '',
    description: 'Update Version Tags on Push or Release for Semantic Versions.',
    badges: { UsedBy: usedByBadge('cssnr/update-version-tags-action', 'UGFja2FnZS01Nzg2OTE4MTQ0') },
    links: { Actions: 'https://github.com/marketplace/actions/update-version-tags-action' },
    fa: 'javascript',
  },
  {
    name: 'Mirror Repository Action',
    github: 'cssnr/mirror-repository-action',
    url: 'https://github.com/cssnr/mirror-repository-action',
    icon: '',
    description: 'Mirror Git Repository to Remote Host w/ Auto Creation for Codeberg.',
    badges: { UsedBy: usedByBadge('cssnr/mirror-repository-action') },
    links: { Actions: 'https://github.com/marketplace/actions/mirror-repository-action' },
    fa: 'javascript',
  },
  {
    name: 'VirusTotal Scan',
    github: 'cssnr/virustotal-action',
    url: 'https://github.com/cssnr/virustotal-action',
    icon: '',
    description: 'Scan Release Artifacts with VirusTotal and Update Release Notes.',
    badges: { UsedBy: usedByBadge('cssnr/virustotal-action') },
    links: { Actions: 'https://github.com/marketplace/actions/virustotal-action' },
    fa: 'javascript',
  },
  {
    name: 'Cloudflare Purge Cache',
    github: 'cssnr/cloudflare-purge-cache-action',
    url: 'https://github.com/cssnr/cloudflare-purge-cache-action',
    icon: '',
    description: 'Easily Purge Cloudflare Cache.',
    badges: {
      UsedBy: usedByBadge('cssnr/cloudflare-purge-cache-action', 'UGFja2FnZS01ODQ1MzI4NzQy'),
    },
    links: { Actions: 'https://github.com/marketplace/actions/cloudflare-purge-zone-cache' },
    fa: 'python',
  },
  {
    name: 'Actions Up Action',
    github: 'cssnr/actions-up-action',
    url: 'https://github.com/cssnr/actions-up-action',
    icon: '',
    description: 'Check Actions for Updates with actions-up and report out-of-date actions.',
    badges: { UsedBy: usedByBadge('cssnr/actions-up-action') },
    links: { Actions: 'https://github.com/marketplace/actions/actions-up' },
    fa: 'javascript',
  },
  {
    name: 'Rhysd Actionlint Action',
    github: 'cssnr/actionlint-action',
    url: 'https://github.com/cssnr/actionlint-action',
    icon: '',
    description: 'Easily use rhysd/actionlint in a Workflow run with Pyflakes and Actions caching.',
    badges: { UsedBy: usedByBadge('cssnr/actionlint-action') },
    links: { Actions: 'https://github.com/marketplace/actions/rhysd-actionlint-action' },
    fa: 'javascript',
  },
  {
    name: 'Zensical Action',
    github: 'cssnr/zensical-action',
    url: 'https://zensical-action.cssnr.com/',
    icon: 'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/zensical-action/logo160.png',
    description: 'Checkout, build, upload, and deploy Zensical Docs to GitHub Pages.',
    badges: { UsedBy: usedByBadge('cssnr/zensical-action') },
    links: { Actions: 'https://github.com/marketplace/actions/zensical-action' },
    fa: 'javascript',
  },
  {
    name: 'Homebrew Action',
    github: 'cssnr/homebrew-action',
    url: 'https://github.com/cssnr/homebrew-action',
    icon: 'https://raw.githubusercontent.com/cssnr/homebrew-action/refs/heads/master/.github/assets/logo.svg',
    description: 'Homebrew Action to Update Formula url, version and sha256.',
    badges: { UsedBy: usedByBadge('cssnr/homebrew-action') },
    links: { Actions: 'https://github.com/marketplace/actions/homebrew-action' },
    fa: 'javascript',
  },
  {
    name: 'Package Changelog Action',
    github: 'cssnr/package-changelog-action',
    url: 'https://github.com/cssnr/package-changelog-action',
    icon: '',
    description: 'Action to Generate NPM Package Changelog on Release.',
    badges: { UsedBy: usedByBadge('cssnr/package-changelog-action') },
    links: { Actions: 'https://github.com/marketplace/actions/package-changelog' },
    fa: 'javascript',
  },
  {
    name: 'NPM Outdated Check',
    github: 'cssnr/npm-outdated-action',
    url: 'https://github.com/cssnr/npm-outdated-action',
    icon: '',
    description: 'Action to report npm outdated packages on a pull request.',
    badges: { UsedBy: usedByBadge('cssnr/npm-outdated-action') },
    links: { Actions: 'https://github.com/marketplace/actions/npm-outdated-check' },
    fa: 'javascript',
  },
  {
    name: 'Label Creator Action',
    github: 'cssnr/label-creator-action',
    url: 'https://github.com/cssnr/label-creator-action',
    icon: '',
    description: 'Automatically Create or Update Labels to ensure they exist.',
    badges: { UsedBy: usedByBadge('cssnr/label-creator-action') },
    links: { Actions: 'https://github.com/marketplace/actions/label-creator' },
    fa: 'javascript',
  },
  {
    name: 'Algolia Crawler Action',
    github: 'cssnr/algolia-crawler-action',
    url: 'https://github.com/cssnr/algolia-crawler-action',
    icon: 'https://raw.githubusercontent.com/cssnr/algolia-crawler-action/refs/heads/master/.github/assets/logo.svg',
    description: 'Easily run the Algolia Crawler after a deployment.',
    badges: { UsedBy: usedByBadge('cssnr/algolia-crawler-action') },
    links: { Actions: 'https://github.com/marketplace/actions/algolia-crawler' },
    fa: 'javascript',
  },
  {
    name: 'Create Pull Action',
    github: 'cssnr/create-pull-action',
    url: 'https://github.com/cssnr/create-pull-action',
    icon: 'https://raw.githubusercontent.com/cssnr/create-pull-action/refs/heads/master/.github/assets/logo.svg',
    description: 'Easily create a Pull Request from a GitHub Action.',
    badges: { UsedBy: usedByBadge('cssnr/create-pull-action') },
    links: { Actions: 'https://github.com/marketplace/actions/create-pull' },
    fa: 'javascript',
  },
  {
    name: 'Upload Release Action',
    github: 'cssnr/upload-release-action',
    url: 'https://github.com/cssnr/upload-release-action',
    icon: '',
    description: 'Upload Files or Globs as Release Assets with Custom Names.',
    badges: { UsedBy: usedByBadge('cssnr/upload-release-action') },
    links: { Actions: 'https://github.com/marketplace/actions/upload-release' },
    fa: 'javascript',
  },
  {
    name: 'Check Build Action',
    github: 'cssnr/check-build-action',
    url: 'https://github.com/cssnr/check-build-action',
    icon: '',
    description: 'Action to Check if the provided Build command ran.',
    badges: { UsedBy: usedByBadge('cssnr/check-build-action') },
    links: { Actions: 'https://github.com/marketplace/actions/check-build' },
    fa: 'javascript',
  },
  {
    name: 'Web Request Action',
    github: 'cssnr/web-request-action',
    url: 'https://github.com/cssnr/web-request-action',
    icon: '',
    description: 'Send Web Requests like POST and GET with Axios using GitHub Actions.',
    badges: { UsedBy: usedByBadge('cssnr/web-request-action') },
    links: { Actions: 'https://github.com/marketplace/actions/web-request' },
    fa: 'javascript',
  },
  {
    name: 'Parse Issue Form',
    github: 'cssnr/parse-issue-form-action',
    url: 'https://github.com/cssnr/parse-issue-form-action',
    icon: '',
    description: 'Parse Issue Forms Into Individual Outputs.',
    badges: { UsedBy: usedByBadge('cssnr/parse-issue-form-action') },
    links: { Actions: 'https://github.com/marketplace/actions/parse-issue-form' },
    fa: 'javascript',
  },
  {
    name: 'TOML Action',
    github: 'cssnr/toml-action',
    url: 'https://github.com/cssnr/toml-action',
    icon: 'https://raw.githubusercontent.com/cssnr/toml-action/refs/heads/master/.github/assets/logo.svg',
    description: 'TOML 1.0.0 Action to Parse, Read or Edit Values using JSONPath.',
    badges: { UsedBy: usedByBadge('cssnr/toml-action') },
    links: { Actions: 'https://github.com/marketplace/actions/toml-action' },
    fa: 'javascript',
  },
  {
    name: 'Update JSON Value',
    github: 'cssnr/update-json-value-action',
    url: 'https://github.com/cssnr/update-json-value-action',
    icon: '',
    description: 'Update JSON file Value(s) for Publishing.',
    badges: { UsedBy: usedByBadge('cssnr/update-json-value-action') },
    links: { Actions: 'https://github.com/marketplace/actions/update-json-value-action' },
    fa: 'javascript',
  },
  {
    name: 'Json Key Value Check',
    github: 'cssnr/json-key-value-check-action',
    url: 'https://github.com/cssnr/json-key-value-check-action',
    icon: '',
    description: 'Verify Specified JSON Keys are equal to Specified Values.',
    badges: { UsedBy: usedByBadge('cssnr/json-key-value-check-action') },
    links: { Actions: 'https://github.com/marketplace/actions/json-key-value-check' },
    fa: 'typescript',
  },
  {
    name: 'Get Commit Action',
    github: 'cssnr/get-commit-action',
    url: 'https://github.com/cssnr/get-commit-action',
    icon: 'https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/get-commit-action/logo.png',
    description: 'Get Commit and Parse Details such as the head Commit Message.',
    badges: { UsedBy: usedByBadge('cssnr/get-commit-action') },
    links: { Actions: 'https://github.com/marketplace/actions/get-commit' },
    fa: 'typescript',
  },
  {
    name: 'Mozilla Addon Update',
    github: 'cssnr/mozilla-addon-update-action',
    url: 'https://github.com/cssnr/mozilla-addon-update-action',
    icon: '',
    description: 'Update the Mozilla Firefox Update JSON File after a Release.',
    badges: { UsedBy: usedByBadge('cssnr/mozilla-addon-update-action') },
    links: { Actions: 'https://github.com/marketplace/actions/mozilla-addon-update-action' },
    fa: 'python',
  },
  {
    name: 'Create Files Action',
    github: 'cssnr/create-files-action',
    url: 'https://github.com/cssnr/create-files-action',
    icon: '',
    description: 'Easily create various file types with custom options.',
    badges: { UsedBy: usedByBadge('cssnr/create-files-action') },
    // links: {},
    fa: 'typescript',
  },
  {
    name: 'Env to/from Json',
    github: 'cssnr/env-json-action',
    url: 'https://github.com/cssnr/env-json-action',
    icon: '',
    description: 'Convert Environment File to/from a JSON File w/ Outputs.',
    badges: { UsedBy: usedByBadge('cssnr/env-json-action') },
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'Push Artifacts',
    github: 'cssnr/push-artifacts-action',
    url: 'https://github.com/cssnr/push-artifacts-action',
    icon: '',
    description: 'Pushes Build Artifacts to a Remote Host using rsync.',
    badges: { UsedBy: usedByBadge('cssnr/push-artifacts-action') },
    // links: {},
    fa: 'powershell',
  },
  {
    name: 'JavaScript Template Action',
    github: 'smashedr/javascript-action',
    url: 'https://github.com/smashedr/javascript-action',
    icon: '',
    description: 'Template for JavaScript Actions.',
    badges: { UsedBy: usedByBadge('smashedr/javascript-action') },
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'TypeScript Template Action',
    github: 'smashedr/typescript-action',
    url: 'https://github.com/smashedr/typescript-action',
    icon: '',
    description: 'Template for TypeScript Actions.',
    badges: { UsedBy: usedByBadge('smashedr/typescript-action') },
    // links: {},
    fa: 'typescript',
  },
  {
    name: 'Python Template Action',
    github: 'smashedr/py-test-action',
    url: 'https://github.com/smashedr/py-test-action',
    icon: '',
    description: 'Template for Python Actions.',
    badges: { UsedBy: usedByBadge('smashedr/py-test-action') },
    // links: {},
    fa: 'python',
  },
  {
    name: 'Docker Template Action',
    github: 'smashedr/docker-test-action',
    url: 'https://github.com/smashedr/docker-test-action',
    icon: '',
    description: 'Template for Docker Container Actions.',
    badges: { UsedBy: usedByBadge('smashedr/docker-test-action') },
    // links: {},
    fa: 'docker',
  },
  {
    name: 'UV Template Action',
    github: 'smashedr/test-action-uv',
    url: 'https://github.com/smashedr/test-action-uv',
    icon: '',
    description: 'Template for Docker Container Actions.',
    badges: { UsedBy: usedByBadge('smashedr/test-action-uv') },
    // links: {},
    fa: 'docker',
  },
]

const otherSoftware: Application[] = [
  {
    name: "Carl's Cogs",
    github: 'smashedr/carl-cogs',
    url: 'https://github.com/smashedr/carl-cogs',
    icon: '',
    description: 'Red Discord Bot Cogs. Commands and Packages for the Red Discord Bot.',
    // badges: {},
    links: { RedDiscordBot: 'https://github.com/Cog-Creators/Red-DiscordBot' },
    fa: 'python',
  },
  {
    name: 'Flask Random Image',
    github: 'smashedr/flask-random-image',
    url: 'https://github.com/smashedr/flask-random-image',
    icon: '',
    description: 'Flask App to Redirect to a Random Image designed for Docker.',
    // badges: {},
    links: {
      API: 'https://flask-image.cssnr.com/',
      Pages: 'https://github.com/smashedr/random-image/',
    },
    fa: 'python',
  },
  {
    name: 'Discord Webhook Relay',
    github: 'smashedr/node-discord-hook',
    url: 'https://github.com/smashedr/node-discord-hook',
    icon: '',
    description: 'Discord Webhook Relay built in NodeJS designed for Docker.',
    // badges: {},
    // links: {},
    fa: 'javascript',
  },
  {
    name: 'YouTube Embed Redirect',
    github: 'smashedr/youtube-embed',
    url: 'https://github.com/smashedr/youtube-embed/',
    icon: '',
    description: 'GitHub Pages and Userscript to Redirect YouTube to an Embed.',
    // badges: {},
    links: {
      Userscript:
        'https://github.com/smashedr/youtube-embed/raw/master/src/youtube-redirect.user.js',
      Pages: 'https://smashedr.github.io/youtube-embed/',
    },
    fa: 'python',
  },
]

const categories: Category[] = [
  { name: 'Web Extensions', id: 'webExtensions', apps: webExtensions },
  { name: 'Mobile Applications', id: 'mobileApplications', apps: mobileApplications },
  { name: 'Python Packages', id: 'pyPackages', apps: pyPackages },
  { name: 'NPM Packages', id: 'npmPackages', apps: npmPackages },
  { name: 'Web Applications', id: 'webApplications', apps: webApplications },
  { name: 'GitHub Actions', id: 'githubActions', apps: githubActions },
  { name: 'Docker Images', id: 'dockerImages', apps: dockerImages },
  { name: 'Other Software', id: 'otherSoftware', apps: otherSoftware },
]

export default categories
