import { useContext } from "react";
import { Link } from "react-router-dom";
import { Alert, Col, Row } from "react-bootstrap";
import {
  Text,
  Input,
  Select,
  Dropdown,
  Checkbox,
  Btn,
} from "../../../../components";
import btcIcon from "../../../../assets/icons/btc.svg";
import alertIcon from "../../../../assets/icons/error.png";
import Context from "../_context";
export default function CompleteInformation() {
  const [page, setPage] = useContext(Context);
  return (
    <div className="CompleteInformation">
      <button
        className="back-btn all-none text-violet fw-bold position-absolute d-flex gap-1"
        onClick={() => setPage("Rates")}
      >
        <Text value="components.back" />
        <i className="bi bi-arrow-left" />
      </button>
      <div className="d-flex flex-column flex-center gap-1 w-fit mx-auto font-en">
        <img
          width="50"
          height="50"
          className="rounded-circle object-fit-cover"
          src={btcIcon}
          alt="btcIcon"
        />
        <span className="fw-bold fs-5">Bitcoin (BTC)</span>
        <span className="fs-6 text-secondary">1,580,761,556 تومان</span>
      </div>
      <Step value="1" />
      <Row>
        <Col xs="12" lg="6">
          <Input
            label="dashboard.buy-crypto-currency.body.complete-information.step-1.0.label"
            append={
              <Dropdown
                variant="gray"
                className="rounded"
                label="بیتکوین(BTC)"
              />
            }
          />
        </Col>
        <Col xs="12" lg="6">
          <Input
            label="dashboard.buy-crypto-currency.body.complete-information.step-1.1.label"
            append={
              <Dropdown variant="gray" className="rounded" label="ریال (IRR)" />
            }
          />
        </Col>
      </Row>
      <Step value="2" />
      <Alert variant="info" className="px-2 py-2 mb-4">
        <div className="d-flex">
          <img
            width="22.5"
            height="22.5"
            className="ms-2"
            src={alertIcon}
            alt="alertIcon"
          />
          <Text value="dashboard.buy-crypto-currency.body.complete-information.step-2.alert.0" />
        </div>
      </Alert>
      <Row>
        <Col xs="12" lg="6">
          <Input label="dashboard.buy-crypto-currency.body.complete-information.step-2.0.label" />
        </Col>
        <Col xs="12" lg="6">
          <Input label="dashboard.buy-crypto-currency.body.complete-information.step-2.1.label" />
        </Col>
      </Row>
      <Step value="3" />
      <Alert variant="info" className="px-2 py-2 d-flex flex-column gap-1 mb-4">
        <div className="d-flex">
          <img
            width="22.5"
            height="22.5"
            className="ms-2"
            src={alertIcon}
            alt="alertIcon"
          />
          <Text value="dashboard.buy-crypto-currency.body.complete-information.step-3.alert.0" />
        </div>
        <div className="d-flex">
          <img
            width="22.5"
            height="22.5"
            className="ms-2"
            src={alertIcon}
            alt="alertIcon"
          />
          <Text value="dashboard.buy-crypto-currency.body.complete-information.step-3.alert.1" />
        </div>
        <div className="d-flex">
          <img
            width="22.5"
            height="22.5"
            className="ms-2"
            src={alertIcon}
            alt="alertIcon"
          />
          <Text value="dashboard.buy-crypto-currency.body.complete-information.step-3.alert.2" />
        </div>
      </Alert>
      <Row>
        <Col xs="12" lg="6">
          <Select label="dashboard.buy-crypto-currency.body.complete-information.step-3.0.label" />
        </Col>
        <Col xs="12" lg="6">
          <Select label="dashboard.buy-crypto-currency.body.complete-information.step-3.1.label" />
        </Col>
      </Row>
      <Row className="payment-box position-relative alert alert-primary border border-primary mt-5">
        <Col xs="6" className="d-flex flex-column align-items-center">
          <Checkbox variant="violet" className="my-auto">
            <p className="m-0 fw-bold">
              <Link to="#" className="text-violet text-decoration-underline">
                <Text value="dashboard.buy-crypto-currency.body.complete-information.payment.0.checkbox.0" />
              </Link>{" "}
              <Text value="dashboard.buy-crypto-currency.body.complete-information.payment.0.checkbox.1" />
            </p>
          </Checkbox>
          <Btn
            variant="violet"
            label="dashboard.buy-crypto-currency.body.complete-information.payment.0.button"
            className="w-100 fw-bold py-2"
            onClick={() => setPage("Bill")}
          />
        </Col>
        <div className="mid-line position-absolute w-0 border border-primary p-0" />
        <Col
          xs="6"
          className="d-flex flex-column align-items-center text-dark-blue"
        >
          <p className="fs-5 mb-2">
            <Text value="dashboard.buy-crypto-currency.body.complete-information.payment.1.price" />
          </p>
          <p className="fs-3 fw-bold mb-0">570 هزار تومان</p>
          <Input
            className="mt-auto"
            label="dashboard.buy-crypto-currency.body.complete-information.payment.1.discount.label"
            append={
              <Btn
                label="dashboard.buy-crypto-currency.body.complete-information.payment.1.discount.button"
                className="px-4"
              />
            }
          />
        </Col>
      </Row>
    </div>
  );
}
function Step({ value = "1" }) {
  return (
    <div className="Step d-flex flex-center text-primary font-en fs-4 position-relative my-3">
      <span className="rounded-circle bg-white border border-primary d-flex flex-center mx-auto position-relative">
        {value}
      </span>
    </div>
  );
}
