import { isValidations } from "../../../methods";
const _registerFormControls = [
  {
    label: "landing.login.register-form.inputs.0.label",
    state: "phone",
    rules: [isValidations.mobile],
    type: "number",
  },
  {
    label: "landing.login.register-form.inputs.1.label",
    state: "code",
    rules: [isValidations.checkLen],
    type: "number",
  },
  {
    label: "landing.login.register-form.inputs.2.label",
    state: "name",
    rules: [isValidations.checkLen],
    type: "text",
  },
  {
    label: "landing.login.register-form.inputs.3.label",
    state: "email",
    rules: [isValidations.email],
    type: "email",
  },
  {
    label: "landing.login.register-form.inputs.4.label",
    state: "password",
    rules: [isValidations.password],
    type: "password",
  },
];
export default _registerFormControls;
