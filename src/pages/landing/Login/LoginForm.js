import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, Form, Text, Btn } from "../../../components";
import { clientGraphQL, gql } from "../../../boot";
import { checkValidations, setToken } from "../../../methods";
import _loginFormControls from "./_loginFormControls";

export default function LoginForm({ setPage = () => {} }) {
  const history = useHistory();
  const [data, setData] = useState({});
  const login = () => {
    const check = checkValidations({ formControls: _loginFormControls, data });
    if (check) {
      clientGraphQL
        .query({
          query: gql`
        query{
          login(phone:"${data["phone"]}",password:"${data["password"]}"){
            status,
            message,
            token
          }}`,
        })
        .then(({ data }) => {
          setToken(data.login.token);
          history.push("/dashboard/buy-crypto-currency");
        })
        .catch(() => {});
    }
  };
  return (
    <Form className="LoginForm bg-white row px-5 py-4 rounded-10 gap-3">
      <h4 className="h4 text-center text-violet fw-bold">
        <Text value="landing.login.login-form.title" />
      </h4>
      {_loginFormControls.map((item, index) => (
        <Input
          key={index}
          label={item.label}
          value={data[item.state]}
          type={item.type}
          onInput={(value) =>
            setData((prev) => ({ ...prev, [item.state]: value }))
          }
        />
      ))}
      <Link to="/forget-password" className="text-start btn-link text-dark">
        ‌<Text value="landing.login.login-form.forget-password" />
      </Link>
      <div>
        <Btn
          className="w-100"
          label="landing.login.login-form.login"
          onClick={login}
        />
      </div>
      <p className="mb-0 mt-3 text-center">
        <Text value="landing.login.login-form.not-have-account" />
        <span
          className="me-3 text-decoration-underline cursor-pointer"
          onClick={() => setPage("register")}
        >
          <Text value="landing.login.login-form.register" />
        </span>
      </p>
    </Form>
  );
}
