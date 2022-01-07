import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Text } from "../../components";
const navItem = [
  {
    label: "landing.components.header.nav.0.label",
    to: "/",
  },
  {
    label: "landing.components.header.nav.1.label",
    items: [],
  },
  {
    label: "landing.components.header.nav.2.label",
    items: [],
  },
  {
    label: "landing.components.header.nav.3.label",
    items: [],
  },
  {
    label: "landing.components.header.nav.4.label",
    to: "/blog",
  },
  {
    label: "landing.components.header.nav.5.label",
    to: "/contact-us",
  },
];
navItem.renderNavitems = () => {
  return navItem.map((item, index) => {
    const dropDownProps = {
      key: index,
      label: <Text value={item.label} />,
      variant: "none",
      className: "w-fit",
    };
    const navLinkProps = {
      key: index,
      to: item.to,
      children: <Text value={item.label} />,
      className: "btn position-relative w-fit",
      exact: true,
      activeClassName: "text-dark active",
    };
    if ("items" in item) return React.createElement(Dropdown, dropDownProps);
    if ("to" in item) return React.createElement(NavLink, navLinkProps);
    return null;
  });
};
export default navItem;
