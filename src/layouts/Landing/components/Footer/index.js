import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Btn } from "../../../../components";
import "./index.scss";
export default function Footer() {
  return (
    <Container as="footer" className="Footer">
      <Row className='gap-4 gap-md-0'>
        <Col
          xs="12"
          md="6"
          lg="3"
          className="d-flex flex-column gap-2 text-secondary"
        >
          <label className="h5 text-dark">خدمات پیشرو</label>
          <Link to="/">ویندوز سرور ترید</Link>
          <Link to="/">خدمات VIP مشتریان</Link>
          <Link to="/">خدمات باینانس</Link>
        </Col>
        <Col
          xs="12"
          md="6"
          lg="3"
          className="d-flex flex-column gap-2 text-secondary"
        >
          <label className="h5 text-dark">آخرین مقالات</label>
          <Link to="/">همه چیز درباره بیت‌کوین</Link>
          <Link to="/">اصلاحات معاملاتی در بازار فارکس</Link>
          <Link to="/">معرفی چند اصطلاح در فاکس</Link>
        </Col>
        <Col
          xs="12"
          md="6"
          lg="3"
          className="d-flex flex-column gap-2 text-secondary"
        >
          <label className="h5 text-dark">اطلاعات تماس</label>
          <Link to="/">
            <i className="bi bi-envelope-fill ms-2 fs-6" />
            info@marveltrade.org
          </Link>
          <Link to="/">
            <i className="bi bi-telephone-outbound-fill ms-2 fs-6" />
            021-28424778
          </Link>
          <Link to="/">
            <i className="bi bi-instagram ms-2 fs-6" />
            @Marvel_Tradee
          </Link>
        </Col>
        <Col
          xs="12"
          md="6"
          lg="3"
          className="d-flex flex-column gap-2 text-secondary"
        >
          <label className="h5 text-dark">شبکه‌های اجتماعی</label>
          <div className="d-flex flex-center w-fit fs-3 gap-3">
            <Link to="/">
              <i className="bi bi-telegram" />
            </Link>
            <Link to="/">
              <i className="bi bi-instagram" />
            </Link>
            <Link to="/">
              <i className="bi bi-facebook" />
            </Link>
            <Link to="/">
              <i className="bi bi-twitter" />
            </Link>
          </div>
          <form className="email-box d-flex flex-center w-100 mt-2">
            <input
              className="bg-light-gray rounded border-0 h-100 px-3"
              placeholder="ایمیل خود را وارد کنید"
            />
            <Btn
              type="submit"
              variant="violet"
              label="ارسال"
              className="px-3"
            />
          </form>
        </Col>
        <Col xs="12" className='h5 m-0 text-center w-100 py-3 mt-3 border-top border-secondary text-secondary'>تمامی حقوق سایت متعلق به مارول ترید می‌باشد.</Col>
      </Row>
    </Container>
  );
}
