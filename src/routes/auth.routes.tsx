import { Text } from "@chakra-ui/layout";
import { routes } from "constants/routes";
import { DefaultLayout } from "layouts/DefaultLayout";
import LoginPage from "pages/auth/LoginPage";
import SignUpPage from "pages/auth/SignUpPage";
import { Redirect, Route, Switch } from "react-router";

export function AuthRoutes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route path={routes.root} exact>
          <Redirect to={routes.login} />
        </Route>
        <Route path={routes.signup} exact>
          <SignUpPage />
        </Route>
        <Route path={routes.login} exact>
          <LoginPage />
        </Route>
      </DefaultLayout>
    </Switch>
  )
}