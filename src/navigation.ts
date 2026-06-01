import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About SHAIL Lab', href: getPermalink('/about') },

    {
      text: 'People',
      links: [
        { text: 'Founder & Director', href: getPermalink('/founder/info') },
        { text: 'Lab Members', href: getPermalink('/founder/team') },
        { text: 'Alumni', href: getPermalink('/founder/alumni') },
      ],
    },

    {
      text: 'Research',
      links: [
        { text: 'Publications', href: getPermalink('/founder/publications') },
        { text: 'Conferences', href: getPermalink('/founder/conference') },
        { text: 'Collaborations', href: getPermalink('/founder/collaborations') },
      ],
    },

    { text: 'Projects', href: getPermalink('/founder/projects') },
    { text: 'News\u00A0&\u00A0Events', href: getBlogPermalink() },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};
