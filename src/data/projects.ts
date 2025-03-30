/* import portfolio from "../../public/projects/portfolio.png"; */
import witl from "../../public/projects/witl.png";
import artfactory from "../../public/projects/artfactory.png";
import sdd from "../../public/projects/sdd.png";
import ewb from "../../public/projects/ewb.png";
import dashboard from "../../public/projects/dashboard.png";
import caveexploring from "../../public/projects/caveexploring.png";
import aurora from "../../public/projects/aurora.png";
import csa from "../../public/projects/csa.png";
import cvdsa from "../../public/projects/cvdsa.png";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiFirebase,
  SiPrettier,
  SiCplusplus,
  SiCmake,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export const projects = [
  {
    image: dashboard,
    name: "Productivity Dashboard",
    description:
      "Developed a full-stack productivity dashboard that integrates Google Calendar, Weather, Spotify, and Time Zone Data, offering a centralized hub for daily tools.",
    icons: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiFigma,
      SiFirebase,
      SiPrettier,
    ],
    github: "https://github.com/stanleylew5/productivity-dashboard",
    website: "https://github.com/stanleylew5/productivity-dashboard",
  },
  {
    image: aurora,
    name: "Aurora | Hackathon Portal Template ",
    description:
      "Co-developed a Hackathon Portal Template that expediates the process of building hackathon websites.",
    icons: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      SiFigma,
      SiFirebase,
      SiPrettier,
    ],
    github: "https://github.com/acm-ucr/aurora",
    website: "https://github.com/acm-ucr/aurora",
  },
  {
    image: caveexploring,
    name: "Cave Exploring",
    description:
      "A team-developed terminal-based game developed with C++, compiled through CMake, and tested with GoogleTest (gtest).",
    icons: [SiCplusplus, SiCmake],
    github: "https://github.com/stanleylew5/cave-exploring",
    website: "https://github.com/stanleylew5/cave-exploring",
  },
  {
    image: csa,
    name: "Chinese Student Association",
    description:
      "Led a team of ten student developers to develop a website for UCR's Chinese Student Association",
    icons: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    github: "https://github.com/acm-ucr/csa-website",
    website: "https://csa.ucrhighlanders.org",
  },
  {
    image: cvdsa,
    name: "Cardiovascular Disease Student Association",
    description:
      "Led a team of ten student developers to develop a website for UofT's CVDSA organization",
    icons: [
      SiReact,
      SiNextdotjs,
      SiTypescript,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    github: "https://github.com/acm-ucr/cvdsa-uoft-website",
    website: "https://acm-ucr.github.io/cvdsa-uoft-website/",
  },
  {
    image: witl,
    name: "Womxn In The Law",
    description:
      "Led a team of ten student developers to develop a website for UCR's Womxn In the Law organization",
    icons: [
      SiReact,
      SiNextdotjs,
      IoLogoJavascript,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    github: "https://github.com/acm-ucr/witl-website",
    website: "https://witl.ucrhighlanders.org",
  },
  {
    image: artfactory,
    name: "Art Factory",
    description:
      "The official website for Art Factory, an organization aimed towards cultivating creativity, at The University of California, Riverside",
    icons: [
      SiReact,
      SiNextdotjs,
      IoLogoJavascript,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    github: "https://github.com/acm-ucr/art-factory-website",
    website: "https://artfactory.ucrhighlanders.org/",
  },
  {
    image: sdd,
    name: "Senior Design Display",
    description:
      "An UCR-affiliated site showcasing Senior Design projects, a platform to display students' solutions to real-world challenges",
    icons: [
      SiReact,
      SiNextdotjs,
      IoLogoJavascript,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    github: "https://github.com/acm-ucr/senior-design-website",
    website: "https://seniors.cs.ucr.edu/",
  },
  {
    image: ewb,
    name: "Engineers Without Borders",
    description:
      "The official Engineers Without Borders website, a nonprofit organization dedicated to supporting worldwide community-driven development programs.",
    icons: [
      SiReact,
      SiNextdotjs,
      IoLogoJavascript,
      SiTailwindcss,
      TbBrandFramerMotion,
    ],
    github: "https://github.com/acm-ucr/ewb-website",
    website: "https://ewb.ucrhighlanders.org/",
  },
];
