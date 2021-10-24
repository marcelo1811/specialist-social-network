import { Text } from "@chakra-ui/layout";
import { routes } from "constants/routes";
import { DefaultLayout } from "layouts/DefaultLayout";
import HomePage from "pages/HomePage";
import NewPostPage from "pages/posts/NewPostPage";
import { Route, Switch } from "react-router";

export function AppRoutes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route path={routes.root} exact>
          <HomePage />
        </Route>
        <Route path={routes.newPost} exact>
          <NewPostPage />
        </Route>
      </DefaultLayout>  
    </Switch>  
  )
}