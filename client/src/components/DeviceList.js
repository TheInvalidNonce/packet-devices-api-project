import React, { Component } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import DeviceListItem from './DeviceListItem';

export default class DeviceList extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      memberships: [],
      projects: [],
      devices: [],
    };
  }

  componentWillMount = () => {
    this.getProjectsList();
  };

  getProjectsList = () => {
    const projectsUrl = "http://localhost:3001/projects";
    axios.get(projectsUrl).then(resp => {
      console.log('resp :', resp);
      this.setState({
        id: resp.data.projects[0].id,
        projects: resp.data.projects,
        devices: resp.data.projects[0].devices,
        memberships: resp.data.projects[0].memberships,
      })
    });
  };

  renderDevices = () => {
    return (
      <ListGroup>
        {this.state.devices.map( (el, index) => {
          return (
            <DeviceListItem
              key={index}
              href={el.href}
            />
          )
        })}
      </ListGroup>
    )
  }

  // "/devices/f21da268-c580-46ab-b94b-e7a9e86ba1de"

  render() {
    return (
      <div className="devicesList">
        {this.renderDevices()}
      </div>
    )
  }
}