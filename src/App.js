import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";
import { initializedApp} from "./redux/app-reducer";
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader';

class App extends React.Component{
  componentDidMount() {
    this.props.initializedApp();
  }
  render(){
    if(!this.props.initialized) return <Preloader/>
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path='/dialogs' render={()=> <DialogsContainer/>}/>
            <Route path='/profile/:userId?' render={()=> <ProfileContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/users' component={UsersContainer}/>
            <Route path='/login' component={Login}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
};
const mapStatetoProps = (state) => ({
  initialized: state.app.initialized
})
export default connect(mapStatetoProps, {initializedApp})(App);
