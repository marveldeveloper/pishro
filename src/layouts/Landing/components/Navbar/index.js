import React from "react";
import navItem from "../../_navItem";
import "./index.scss";
export default function Navbar() {
  return (
    <nav className="Navbar text-secondary d-none d-lg-flex flex-center gap-2 mx-auto space-no-wrap">
      {/* <nav className="Navbar text-secondary d-flex align-items-center justify-content-start justify-content-lg-between gap-2 mx-auto space-no-wrap overflow-auto"> */}
      {navItem.renderNavitems()}
    </nav>
  );
}
