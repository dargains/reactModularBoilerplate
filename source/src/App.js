import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Results from "./containers/Results";
import Pages from "./containers/Pages";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

import PagesNav from "./components/PagesNav";
import About from "./components/About";
import Terms from "./components/Terms";
import Help from "./components/Help";
import Cookies from "./components/Cookies";
import Partnerships from "./components/Partnerships";
import Privacy from "./components/Privacy";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang:"en"
    }
  }
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route render={() => <Header changeLang={lang => this.setState({lang})} lang={this.state.lang}/>} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Results" component={Results} />
              <Pages>
                  <PagesNav />
                  <article>
                    <Route exact path="/Pages/About" component={About}/>
                    <Route exact path="/Pages/Terms" component={Terms}/>
                    <Route exact path="/Pages/Help" component={Help}/>
                    <Route exact path="/Pages/Cookies" component={Cookies}/>
                    <Route exact path="/Pages/Privacy" component={Privacy}/>
                    <Route exact path="/Pages/Partnerships" component={Partnerships}/>
                  </article>
              </Pages>
              <Route component={Error404} />
            </Switch>
            <Route component={Footer} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
