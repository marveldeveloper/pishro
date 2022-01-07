import { Text } from "../../../../../components";
export default function Card({ img = "", id = 0 }) {
  return (
    <div className="Card position-relative w-100 d-flex flex-column flex-center text-end bg-white shadow rounded-5">
      <img className="w-100 mb-2 object-fit-cover rounded" height='225' src={img} alt={img} />
      <span className='date position-absolute shadow px-3 py-1 bg-primary text-dark fs-4 fw-bold'>
        <Text
          value={`landing.home.news-and-articles-section.cards.${id}.date`}
        />
      </span>
      <label className="h5 px-4 text-dark fw-bold my-2 w-100">
        <Text
          value={`landing.home.news-and-articles-section.cards.${id}.title`}
        />
      </label>
      <p className="h6 px-4 text-secondary space-pre-wrap">
        <Text
          value={`landing.home.news-and-articles-section.cards.${id}.text`}
        />
      </p>
      <button className="btn px-4 mt-auto ms-auto mb-2 text-violet fs-5">
        <Text
          value={`landing.home.news-and-articles-section.cards.${id}.more`}
        />
        <i className="bi bi-arrow-left" />
      </button>
    </div>
  );
}
