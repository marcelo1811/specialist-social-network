import { Text } from "@chakra-ui/layout";
import { LoginPage } from "pages/LoginPage";
import { Route, Switch } from "react-router";

export function AuthRoutes() {
  return (
    <Switch>
      <Route path='/'>
        <LoginPage />
      </Route>
    </Switch>
  )
}