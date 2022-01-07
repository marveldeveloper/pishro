import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import { Text } from "../../../../../components";
import _services from "./_services";
export default function Service() {
  return (
    <Container className="Service">
      <h3 className="h3 text-center fw-bold mb-4">
        <Text value="landing.home.services.title" />
      </h3>
      <Row className='gy-3'>
        {_services.map((service) => (
          <Col key={service.id} xs="12" md="6" lg="4" className='px-3'>
            <Card {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
