import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Peter Tsitsi",
  DESCRIPTION: "Welcome to my Astro portfolio and blog posts.",
  AUTHOR: "Peter k. tsitsi",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Technical blog posts about the general state of development.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "kpetertsitsi@gmail.com",
    HREF: "mailto:kpetertsitsi@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "My Github",
    HREF: "https://github.com/peterktsitsi"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "My linked in",
    HREF: "https://www.linkedin.com/in/peter-tsitsi-643123298/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "My twitter",
    HREF: "https://twitter.com/",
  },
]

