import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          {/* <Dialogs />
        <Profile /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
