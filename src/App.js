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

const App = (props) => {
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
};

export default App;
