import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'rasuru',
  description:
    'there\'s not much to see here tbh',
  href: 'https://rasuru.github.io',
  author: 'rasuru',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  // {
  //   href: '/blog',
  //   label: 'blog',
  // },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  // {
  //   href: '/about',
  //   label: 'about',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/rasuru',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/rasuru_dev',
    label: 'Twitter',
  },
  {
    href: 'mailto:rasuru@protonmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
