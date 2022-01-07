import { useState } from "react";
import { Text } from "..";
import "./index.scss";
export default function Input({
  label = "",
  type = "text",
  value = null,
  onInput = () => {},
  append = null,
  className = "",
  // state = "",
  // rules = [
  //   (val = "") => val.length > 5 || "ورودی معتبر نیست.",
  //   (val = "") => val.length > 7 || "ورودی معتبر نیست 2222.",
  // ],
}) {
  // const nulls = [undefined, null];
  //   const [message, setMessage] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const showValue = value ?? "";
  const handleChange = ({ target }) => {
    onInput(String(target.value));
  };
  return (
    <div className={`Input w-100 ${className}`}>
      <label className="text-dark fw-bold mb-1 me-2">
        <Text value={label} />
      </label>
      <div
        className={`input-box d-flex transition rounded-4 border border-${
          isFocused ? "dark" : "light-gray"
        }`}
      >
        <input
          // name={state}
          type={type}
          value={showValue}
          onInput={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="px-3 bg-white"
          //   rules={rules}
        />
        {append}
      </div>
      {/* <div className="message d-flex flex-wrap px-2 pt-1 text-danger">
        {rules.map((rule, index) => (
          <div key={index}>{rule(value ?? "")}</div>
        ))}
      </div> */}
      {/* <p
        className="message w-100 mb-0 text-danger"
        style={{ visibility: message ? "visible" : "hidden" }}
      >
        {message ?? "error"}
      </p> */}
    </div>
  );
}
