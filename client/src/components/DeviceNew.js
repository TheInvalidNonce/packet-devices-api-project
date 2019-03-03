import React, { Component } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
const uuidv4 = require("uuid/v4");

export default class DeviceNew extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      facility: "",
      plan: "",
      operating_system: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleButtonIdGenerate = e => {
    this.setState({
      id: uuidv4()
    })
  }

  handleSubmit = e => {
    let { id, facility, plan, operating_system } = this.state;
    let config = {
      headers: {
        'X-Auth-Token': process.env.REACT_TOKEN,
        'Content-Type': 'multipart/form-data'
      }
    }
    let formData = new FormData();

    formData.append('id', `${id}`)
    formData.append('facility', `${facility}`)
    formData.append('plan', `${plan}`)
    formData.append('operating_system', `${operating_system}`)

    axios({
      method: 'post',
      url: `https://api.packet.net/projects/${id}/devices`,
      data: formData,
      config: config
    })
    .then(resp => {
      console.log('resp :', resp);
    })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>UUID</Form.Label>
            <Form.Control
              type="text"
              value={this.state.id}
              onChange={e => this.handleInput(e)}
              disabled
              required
            />
            <Button 
              className="generateBtn"
              variant="primary" 
              onClick={e => this.handleButtonIdGenerate(e)}>
              Generate UUID
            </Button>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Facility</Form.Label>
            <Form.Control
              type="text"
              name="facility"
              placeholder="Enter a Facility"
              onChange={e => this.handleInput(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Plan</Form.Label>
            <Form.Control
              type="text"
              name="plan"
              placeholder="Enter a Plan"
              onChange={e => this.handleInput(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Operating System</Form.Label>
            <Form.Control
              type="text"
              name="operating_system"
              placeholder="Enter a Operating System"
              onChange={e => this.handleInput(e)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
