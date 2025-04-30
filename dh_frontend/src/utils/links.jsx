import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "Home",
    path: ".", //links are reletive path
    icon: <FaWpforms />,
  },
  {
    text: "About Me",
    path: "interests",
    icon: <IoBarChartSharp />,
  },
  {
    text: "Projects",
    path: "Projects",
    icon: <MdQueryStats />,
  },
  {
    text: "Resume",
    path: "resume",
    icon: <ImProfile />,
  },
  {
    text: "Contact",
    path: "contact",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
