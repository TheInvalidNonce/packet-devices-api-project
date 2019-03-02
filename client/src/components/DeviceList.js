import React, { Component } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";

export default class DeviceList extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      devices: []
    };
  }

  componentWillMount = () => {
    this.getProjectsList();
  };

  getProjectsList = () => {
    const url = "http://localhost:3001/projects";
    // const urlTwo = 'https://api.packet.net/projects';
    console.log('process.env.PACK :', process.env.REACT_APP_TOKEN);
    debugger;
    // fetch(url, {
    //   method: 'GET',
    //   // mode: 'no-cors',
    //   headers: {
    //     // "credentials": 'include',
    //     // "X-Auth-Token": process.env.REACT_APP_TOKEN,
    //     "Content-Type": "application/json",
    //     // "X-Requested-With": "XMLHttpRequest",
    //     // "Postman-Token": "5dac0d5b-a39a-4e01-b2d3-c6e452367970"
    //   }
    // }).then(resp => resp.json())
    //   .then(resp => {
    //   console.log('resp :', resp.json);
    //   debugger
    // })
    axios.get(url).then(resp => {
      console.log('resp :', resp);
      // resp.data
      debugger
    })
  };

  render() {
    return <ListGroup />;
  }
}
