import React, { useState } from "react";
import { useHistory } from "react-router";
import { Input, Form, Text, Btn } from "../../../components";
import { clientGraphQL, gql } from "../../../boot";
import { checkValidations, notification, setToken } from "../../../methods";
import _registerFormControls from "./_registerFormControls";

export default function RegisterForm({ setPage = () => {} }) {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const sendVerifyCode = () => {
    const check = checkValidations({
      formControls: _registerFormControls.slice(0, 1),
      data,
    });
    if (check) {
      clientGraphQL
        .query({
          query: gql`
            query {VerifyRegister(phone: "${data["phone"]}") {
                status
                message
            }}`,
        })
        .then(({ data }) => {
          notification({ text: data.VerifyRegister.message, type: "success" });
          setStep((prev) => prev + 1);
        })
        .catch(() => {});
    }
  };
  const register = () => {
    const check = checkValidations({
      formControls: _registerFormControls,
      data,
    });
    if (check) {
      clientGraphQL
        .mutate({
          mutation: gql`
          mutation {
              register(
                code: "${data["code"]}"
                phone: "${data["phone"]}"
                password: "${data["password"]}"
                name: "${data["name"]}"
                email: "${data["email"]}"
              ) {
                status
                message
                token
              }}`,
        })
        .then(({ data }) => {
          setToken(data.register.token);
          notification({ text: data.register.message, type: "success" });
          history.push("/dashboard/buy-crypto-currency");
        })
        .catch(() => {});
    }
  };
  return (
    <Form className="RegisterForm bg-white row px-5 py-4 rounded-10 gap-3">
      <h4 className="h4 text-center text-violet fw-bold">
        <Text value="landing.login.register-form.title" />
      </h4>
      {step === 0 &&
        _registerFormControls
          .slice(0, 1)
          .map((item, index) => (
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
      {step === 1 &&
        _registerFormControls
          .slice(1)
          .map((item, index) => (
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
      <div>
        {step === 0 && (
          <Btn
            className="w-100"
            label="landing.login.register-form.send-sms"
            onClick={sendVerifyCode}
          />
        )}
        {step === 1 && (
          <Btn
            className="w-100"
            label="landing.login.register-form.register"
            onClick={register}
          />
        )}
      </div>
      <p className="mb-0 mt-3 text-center">
        <Text value="landing.login.register-form.have-account" />
        <span
          className="me-3 text-decoration-underline cursor-pointer"
          onClick={() => setPage("login")}
        >
          <Text value="landing.login.register-form.login" />
        </span>
      </p>
    </Form>
  );
}
