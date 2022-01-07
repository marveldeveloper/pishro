import { Text } from "..";
import "./index.scss";
export default function Checkbox({
  label = "",
  checked = false,
  onInput = () => {},
  variant = "primary",
  outline = false,
  className='',
  children,
}) {
  const showVariant = () => {
    if (!checked) return "bg-white";
    if (outline) return `btn-outline-${variant}`;
    return `btn-${variant}`;
  };
  return (
    <div className={`Checkbox w-fit d-flex align-items-center position-relative text-dark ${className}`}>
      <input
        className="position-absolute w-100 h-100 cursor-pointer opacity-0"
        type="checkbox"
        onChange={({ target }) => onInput(target.checked)}
        checked={checked}
      />
      <div
        className={`value d-flex flex-center rounded-3 ${showVariant()} border border-${variant} pt-1 ms-2`}
      >
        {checked && <i className="bi bi-check-lg fs-6" />}
      </div>
      <div>
        <Text value={label} />
        {children}
      </div>
    </div>
  );
}
