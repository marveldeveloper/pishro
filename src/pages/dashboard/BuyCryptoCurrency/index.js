import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CompleteInformation, Rates, Bill } from "./components";
import { Layout, SearchBox } from "../../../components";
import Context from "./_context";
import "./index.scss";

export default function BuyCryptoCurrency() {
  const [page, setPage] = useState("Rates");
  return (
    <Layout>
      <Layout.Header
        title="dashboard.buy-crypto-currency.header.title"
        direction={[
          "dashboard.buy-crypto-currency.header.direction.0",
          "dashboard.buy-crypto-currency.header.direction.1",
          "dashboard.buy-crypto-currency.header.direction.2",
        ]}
      >
        <Row>
          <Col xs="12" md="6" className="me-auto">
            <SearchBox />
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Body className="BuyCryptoCurrency position-relative">
        <Context.Provider value={[page, setPage]}>
          {page === "Rates" && <Rates />}
          {page === "CompleteInformation" && <CompleteInformation />}
          {page === "Bill" && <Bill />}
        </Context.Provider>
      </Layout.Body>
    </Layout>
  );
}
