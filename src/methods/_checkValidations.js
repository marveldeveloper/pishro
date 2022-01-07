import { i18n } from "../boot";
export default function checkValidations({ formControls = [], data = {} }) {
  for (let i = 0; i < formControls.length; i++) {
    const formControl = formControls[i];
    const value = data[formControl.state] ?? "";
    const label = i18n.t(formControl.label);
    const rules = formControl.rules ?? [];
    const checkRules = rules.every((rule) => rule({ value, label }));
    if (!checkRules) {
      return false;
    }
  }
  return true;
}
