import { polygonMumbai } from "viem/chains"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "dao-organization" as const,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Organizations",
      href: "/organizations",
    },
    {
      title: "My Roles",
      href: "/roles",
    },
  ],
}
