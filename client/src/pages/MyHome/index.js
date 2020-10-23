//MY HOME PAGE

import React, { Component, useContext,useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Navigation from "../../components/Navigation";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from "../../Auth";
import API from "../../utils/API";
import NewChoose from "../NewChoose";
import TourneySeeds from "../../utils/tourneySeeds";
import Smoke from "./homeVidBanner";
import Banner from "./homeBanner";
import Styles from './style.css';
import ReactPlayer from 'react-player'
import { blueGrey } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
  },
  table: {
    minWidth: 450,
    tableLayout: 'fixed',
    float: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '2%',
    padding: '.5em',
  },
  header: {
    marginTop: '1em',
    color: 'white',
  },
  joinTournDiv: {
    display: 'block',
    float: 'none',
    marginRight: '30%',
    marginLeft: '25%',
  },
  subheader: {
    color: blueGrey[500],
    marginTop: '1em',
    marginBottom: '.5em',
    marginLeft: '20%',
    float: 'left',
    display: 'inline-block',
  },
  button: {
    marginTop: '.6em',
    marginLeft: '1em',
    display: 'inline-block',
    float: 'right',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  tableDiv: {
    width: '80%',
    maxHeight: '20em',
    overflowX: 'hidden',
    overflowY: 'auto',
    display: 'block',
    float: 'none',
    size: 'contain'
  },
  rowHead: {
    backgroundColor: '#2e5170',
    color: '#7a8c9d',
  },
  myFriendsDiv: {
    // width: 'fit-content',
    maxHeight: '20em',
    // overflowX: 'hidden',
    // overflowY: 'auto',
    display: 'block',
    float: 'none',
    align: 'center',
    marginRight: '14%',
    marginLeft: '24%',
  },
});


function MyHome() {
  const { currentUser } = useContext(AuthContext);
  const [state, setState] = useState([])
  const [friends, setFriends] = useState([])
  const classes = useStyles();
  
  useEffect(()=>{
    console.log(state)
    if(state.length===0){
      getTable()
    }
  })
  function getTable(){
    API.getTournaments(currentUser.userId,(results)=>{
<<<<<<< HEAD
      console.log(results.data.Tournaments);
=======

>>>>>>> 330d482aa54a641c21b2ccd74550e450265314cd
      console.log("Tournament Data:", results.data.Tournaments);
      setFriends(results.data.Friends);
      if(results.data.Tournaments.length===0){
        setState(["You have no Tournaments"]);
      }
      if(results.data.Tournaments.length>0){
        setState(results.data.Tournaments);
      }
      console.log("friends",friends);
      return results.data.Tournaments
    })
  }
  function joinTournament(event){
    event.preventDefault()
    const {tournamentJoiner} = event.target.elements;
    console.log(tournamentJoiner.value);
    var user = currentUser;
    user.joinCode = tournamentJoiner.value
    API.joinTournament(user,(results)=>{
      window.location.reload(false);
    })
    

  }
  console.log(currentUser)
// Working on getting real data from MySQL but getting error uid not defined

  {/* ====================RETURN SECTION========================= */}


  return (
    <Box>
      <Smoke className={classes.video} />
      <Navigation />
      {/* <Banner /> */}
      <Grid container spacing={3}
                direction="row"
                justify="center"
                alignItems="center"
                className="myHomeCont">


  {/* ==================GAMER GREETING================== */}

      <Grid item xs={10}>

          <h3 className={classes.header}>Choose Your Battle, {currentUser.gamerTag}</h3>

      </Grid>


  {/* ==================JOIN TOURNAMENT SECTION================== */}
    
      <Grid item xs={10} className={classes.joinTournDiv}>
          <form  
            className={classes.root} 
            noValidate autoComplete="off" 
            onSubmit ={joinTournament} >

          <label 
            for='joinTournByCode' 
            className={classes.subheader}>
              Join a Tournament
          </label>

          <TextField 
            className={classes.input} 
            id="joinTournByCode" 
            name= "tournamentJoiner"  
            placeholder="Enter Tournament Code" 
            variant="outlined" 
            borderColor="primary" />

          <Button 
            className={classes.button} 
            variant="contained" 
            color="primary" 
            type ="submit">
              Join
          </Button>
        </form>

      </Grid>


  {/* ==================MY TOURNAMENTS TABLE================== */}

      <Grid item xs={6} className={classes.tableDiv}>

          <TableContainer>
              <Table className={classes.table} 
              aria-label="My Tournaments Table">
                <TableHead>
                  <TableRow className={classes.rowHead}>
                    <TableCell colSpan={2}><strong>Tournaments</strong></TableCell>
                    <TableCell colSpan={1}>Games</TableCell>
                    <TableCell colSpan={1}>Start Date</TableCell>
                    <TableCell colSpan={1}>End Date</TableCell>
                    <TableCell colSpan={1}>Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {state.map((row)=>{
                      return(
                      <TableRow key={row.tName}>
                      <TableCell component="th" scope="row" colSpan={2}>
                        <a href={"tournament/"+row.id+"/dashboard/"+currentUser.userId}>
                        {row.tName}</a>
                      </TableCell>
                      <TableCell colSpan={1}>{row.games}</TableCell>
                      <TableCell colSpan={1}><small>{row.startDate}</small></TableCell>
                      <TableCell colSpan={1}><small>{row.endDate}</small></TableCell>
                      <TableCell colSpan={1}><i>{row.status}</i></TableCell>
                      </TableRow>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>

      </Grid>



  {/* ===============COLLAPSIBLE MY FRIENDS SECTION=============== */}  

      <Container item xs={10} className={classes.myFriendsDiv}>

       <Grid item xs={10}>
 
        <Accordion>

        <AccordionSummary
            className={classes.rowHead}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="My Friends Panel"
            id="myFriendsPanelHead"
            >
            <Typography className={classes.heading}><strong>My Friends</strong><small><i>&nbsp;&nbsp;click to open panel</i></small></Typography>
            </AccordionSummary>

          <AccordionDetails>

          <Grid container spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                className="myFriendsCont"
                >

            <Grid item xs={10}>

                <TableContainer>
                  <Table className={classes.table} 
                  aria-label="Friends Table">
                    <TableHead>
                      <TableRow>
                        {/* <TableCell>ID</TableCell> */}
                        <TableCell colSpan={1}>Name</TableCell>
                        <TableCell colSpan={1}>GamerTag</TableCell>
                        <TableCell colSpan={1}>Platform</TableCell>
                        <TableCell colSpan={1}>Player Since</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {friends.map((row)=>{
                          return(
                          <TableRow key={row.id}>
                          {/* <TableCell component="th" scope="row">{row.id}
                          </TableCell> */}
                          <TableCell colSpan={1}>{row.firstName} {row.lastName}</TableCell>
                          <TableCell colSpan={1}component="th">{row.gamerTag}</TableCell>
                          <TableCell colSpan={1}>{row.platform}</TableCell>
                          <TableCell colSpan={1}><small>{row.createdAt}</small></TableCell>
                          </TableRow>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>

            </Grid>

            <Container>
            <Grid item xs={10}>

              <Button 
                className={classes.button} 
                id="addFriendsBtn" 
                variant="contained" 
                align="left" 
                color="primary" 
                href="/new/friends">
                  Add friends
              </Button>

            </Grid>
            </Container>

          </Grid>


          </AccordionDetails>

        </Accordion>

      </Grid>
      </Container>

{/* ========================================================== */}


    </Grid>

  </Box>
  );
}

export default MyHome;