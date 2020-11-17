import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={()=> <Dialogs state={props.state.messagesPage}/>}/>
          <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePost ={props.updatePost}/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
