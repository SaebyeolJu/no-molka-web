/** @format */

import React from "react";

import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io5";

export const NavbarData = [
  {
    icon: <BiIcons.BiArchive />,
    title: "Map",
    path: "/map",
    cName: "nav-text",
  },

  {
    icon: <BiIcons.BiNews />,
    title: "News",
    path: "/news",
    cName: "nav-text",
  },
  // {
  //   icon: <GoIcons.GoReport />,
  //   title: "Report",
  //   path: "/reports",
  //   cName: "nav-text",
  // },
  // {
  //   icon: <FaIcons.FaRegQuestionCircle />,
  //   title: "Question",
  //   path: "/question",
  //   cName: "nav-text",
  // },
  // {
  //   icon: <FiIcons.FiPhone />,
  //   title: "Contact",
  //   path: "/contact",
  //   cName: "nav-text",
  // },
  // {
  //   icon: <IoIcons.IoPeopleCircle />,
  //   title: "About",
  //   cName: "nav-text",
  //   path: "/about-us",
  // },
];
