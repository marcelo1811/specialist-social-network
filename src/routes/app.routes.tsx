import { Text } from "@chakra-ui/layout";
import HomePage from "pages/HomePage";
import { Route, Switch } from "react-router";

export function AppRoutes() {
  return (
    <Switch>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>  
  )
}