import React, { useCallback } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import app from "../../firebase";
import {withRouter} from "react-router";
import API from "../../utils/API";
import Navigation from "../../components/Navigation";
import styles from '../../pages/CreateNewTournament/style.css';
import "./style.css"




const NewPlayer = ({history}) =>{
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const {email, password, gamerTag,activisionId,platform,firstName, lastName } = event.target.elements;
        console.log("email: "+ email.value+ " password: "+ password.value+ 
        " gamertag: " +gamerTag.value+ " activisionId: "+ activisionId.value+ 
        " platform: "+ platform.value+ " firstName: "+ firstName.value+ 
        " lastName: "+ lastName.value);
        var newUser ={
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            gamerTag: gamerTag.value,
            activisionId:activisionId.value,
            platform: platform.value

        }
        try {
            await app 
            .auth().createUserWithEmailAndPassword(email.value,password.value).then(function(userRecord){
                newUser.id = userRecord.user.uid
                console.log(userRecord.user.uid);
                API.createUser(newUser);
            });
            
            history.push("/");
        }
        catch (error){
            alert(error);
        }
    },[history]
    );


    return (
        <div className="Np-Page"><Container>
                <Navigation /><br></br><br></br>


            {/* <Row>
                <Col><h3 className="my-5 text-center">New Player</h3></Col>
            </Row> */}

            <Row>
                {/* <Col md={1}></Col> */}
                <Col md={6}>
                    <Card style={{backgroundColor: "transparent"}} className="NP-card">
                        <Card.Body >
                            <Form onSubmit = {handleSignUp}>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formGamerTag">
                                            <Form.Label >Gamer Tag</Form.Label>
                                            <Form.Control name ="gamerTag" type="text" placeholder="Enter Gamer Tag" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control  name ="password"type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                            <br></br>

                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Choose a platform</Form.Label>
                                            <Form.Control name ="platform" as="select">
                                            <option defaultValue = "psn">Playstation - (psn)</option>
                                            <option defaultValue = "steam">Steam - (steam)</option>
                                            <option defaultValue = "xbox">XBox - (xbl)</option>
                                            <option defaultValue = "act">Activision - (battle) Include your Activision ID#</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="formActivisionId">
                                            <Form.Label>Activision ID (optional)</Form.Label>
                                            <Form.Control  name ="activisionId"type="text" placeholder="Enter ID" inactive />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>

                            <br></br>

                            <Form.Row>
                                    <Col>

                                    <Form.Group controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control name ="firstName" type="text" placeholder="Enter First Name" />
                                    </Form.Group>

                                    </Col>
                                    <Col>

                                    <Form.Group controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control  name ="lastName" type="text" placeholder="Enter Last Name" />
                                    </Form.Group>

                                    </Col>
                            </Form.Row>
                            <Form.Row>

                                    <Col>

                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control  name ="email" type="email" placeholder="Enter email" />
                                        </Form.Group>

                                    </Col>
                            </Form.Row>

                            <Form.Row>

                                <Button  type="submit" size="sm" block>
                                    Submit
                                </Button>

                            </Form.Row>

                            </Form>
                        </Card.Body>
                    </Card>
                   
                </Col>
                <Col md={2}></Col>
            </Row>
            </Container></div>
        )
}


export default NewPlayer;