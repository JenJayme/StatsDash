import React, { Component, useContext } from "react";
import { AuthContext } from "../Auth";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Navigation from "../components/Navigation";
import StacyS from "../components/NewChoose/StacyS.png";
import soldier1 from "../components/NewChoose/soldier1.jpg";
import GioNoisy from "../components/NewChoose/GioNoisy.jpeg";
import JenJayme from "../components/NewChoose/jen-head-shot.png";
import AlexPic from "../components/NewChoose/IMG_0026.jpg";
import RoycePic from "../components/NewChoose/RoyceDemoPic.JPG";
import Tilt from "react-tilt";
import "./style.css";


export default function About () {

    return (
        <Container class="Container-NC">
            <Navigation></Navigation>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} m={12} l={12}><Tilt options={{ max: 25 }}>
                    <Card elevation={3} className="aboutProjectPaper">
                        <h3 className="aboutHead">About The Project</h3>
                        <p className="aboutText"> Bragging Rights is a unique React-powered platform that offers gaming 
                            enthusiasts an arena to coordinate multi-game tournaments among their 
                            circle of friends, with aggregated reporting on performance statistics 
                            in a dynamically updated dashboard.  Version 1 of Bragging Rights centers 
                            on the popular "Call of Duty" universe.  Future plans to incorporate other 
                            gaming universes include League of Legends and NBA 2K.
                        </p>
                    </Card> 
                    </Tilt>
                </Grid>
                
            </Grid>

            <Grid container spacing={5}
                    direction="row"
                    justify="center"
                    alignItems="top">

                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Gio Noisy"
                                height="300"
                                image={GioNoisy}
                                />
                            <CardContent className="card-contentNC">
                                <h4>Giovanni Noisy</h4>
                                <p> Hello, I'm Giovanni. I'm a Web Developer who recently graduated from the 
                                    UC Berkeley Full Stack Web Development Program. I spent the previous fifteen 
                                    years working as a Graphic Designer in the entertainment industry creating 
                                    theatrical, home entertainment and television advertising campaigns. For the 
                                    last five years my focus has been in the gaming industry. I've created 
                                    campaigns used for marketing core titles in platforms such as the Apple 
                                    Store, Google Play, Facebook, and Discord.
                                </p>
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>
                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Stacy Pic"
                                height="300"
                                image={StacyS}
                                />
                            <CardContent className="card-contentNC">
                                <h4>Seyoung "Stacey" Yoon</h4>
                                <p> Seyoung, also known as Stacey, is a recent graduate with a Bachelor's 
                                    of Science from UC Irvine. She decided to join a coding boot camp in 
                                    order to gain the technical skills needed to become a software 
                                    engineer. She aspires to be involved in green technology or sustainable 
                                    technology and hopes to help alleviate the effects of climate change.
                                </p>
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>

                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Jen Jayme"
                                height="300"
                                image={JenJayme}
                                />
                            <CardContent className="card-contentNC">
                                <h4>Jenifer Jayme</h4>
                                <p> Jen is enjoying a second career in full-stack web development 
                                    after 20+ years in fundraising, marketing and communications for 
                                    great causes. She has held leadership roles at prominent organizations 
                                    including Big Brothers Big Sisters, St. Vincent de Paul Society, and 
                                    Santa Clara University. Jen holds a B.A. in English with Honors and 
                                    and a Certificate in Full Stack Web Development from UC Berkeley. Her 
                                    proficiencies include Javascript, React, APIs, Front-End Design, server-side 
                                    and database architectures such as MySql, MongoDB and Node/Express.  She is 
                                    currently exploring employment opportunities while running a consulting business.
                                </p>
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>
    
                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Royce Williams"
                                height="300"
                                image={RoycePic}
                                />
                            <CardContent className="card-contentNC">
                                <h4>Royce Williams</h4>
                                <p> Royce is a full stack developer out of Berkeley, California, with 
                                    a background in Computer Science.  He holds a Certificate in Full 
                                    Stack Development from UC Berkeley Coding Boot Camp and an International 
                                    Baccalaureate diploma.  While currently earning his B.A. in Computer 
                                    Science at U.C. Santa Cruz, Royce is deepening his skills in various 
                                    programming languages and technologies.  He has advanced proficiency 
                                    in Javascript (including ES6), SQL, Mongodb, React.js, Node.js, Git, 
                                    Github, JSX, AJAX, REST, Jquery, HTML5 and CSS, and is currently 
                                    learning Python, Ruby and Java.  Royce is open to new internship and 
                                    job opportunities and will be an adept technical anchor on any coding team.
                                </p>
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>
                <Grid className="NC-card" item xs={5}>
                <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                        <CardMedia
                            component="img"
                            alt="Alex Pic"
                            height="300"
                            image={AlexPic}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="card-contentNC">
                                <h4>Alex Rodriguez</h4>
                                <p> Hi, I'm Alex. I am aspiring to move into the technology space as 
                                    a Full Stack Web Developer. Earned a certificate from UC Berkeley 
                                    Coding Bootcamp.  Proficient in JavaScript, CSS(Cascading Style Sheets), 
                                    HTML, API, MySQL/SQL, GitHub, Heroku, Git, JQuery, Express.js, JSON, 
                                    OOP (Object Oriented Programming), and experienced in developing with 
                                    React, Node.js, MongoDB, and using cloud based computing platforms like 
                                    AWS (Amazon Web Services), and CSS Frameworks like Bootstrap and Materialize.
                                </p>
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/tournament">
                                    New Tournament
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid>
            </Grid>                
        </Container>
        
    
    
        )
    }