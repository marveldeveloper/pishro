import { Text } from "../../../../../components";
export default function Card({ img = "", id = 0 }) {
  return (
    <div className="Card w-100 d-flex flex-column flex-center text-center bg-white shadow rounded-5">
      <img height="90" src={img} alt={img} />
      <label className="text-primary h3 fw-bold my-2">
        <Text value={`landing.home.services.cards.${id}.title`} />
      </label>
      <p className="h5 text-secondary space-pre-wrap">
        <Text value={`landing.home.services.cards.${id}.text`} />
      </p>
    </div>
  );
}
