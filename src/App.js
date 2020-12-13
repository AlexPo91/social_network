import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";
import { initializedApp } from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import Preloader from "./components/common/Preloader";
import { compose } from "redux";
import store from "./redux/redux-store";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => ({
  initialized: state.app.initialized,
});
const AppContainer = compose(
  withRouter,
  connect(mapStatetoProps, { initializedApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default MainApp;
