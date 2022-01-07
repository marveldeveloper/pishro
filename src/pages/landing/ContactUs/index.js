import { Container, Row, Col } from "react-bootstrap";
import { Direction, DownloadSection, Text } from "../../../components";
// import mapImg from "../../../assets/images/map.svg";
import Card from "./Card";
import "./index.scss";
import _cardItems from "./_cardItems";
export default function ContactUs() {
  return (
    <Container className="ContactUs">
      <Direction
        value={[
          "landing.contact-us.direction.0",
          "landing.contact-us.direction.1",
        ]}
      />
      <Row className="cards-section mt-4 gap-4 gap-md-0">
        {_cardItems.map((item, index) => (
          <Col key={index} xs="12" md="6" lg="3" className="px-4">
            <Card {...item} />
          </Col>
        ))}
      </Row>
      <Row className="location-section flex-center space-pre-wrap text-dark-blue my-5">
        <Col xs="12" md="6" lg="4">
          <p className="mb-4">
            <b>
              <Text value="landing.contact-us.location-section.address.title" />
              :
            </b>
            <br />
            <Text value="landing.contact-us.location-section.address.text" />
          </p>
          <p>
            <b>
              <Text value="landing.contact-us.location-section.phone.title" />:
            </b>
            <br />
            <span dir="ltr">
              <Text value="landing.contact-us.location-section.phone.text.0" />
            </span>
            <br />
            <span dir="ltr">
              <Text value="landing.contact-us.location-section.phone.text.1" />
            </span>
          </p>
        </Col>
        <Col xs="12" md="6" lg="8">
          <iframe
            title="map"
            className="w-100 rounded-5 border shadow-sm bg-white"
            height="300"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </Col>
      </Row>
      <DownloadSection />
    </Container>
  );
}
