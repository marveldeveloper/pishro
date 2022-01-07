import { Col, Container, Row } from "react-bootstrap";
import { Btn, Text } from "../../../../../components";
import _newsAndArticles from "./_newsAndArticles";
import Card from "./Card";

export default function NewsAndArticles() {
  return (
    <Container className="NewsAndArticles text-center">
      <h2 className="h2 position-relative">
        <Text value="landing.home.news-and-articles-section.title" />
      </h2>
      <h5 className="h5 text-secondary position-relative">
        <Text value="landing.home.news-and-articles-section.description" />
      </h5>
      <Row className="gap-3 gap-lg-0 flex-center">
        {_newsAndArticles.map((item) => (
          <Col key={item.id} xs="12" md="6" lg="4" className="px-3">
            <Card {...item} />
          </Col>
        ))}
      </Row>
      <Btn outline className="fs-5 mx-auto mt-5">
        <Text value="landing.home.news-and-articles-section.show-all-btn" />
        <i className="bi bi-arrow-left" />
      </Btn>
    </Container>
  );
}
