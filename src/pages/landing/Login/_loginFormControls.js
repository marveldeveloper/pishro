import { isValidations } from "../../../methods";
const _loginFormControls = [
  {
    label: "landing.login.login-form.inputs.0.label",
    state: "phone",
    rules: [isValidations.mobile],
    type: "number",
  },
  {
    label: "landing.login.login-form.inputs.1.label",
    state: "password",
    rules: [isValidations.password],
    type: "password",
  },
];
export default _loginFormControls;
