import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import Sidebar from "./components/Sidebar";
import { BuyCryptoCurrency } from "../../pages/dashboard";
import "./index.scss";
export default function Dashboard() {
  return (
    <Container className="Dashboard d-flex pt-3 pb-5 gap-0 gap-lg-5">
      <div className="sidebar-section w-0 w-lg-auto overflow-visible">
        <Sidebar />
      </div>
      <main>
        <Switch>
          <Route
            path={[
              "/dashboard/buy-crypto-currency",
              "/dashboard/buy-crypto-currency/:id",
            ]}
            component={BuyCryptoCurrency}
            exact
          />
        </Switch>
      </main>
    </Container>
  );
}
