import { NavLink } from "react-router-dom";
import Accordion from "./components/Accordion";
import { Text } from "../../components";
const _navItem = [
  {
    label: "dashboard.components.slider-items.0.label",
    to: "/dashboard",
  },
  {
    label: "dashboard.components.slider-items.1.label",
    children: [],
  },
  {
    label: "dashboard.components.slider-items.2.label",
    to: "/dashboard/page-1",
  },
  {
    label: "dashboard.components.slider-items.3.label",
    to: "/dashboard/page-2",
  },
  {
    label: "dashboard.components.slider-items.4.label",
    children: [
      {
        label: "dashboard.components.slider-items.4.children.0.label",
        to: "/dashboard/buy-crypto-currency",
      },
      {
        label: "dashboard.components.slider-items.4.children.1.label",
        to: "/dashboard/page-4",
      },
    ],
  },
  {
    label: "dashboard.components.slider-items.5.label",
    to: "/dashboard/page-5",
  },
  {
    label: "dashboard.components.slider-items.6.label",
    to: "/dashboard/page-6",
  },
  {
    label: "dashboard.components.slider-items.7.label",
    to: "/dashboard/page-6",
  },
];
_navItem.render = (navItem = _navItem) => {
  const items = [];
  navItem.forEach((item, index) => {
    if ("to" in item) {
      items.push(
        <NavLink
          className="slider-item"
          activeClassName="active text-violet"
          key={index}
          to={item.to}
          exact
        >
          <Text value={item.label} />
        </NavLink>
      );
    } else if ("children" in item) {
      items.push(
        <Accordion key={index} label={item.label}>
          {_navItem.render(item.children)}
        </Accordion>
      );
    }
  });
  return items;
};
export default _navItem;
