import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import navItem from "../../_navItem";
import logo from "../../../../assets/logos/logo-text.svg";
import "./index.scss";
export default function Sidebar({ show = true, setShow = () => {} }) {
  const sidebar = useRef();
  const location = useLocation();
  const handleShow = () => {
    if (show) {
      sidebar.current.classList.remove("d-none");
      setTimeout(() => {
        sidebar.current.classList.add("active");
      }, 15);
    } else {
      sidebar.current.classList.remove("active");
      setTimeout(() => {
        sidebar.current.classList.add("d-none");
      }, 250);
    }
  };

  useEffect(handleShow, [show]);
  useEffect(() => setShow(false), [location.pathname]);
  return (
    <div
      ref={sidebar}
      className="Sidebar d-lg-none position-fixed w-100 overflow-hidden transition"
    >
      <button
        onClick={() => setShow(false)}
        className="hide-btn all-none position-absolute h-100 w-100 transition"
      ></button>
      <div className="menu py-4 position-relative d-flex flex-column h-100 bg-white transition space-no-wrap overflow-auto">
        <Link to="/" className="d-block w-fit mx-auto px-2 mb-4">
          <img width='175' src={logo} alt="logo" />
        </Link>
        {navItem.renderNavitems()}
      </div>
    </div>
  );
}
