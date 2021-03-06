import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Navi from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CategoryList from './components/CategoryList';
import SingleCategory from './pages/SingleCategory';
import OrderHistory from './pages/OrderHistory';
import { StoreProvider } from "./utils/GlobalState";

import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Header />
            <Navi />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/categories" component={CategoryList} />
              <Route exact path="/categories/:id" component={SingleCategory} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;