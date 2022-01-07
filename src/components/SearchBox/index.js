import searchIcon from "../../assets/icons/search.svg";
import { useTranslation } from "react-i18next";
import { i18n } from "../../boot";

import "./index.scss";
export default function SearchBox({ label = "components.search-box" }) {
  const { t } = useTranslation("", { i18n });
  const placeholder = t(label);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submit}
      className="SearchBox w-100 d-flex flex-center border border-gray rounded-3 px-2 gap-2"
    >
      <img
        width="25"
        className="cursor-pointer"
        src={searchIcon}
        alt="search"
      />
      <input type="text" placeholder={placeholder} />
    </form>
  );
}
