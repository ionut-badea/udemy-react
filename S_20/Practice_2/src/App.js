import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Quotes from "./pages/quotes";
import AddQuote from "./pages/quotes/add";
import Quote from "./pages/quotes/id";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route exact path="/quotes/add">
          <AddQuote />
        </Route>
        <Route path="/quotes/:id">
          <Quote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
