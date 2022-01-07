import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { Loading, Notifications } from "./components";
import { Dashboard, Landing } from "./layouts";
import { Error404 } from "./pages/Error";
import { clearCaches } from "./methods";

export default function App() {
  const loading = useSelector((state) => state.loading.length > 0);
  const landingPaths = ["/", "/login", "/contact-us"];
  const dashboardPaths = [
    "/dashboard",
    "/dashboard/buy-crypto-currency",
  ];
  useEffect(clearCaches, []);
  return (
    <React.Fragment>
      {loading && <Loading />}
      <Notifications />
      <Switch>
        <Route path={landingPaths} component={Landing} exact />
        <Route path={dashboardPaths} component={Dashboard} exact />
        <Route path="*" component={Error404} />
      </Switch>
    </React.Fragment>
  );
}
