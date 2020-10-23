//THIS IS THE NAVBAR

import React, { useContext } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../Navigation/br-logo-horizontal.png';
import { AuthContext } from "../../Auth";
import { withRouter, Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import "./nav.css"

import app from "../../firebase";


function Navigation() {
    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    function handleOnclick(event){
        event.preventDefault();
        return app.auth().signOut().then(()=>{
            alert("OK we're signing you out.");
            console.log("HELLO");
            console.log(currentUser);
            history.push("/");
        });

     
       
    }
    return (
        
            <Navbar className="navbar" collapseOnSelect expand="lg" >
                <div className="container">
                <Navbar.Brand href="/"><img src={logo} width="140px"></img> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{color: "white"}} href="/myhome">My Home</Nav.Link>
                        {/* <Nav.Link style={{color: "white"}} href="/dashboard">Dashboard</Nav.Link> */}
                        <Nav.Link style={{color: "white"}} href="/newplayer">New Player</Nav.Link>
                        <Nav.Link style={{color: "white"}} href="/newtournament">New Tournament</Nav.Link>
                        <Nav.Link style={{color: "white"}} href="/new/friends">Add Friends</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form> */}

                        {/* <Nav.Link  style={{color: "white"}}href="/new">New</Nav.Link> */}
                        <Nav.Link  style={{color: "white"}}href="/about">About</Nav.Link>
                        {/* <Nav.Link href="/new/player">New Player</Nav.Link> */}
                        <Nav.Link style={{color: "white"}}onClick = {handleOnclick}>Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        
    )
}

export default Navigation;