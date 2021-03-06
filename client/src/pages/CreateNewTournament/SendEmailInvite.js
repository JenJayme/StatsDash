import React, { Component, useContext, useState } from "react";
import ReactDom from 'react-dom';
import * as emailjs from 'emailjs-com';
import { Button, Container, Image, Table, Row, Col, FormFeedback, Form, FormGroup, Label, Input } from 'react-bootstrap';
import Navigation from '../../components/Navigation';
import Banner from './banner1.jpg';
import Styles from './style.css';

//Be sure to npm install emailjs-com for this component to work

class SendEmailInvite extends Component {
  state = {
    name: '',
    email: '',
    subject: "You're Invited - Join My Call of Duty Tournament",
    message: '',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: 'Bragging Rights',
      to_name: email,
      subject: "You're Invited - Join My Call of Duty Tournament",
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_XXXXXXXX',
       templateParams,
      'user_XXXXXXXXXXXXXXXXXXXX'
     )
     this.resetForm()
 }

resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

render() {
    return (
      <>
      <Navigation />
      <Container className="bannerImg">
        <Image src={Banner} className="bannerImg" alt="Banner Image"></Image>
      </Container>
        <Container>
          <Row>
            <Col>
          <h2 className="headerDiv">Invite A Friend to Join This Tournament</h2>
            </Col>
          </Row>

          <Row>
            <Col>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="text-muted">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label className="text-muted">Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label className="text-muted">Message</Form.Label>
              <Form.Control
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="sendEmailBtn">
              Submit
            </Button>
          </Form>
          </Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default SendEmailInvite;