import "./index.scss";
export default function Loading() {
  return (
    <div className="Loading position-fixed d-flex flex-center">
      {["violet", "dark", "primary"].map((item, index) => (
        <div
          key={index}
          className={`spinner position-absolute rounded-circle border border-${item}`}
        ></div>
      ))}
    </div>
  );
}
