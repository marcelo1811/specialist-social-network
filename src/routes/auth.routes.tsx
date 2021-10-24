import { Text } from "@chakra-ui/layout";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import { Route, Switch } from "react-router";

export function AuthRoutes() {
  return (
    <Switch>
      <Route path='/signup'>
        <SignUpPage />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
    </Switch>
  )
}