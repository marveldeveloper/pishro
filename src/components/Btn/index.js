import { Button } from "react-bootstrap";
import { Text } from "..";
import "./index.scss";
export default function Btn({
  variant = "primary",
  outline = false,
  label = "",
  onClick = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  disabled = false,
  className = "",
  size = "md",
  type = "button",
  //   loading = false,
  children = null,
}) {
  const showVariant = () => {
    if (outline) {
      return `outline-${variant}`;
    }
    return variant;
  };
  return (
    <Button
      size={size}
      variant={showVariant()}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={`Btn ${className}`}
      type={type}
    >
      <Text value={label} />
      {children}
    </Button>
  );
}
