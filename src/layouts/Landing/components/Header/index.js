import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logos/logo-text.svg";
import { Text } from "../../../../components";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./index.scss";
export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Container
      as="header"
      className="Header d-flex align-items-center position-relative"
    >
      <i
        onClick={() => setShowSidebar(true)}
        className="d-block d-lg-none fs-1 cursor-pointer bi bi-list"
      />
      <Sidebar show={showSidebar} setShow={setShowSidebar} />
      <Link to="/" className="d-none d-lg-block">
        <img height="50" src={logo} alt="logo" />
      </Link>
      <Navbar />
      <Link
        to="/login"
        className="btn btn-violet px-4 space-no-wrap me-auto me-lg-0"
      >
        <Text value="landing.components.header.login-or-register" />
      </Link>
    </Container>
  );
}
