import React from "react";
import "./styles/App.css";
import Postcard from "./pages/Postcard.jsx";
import PostcardReverse from "./pages/PostcardReverse.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/404.jsx";
import ToolBar from "./components/UI/ToolBar";
/* import SideDrawer from "./components/UI/sidemenu/SideDrawer"; */
import BackDrop from "./components/UI/backdrop/BackDrop";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <ToolBar drawerToggleClickHandler={this.drawerToggleClickHandler} />
            {backdrop}
            <Switch>
              <Route exact path="/" component={Postcard} />
              <Route exact path="/about" component={About} />
              <Route exact path="/updates-first" component={PostcardReverse} />
              <Route exact path="/404" component={ErrorPage} />
              <Redirect to="/404" />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
