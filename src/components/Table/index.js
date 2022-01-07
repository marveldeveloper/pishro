import BTable from "react-bootstrap/Table";
import "./index.scss";
export default function Table({
  striped = false,
  bordered = false,
  borderless = true,
  hover = true,
  className = "",
  children,
}) {
  return (
    <div className="Table overflow-auto">
      <BTable
        striped={striped}
        bordered={bordered}
        borderless={borderless}
        hover={hover}
        className={`${className} text-center space-no-wrap`}
      >
        {children}
      </BTable>
    </div>
  );
}
