// menu-data.ts

const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },

  {
    id: 2,
    title: "About us",
    link: "/about-us",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "Services",
    link: "/services",
    has_dropdown: true,

    sub_menus: [
      {
        id: 31,
        title: "Software Development",
        link: "/software-development",
      },
     
      {
        id: 32,
        title: "Website Development",
        link: "/website-development",
      },

      {
        id: 33,
        title: "Digital Marketing",
        link: "/digital",
      },

      {
        id: 34,
        title: "Graphic Design",
        link: "/graphic-design",
      },

      {
        id: 35,
        title: "Network & Security System",
        link: "/network-security",
      },

    ],
  },

  {
    id: 4,
    title: "Training",
    link: "/training-services",
    has_dropdown: false,
  },

  {
    id: 5,
    title: "Career",
    link: "/career",
    has_dropdown: false,
  },

  {
    id: 6,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
  },

  {
    id: 7,
    title: "Contact Us",
    link: "/contact-us",
    has_dropdown: false,
  },
];

export default menu_data;
