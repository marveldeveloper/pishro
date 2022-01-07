import { Col, Container, Row } from "react-bootstrap";
import { Text } from "../../../../components";
import downloadAndroidImage from "../../../../assets/images/download android.svg";
import downloadAppStoreImage from "../../../../assets/images/download app store.svg";
import downloadGooglePlayImage from "../../../../assets/images/download google play.svg";
import mobileImage from "../../../../assets/images/mobile.png";
import arrowTopIcon from "../../../../assets/icons/arrow top.png";
import logo from "../../../../assets/logos/logo.svg";

export default function MainSection() {
  return (
    <Container className="MainSection">
      <Row className="flex-center">
        <Col xs="12" lg="6" className="d-flex flex-center">
          <div className="w-fit">
            <h1 className="h1 m-0 fw-bold space-pre-wrap lh-3 text-center text-lg-justify">
              <Text value="landing.home.main-section.title" />
            </h1>
            <div className="download-box mt-5 d-flex gap-3">
              <img src={downloadAppStoreImage} alt="دانلود از اپ استور" />
              <img src={downloadGooglePlayImage} alt="دانلود از گوگل پلی" />
              <img src={downloadAndroidImage} alt="دانلود مستقیم" />
            </div>
            <button className="all-none h4 d-flex flex-column flex-center text-secondary w-fit mx-auto mt-3">
              <img width='40' src={arrowTopIcon} alt='arrowTopIcon'/>
              <span>
                <Text value="landing.home.main-section.download-btn" />
              </span>
            </button>
          </div>
        </Col>
        <Col xs="12" lg="6" className="d-flex flex-center">
          <div className="position-relative w-100">
            <img
              className="w-100"
              src={mobileImage}
              alt="عکس موبایل"
            />
            <div className="auth-alert position-absolute px-3 py-2 rounded-5 backdrop-blur w-100 w-lg-auto">
              <div className="logo d-flex align-items-center mb-2">
                <img
                  className="bg-white p-1 rounded ms-2"
                  width="25"
                  src={logo}
                  alt="logo"
                />
                <span>
                  <Text value="landing.home.main-section.auth-alert.label" />
                </span>
              </div>
              <span className="time position-absolute text-secondary">
                2 <Text value="landing.home.main-section.auth-alert.date" />
              </span>
              <p className="mb-0">
                <Text value="landing.home.main-section.auth-alert.text-success" />
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
