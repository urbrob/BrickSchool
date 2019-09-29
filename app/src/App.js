import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NotFound from "./views/404";
import Home from "./views/Home";
import SearchResults from "./views/SearchResults";
import SchoolDetails from "./components/SchoolDetails/SchoolDetails";
import QuizComponent from "./views/QuizComponent";


export const client = new ApolloClient({
  uri: "http://brickschool.mkubik.ovh:8000/graphql",
  opts: {
    mode: "no-cors"
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/records" component={SearchResults} />
          <Route exact path="/quiz" component={QuizComponent} />
          <Route exact path="/detail/:schoolId" component={SchoolDetails} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
