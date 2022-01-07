import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Text } from "../../../../components";
import logo from "../../../../assets/logos/logo-text-light.svg";
import profile from "../../../../assets/icons/profile.svg";
import logout from "../../../../assets/icons/logout.svg";
import _navItem from "../../_navItem";
import "./index.scss";
export default function Sidebar() {
  const sidebar = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);
  const setShowSidebar = (data) => {
    dispatch({ type: "SET_SHOW_SIDEBAR", data });
  };
  const handler = useCallback((e) => {
    if (sidebar.current && !sidebar.current.contains(e.target)) {
      window.innerWidth <= 992 && setShowSidebar(false);
    }
  }, []);
  useEffect(() => {
    if (showSidebar) {
      window.addEventListener("click", handler);
    } else {
      window.removeEventListener("click", handler);
    }
    sidebar.current.style.width = showSidebar ? "225px" : "0";
  }, [showSidebar]);
  useEffect(() => {
    window.innerWidth <= 992 && setShowSidebar(false);
  }, [location.pathname]);
  return (
    <div
      ref={sidebar}
      className="Sidebar shadow-sm h-100 fw-bold rounded-10 text-light space-no-wrap transition py-2"
    >
      <div
        className="content h-100 d-flex flex-column pe-2"
        style={{ width: "225px" }}
      >
        <img className="w-100 d-block ps-2" src={logo} alt="logo" />
        <div className="profile d-flex align-items-center gap-2 rounded-10 ms-2 my-2 py-1 px-2">
          <img
            width="45"
            height="45"
            className="rounded-circle object-fit-cover"
            src={profile}
            alt="profile"
          />
          امین دسومی
        </div>
        {_navItem.render()}
        <button
          className="d-flex all-none align-items-center text-light gap-2 mt-auto fw-bold"
          style={{ padding: "0 1.25rem" }}
        >
          <img width="25" src={logout} alt="logout" />
          <Text value="dashboard.components.slider-items.8.label" />
        </button>
      </div>
    </div>
  );
}
