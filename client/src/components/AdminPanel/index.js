//ADMIN PANEL FOR TOURNAMENT DASHBOARD

import React, { useContext } from "react";
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InviteFriend from '../AdminPanel/InviteFriend';
import AddFriends from '../AdminPanel/AddFriends';
import StartTournButton from '../AdminPanel/StartTournButton';
import StopTournButton from '../AdminPanel/StopTournButton';
import UpdateStatsButton from '../AdminPanel/UpdateStatsButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Styles from './adminpanelstyle.css';
import API from '../../utils/API';
import { blueGrey } from '@material-ui/core/colors';
import { AuthContext } from "../../Auth";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        background: blueGrey[500],
        color: blueGrey[500],
    }
  }));

export default function AdminPanel (props) {
    const classes = useStyles();
    console.log("TOURNAMENT DATA IN ADMIN PANNEL");
    console.log(props.tournamentData);
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)
    if(currentUser){
        if(props.tournamentData.adminId === currentUser.userId&&props.tournamentData.status==="pending"){
            return (
    
                <div className={classes.root}>
                    <Accordion>
    
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}><strong>Admin Panel</strong></Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
    
                            <Container>
                                    <ButtonGroup aria-label="admin button group">
                                        <StartTournButton 
                                        tournamentData = {props.tournamentData}
                                        
                                        />
                                       
                                        <AddFriends 
                                            friends = {props.friends}
                                            joinCode = {props.tournamentData.joinCode}
                                        />
                                    </ButtonGroup>
                            </Container>
    
                        </AccordionDetails>
    
                    </Accordion>
                </div>
            )
        }
        if(props.tournamentData.adminId === currentUser.userId&&props.tournamentData.status==="active"){
            return (
    
                <div className={classes.root}>
                    <Accordion>
        
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}><strong>Admin Panel</strong></Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
        
                            <Container>
                                    <ButtonGroup aria-label="admin button group">
                                        
                                        <StopTournButton 
                                        tournamentData = {props.tournamentData}
                                        />
                                        
                                    </ButtonGroup>
                            </Container>
        
                        </AccordionDetails>
        
                    </Accordion>
                </div>
            )
        }
        if(props.tournamentData.status==="completed"){
            return (
    
                <div className={classes.root}>
                    <Accordion>
        
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}><strong>Admin Panel</strong></Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
        
                            <Container>
                                    <ButtonGroup aria-label="admin button group">
                                        <h4>This Tournament is completed.</h4>
                                       
                                    </ButtonGroup>
                            </Container>
        
                        </AccordionDetails>
        
                    </Accordion>
                </div>
            )
        }
        if(props.tournamentData.adminId!== currentUser.userId){
            return (
    
                <div className={classes.root}>
                    <Accordion>
        
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}><strong>Admin Panel</strong></Typography>
                        </AccordionSummary>
                        
                        <AccordionDetails>
        
                            <Container>
                                    <ButtonGroup aria-label="admin button group">
                                        <h4>You do not have admin access to this tournament.</h4>
                                       
                                    </ButtonGroup>
                            </Container>
        
                        </AccordionDetails>
        
                    </Accordion>
                </div>
            )
        }
    }
    return(
        <h4>Loading...</h4>
    )
    

}