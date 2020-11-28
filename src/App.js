import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News";
import Profile from "./components/Profile/Profile";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={()=> <DialogsContainer 
          // store = {props.store}
          // state={props.state.messagesPage} dispatch={props.dispatch}
          />}/>
          <Route path='/profile/:userId?' render={()=> <ProfileContainer
          // store = {props.store}
          // profilePage={props.state.profilePage} dispatch={props.dispatch}
          />}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/users' component={UsersContainer}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
