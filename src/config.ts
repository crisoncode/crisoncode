import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://crisoncode.com/",
  author: "Cristian Estarlich",
  desc: "Blog dedicated to learn things about Software development, methodologies, salesforce commerce cloud, and other things that I can consider interesting.",
  title: "#CrisOnCode",
  ogImage: "assets/profile.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/crisoncode",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cristian-estarlich-a6a78273",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:cestarlich.dev@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/CEstarlich",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  }
];
