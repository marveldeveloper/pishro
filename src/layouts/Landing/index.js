import { Route, Switch } from "react-router";
import { ContactUs, Home, Login } from "../../pages/landing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.scss";
export default function Landing() {
  return (
    <div className="Landing">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/contact-us" component={ContactUs} exact />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
