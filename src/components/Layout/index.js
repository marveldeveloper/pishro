import { useDispatch, useSelector } from "react-redux";
import { Direction, Text } from "..";
import "./index.scss";
function Layout({ className = "", children }) {
  return <div className={`Layout w-100 ${className}`}>{children}</div>;
}

function LayoutHeader({ title = "", direction = [], children = "" }) {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);
  const setShowSidebar = (data) => {
    dispatch({ type: "SET_SHOW_SIDEBAR", data });
  };
  return (
    <div className="LayoutHeader rounded-5 bg-white px-3 py-2 mb-4 shadow-sm">
      <div className="d-flex flex-center gap-2 mb-2">
        <h4 className="h4 m-0 fw-bold title">
          <i
            className="bi bi-list cursor-pointer d-block d-lg-none"
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          />
          <Text value={title} />
        </h4>
        <div className="children">{children}</div>
      </div>
      <Direction value={direction} />
    </div>
  );
}
function LayoutBody({ className = "", children }) {
  return (
    <div
      className={`LayoutBody bg-white rounded-5 py-3 px-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;
export default Layout;
