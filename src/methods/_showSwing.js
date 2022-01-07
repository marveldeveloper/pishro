export default function showSwing(value = 0) {
  const descending = {
    color: "danger",
  };
  const ascending = {
    color: "success",
  };
  const constant = {
    color: "dark",
  };
  if (value < 0) {
    return { ...descending, value };
  } else if (value === 0) {
    return { ...constant, value };
  } else if (value > 0) {
    return { ...ascending, value };
  }
}
