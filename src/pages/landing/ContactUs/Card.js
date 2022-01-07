import { Text } from "../../../components";

export default function Card({ img = "", label = "", text = "" }) {
  return (
    <div className="Card d-flex flex-column align-items-center justify-content-between text-center gap-3 text-primary w-100 border border-primary py-3 rounded-1">
      <img className="h-50 mw-100" src={img} alt={label} />
      <span className="fw-bold">
        <Text value={label} />
      </span>
      <span className="text-dark-blue mb-3">
        <Text value={text} />
      </span>
    </div>
  );
}
