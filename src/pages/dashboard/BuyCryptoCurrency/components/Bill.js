import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Text } from "../../../../components";
import billSuccessIcon from "../../../../assets/icons/bill-success.svg";
import Context from "../_context";
export default function Bill() {
  const [page, setPage] = useContext(Context);
  return (
    <Row className="Bill overflow-hidden w-100">
      <button
        className="back-btn all-none text-violet fw-bold position-absolute d-none d-md-flex gap-1"
        onClick={() => setPage("CompleteInformation")}
      >
        <Text value="components.back" />
        <i className="bi bi-arrow-left" />
      </button>
      <Col
        xs="12"
        md="10"
        lg="7"
        className="alert alert-primary d-flex flex-column align-items-center mx-auto gap-4 text-center"
      >
        <img
          width="200"
          className="mw-100"
          src={billSuccessIcon}
          alt="billSuccessIcon"
        />
        <h4 className="h4 text-success space-pre-wrap fw-bold">
          <Text value="dashboard.buy-crypto-currency.body.bill.success.title" />
        </h4>
        <Row className="w-100 justify-content-center">
          <Col
            xs="12"
            md="10"
            lg="6"
            className="price-box d-flex align-items-center justify-content-between alert alert-success border-dashed px-4"
          >
            <span>
              <Text value="dashboard.buy-crypto-currency.body.bill.success.price-box" />
            </span>
            <span className="space-pre-wrap text-center">
              <b className="fs-5">300,000</b>
              {"\n"}
              تومان
            </span>
          </Col>
        </Row>
        <Row className="w-100 justify-content-center">
          <Col
            xs="12"
            md="10"
            lg="9"
            className="info-box d-flex justify-content-between alert bg-white px-3 py-1"
          >
            <Row className="fw-bold">
              {["امین دسومی", "0.02 BTC", "1400/01/09"].map((item, index) => (
                <React.Fragment key={index}>
                  <Col xs="6" className="text-end my-1">
                    <Text
                      value={`dashboard.buy-crypto-currency.body.bill.success.info-box.${index}`}
                    />
                    :
                  </Col>
                  <Col
                    xs="6"
                    className={`text-dark text-start my-1 ${
                      index >= 1 ? "font-en dir-ltr" : ""
                    }`}
                  >
                    {item}
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </Col>
        </Row>
        <div className="mid-line position-relative w-100 border border-primary border-dashed p-0 my-2" />
        <div className="support-section text-secondary space-pre-wrap lh-sm">
          <p className="mb-0 lh-lg fs-6">
            <Text value="dashboard.buy-crypto-currency.body.bill.support-section" />
          </p>
        </div>
      </Col>
    </Row>
  );
}
