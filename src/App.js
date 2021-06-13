import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import HeaderComponent from './Components/Header/HeaderComponent';
import LoginContainer from './Components/Login/LoginContainer';
import Navbar from './Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import UsersContainer from './Components/Users/UsersContainer';



function App(props) {
  return (
      <div className="App_wrapper">
        <HeaderComponent />
        <Navbar />
        <div className="App_content">
          <Route render = { () => <ProfileContainer />} path="/profile/:userId?"/>
          <Route render = { () => <DialogsContainer />} path ="/dialogs"/>
          <Route render = { () => <UsersContainer /> } path = "/users" />
          <Route render = { () => <LoginContainer /> } path = "/login" />
        </div>
      </div>
  );
}

export default App;
