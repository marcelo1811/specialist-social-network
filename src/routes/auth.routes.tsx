import { Text } from "@chakra-ui/layout";
import SignUpPage from "pages/SignUpPage";
import { Route, Switch } from "react-router";

export function AuthRoutes() {
  return (
    <Switch>
      <Route path='/'>
        <SignUpPage />
      </Route>
    </Switch>
  )
}