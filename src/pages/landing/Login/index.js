import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DownloadSection } from "../../../components";
import bgColorImage from "../../../assets/images/login/bg login.png";
import bgExchangeImage from "../../../assets/images/login/people-exchanging-money.svg";
import twoCamaGoldIcon from "../../../assets/icons/two-cama-gold.svg";
import checkIcon from "../../../assets/icons/circle check green.svg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./index.scss";
export default function Login() {
  const [page, setPage] = useState("login");
  return (
    <div className="Login">
      <div className="main-section position-relative mb-5 py-5">
        <img
          className="w-100 h-100 object-fit-cover position-absolute"
          src={bgColorImage}
          alt="bgColorImage"
        />
        <img
          className="w-100 h-100 object-fit-cover position-absolute opacity-3"
          src={bgExchangeImage}
          alt="bgExchangeImage"
        />
        <Container className="position-relative">
          <Row className="justify-content-between">
            <Col xs="12" md="6" lg="4">
              {page === "login" && <LoginForm setPage={setPage} />}
              {page === "register" && <RegisterForm setPage={setPage} />}
            </Col>
            <Col xs="12" md="6" lg="auto">
              <div
                className="text-box position-relative d-flex flex-column gap-3 mt-3 font-en text-white fs-5"
                dir="ltr"
              >
                <img
                  width="60"
                  className="ms-2"
                  src={twoCamaGoldIcon}
                  alt="twoCamaGoldIcon"
                />
                <p className="mb-0 lh-lg space-normal space-lg-pre-wrap">
                  {`“If something has to be designed and \ninvented, and you have to figure out how to \nensure that the value of the thing you create \nis greater than the cost of the inputs, then \nthat is probably my core skill.”`}
                </p>
                <h4 className="fw-bold">
                  Elon Mus
                  <img
                    width="15"
                    className="ms-2"
                    src={checkIcon}
                    alt="checkIcon"
                  />
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <DownloadSection />
    </div>
  );
}
