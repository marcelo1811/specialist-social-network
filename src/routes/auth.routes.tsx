import { Text } from "@chakra-ui/layout";
import LoginPage from "pages/LoginPage";
import SignUpPage from "pages/SignUpPage";
import { Redirect, Route, Switch } from "react-router";

export function AuthRoutes() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='login' />
      </Route>
      <Route path='/signup' exact>
        <SignUpPage />
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
    </Switch>
  )
}