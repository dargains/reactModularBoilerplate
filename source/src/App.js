import React from 'react';
import Axios from "axios";
import api from "./api";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./containers/Home";
import Results from "./containers/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Error404 from "./containers/Error404";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: {},
      flights: {}
    };
  }
  componentWillMount() {
    this.getHotels();
    //this.getFlights();
  }
  getHotels() {
    var that = this;
    Axios.get(api.getHotels, {
      params: {
        q: "lisbon",
        lang: "EN",
        currency_code: "USD"
      },
      crossdomain: true
    })
    .then(function (response) {
      that.setState({hotels: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  getFlights() {
    var that = this;
    Axios({
      method: "post",
      url: api.getFlights,
      data: {
        "trips": [{
          "departure_code": "RGN",
          "arrival_code": "NYU",
          "outbound_date": "2017-12-04"
        }],
        "adults_count": 1,
        "user_country_code": "PT",
        "country_site_code": "pt"
      }
    })
    .then(function (response) {
      that.setState({flights: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <main>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/results" render={() => <Results />} />
            {/* <Route component={Error404} /> */}
          </Switch>
        </BrowserRouter>
        <Footer />
      </main>
    );
  }
}

export default App;
