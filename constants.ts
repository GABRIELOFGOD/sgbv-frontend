export interface MenuItemType {
  name: string;
  link?: string;
  subMenu?: MenuItemType[];
}

export const menuItem: MenuItemType[] = [
  {
    name:  "Projects",
    link: "/projects"
  },
  {
    name: "Events",
    link: "/events"
  },
  {
    name: "The Pillars",
    subMenu: [
      {
        name: "#SGBV",
        link: "/sgbv"
      },
      {
        name: "Female Genital Mutilation",
        link: "/fgm"
      },
      {
        name: "Child Marriage/Abuse",
        link: "/child-marriage"
      },
      {
        name: "Sexual Harassment",
        link: "/sexual-harassment"
      },
      {
        name: "Domestic Violence",
        link: "/domestic-violence"
      }
    ]
  },
  {
    name: "About Us",
    link: "/about"
  },
  {
    name: "Contact",
    link: "/contact"
  }
]