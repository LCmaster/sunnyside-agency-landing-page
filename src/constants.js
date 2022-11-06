import assets from "./assets";
const constants = {
  menuEntries: ["About", "Services", "Projects"],
  hero: {
    title: "We are creatives",
  },
  features: {
    transform: {
      image: assets.imageTransform,
      title: "Transform your brand",
      content:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    },
    standOut: {
      image: assets.imageStandOut,
      title: "Stand out to the right audience",
      content:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
    },
    graphicDesign: {
      image: assets.imageGraphicDesign,
      style: "",
      title: "Graphic design",
      content:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    photography: {
      image: assets.imagePhotography,
      style: "",
      title: "Photography",
      content:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  },
  testimonials: {
    title: "Client testimonials",
    entries: [
      {
        image: assets.avatarEmily,
        name: "Emily R.",
        occupation: "Marketing Director",
        content:
          "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      },
      {
        image: assets.avatarThomas,
        name: "Thomas S.",
        occupation: "Chief Operating Officer",
        content:
          "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      },
      {
        image: assets.avatarJennie,
        name: "Jennie F.",
        occupation: "Business Owner",
        content:
          "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      },
    ],
  },
  gallery: [
    assets.galleryImageMilkBottles,
    assets.galleryImageOrange,
    assets.galleryImageCone,
    assets.galleryImageSugarCubes,
  ],

  socialLinks: [
    { icon: assets.iconFacebook, title: "Facebook" },
    { icon: assets.iconInstagram, title: "Instagram" },
    { icon: assets.iconTwitter, title: "Twitter" },
    { icon: assets.iconPinterest, title: "Pinterest" },
  ],
};
export default constants;
