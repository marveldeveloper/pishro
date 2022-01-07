import { Trans, useTranslation } from "react-i18next";
import { i18n } from "../../boot";
export default function Text({ value = "" }) {
  const { t } = useTranslation("", { i18n });
  return <Trans t={t}>{value}</Trans>;
}
