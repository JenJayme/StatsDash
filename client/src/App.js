import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
// import './App.css';
import Navigation from "./components/Navigation";
import NewPlayer from "./pages/NewPlayer/NewPlayer"
import NewTournament from "./pages/NewTournament"
import Start from "./components/Start"
import {AuthProvider} from "./Auth";
import Friends from "./pages/addFriends"
import PrivateRoute from "./PrivateRoute";
import "./App.scss";
import Splash from "./pages/Splash";
import MyHome from "./pages/MyHome";
import NewChoose from './pages/NewChoose';
import Dashboard from './pages/TournamentDash';
import SampleDash from './pages/jensample';
import Chart from "./pages/Chart";
import { blueGrey, deepOrange, blue, red } from '@material-ui/core/colors';
import SendEmailInvite from './pages/CreateNewTournament/SendEmailInvite';
import addFriends from './pages/addFriends';
import About from './pages/About';

//These colors can be changed and will affect colors on any Material UI components. See Jen for details.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: red[500],
    },
    type: 'light'
  },
});


function App() {
  return (
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
          {/* <Navigation /> */}
          <Switch>

              {/* <Route exact path="/login" component={Splash}/> */}
              <Route exact path="/" component={Splash}/>
              <PrivateRoute exact path="/myhome" component={MyHome}/>
              <Route exact path="/new/player" component={NewPlayer}/>
              <Route exact path="/newplayer" component={NewPlayer}/>
              <Route exact path="/new/tournament" component={NewTournament}/>
              <Route exact path="/newtournament" component={NewTournament}/>
              <Route exact path="/new" component={NewChoose}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/new/friends" component={Friends}/>

              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/tournament/:tid/dashboard/:userid" component={Dashboard}/>
              <Route exact path="/sampledash" component={SampleDash}/>
              <Route exact path="/chart" component={Chart} />
              <Route exact path="/emailinvite" component={SendEmailInvite} />
              <Route exact path="/new/friends" component={addFriends} />

            </Switch>
      
        
          </Router>
          
        </div>
      </MuiThemeProvider>
    </AuthProvider>
   );
 }

export default App;
