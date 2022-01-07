import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Text } from "..";
import "./index.scss";
export default function Select({
  label = "",
  items = [],
  value = "",
  itemLabel = "name",
  itemValue = "id",
  onSelect = () => {},
  filter = false,
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Dropdown
      as="div"
      className="Select Input w-100"
      drop="down"
      onSelect={onSelect}
    >
      <label className="text-dark fw-bold mb-1 me-2">
        <Text value={label} />
      </label>
      <Dropdown.Toggle
        as="div"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`input-box px-3 cursor-pointer d-flex align-items-center transition rounded-4 border border-${
          isFocused ? "dark" : "light-gray"
        }`}
      >
        <input />
        <i className="bi bi-caret-down-fill d-flex flex-center text-secondary" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-100 text-end">
        {items.map((item, index) => (
          <Dropdown.Item key={index} eventKey={item[itemValue]}>
            {item[itemLabel]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
