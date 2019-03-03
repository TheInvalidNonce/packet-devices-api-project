import React, { Component } from "react";
import { Container } from "react-bootstrap";
import DeviceList from "./components/DeviceList";
import DeviceShow from "./components/DeviceShow";
import { Switch, Route } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import DeviceListItem from "./components/DeviceListItem";
import DeviceNew from './components/DeviceNew';
import CustomNavbar from './components/CustomNavBar';
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      memberships: [],
      projects: [],
      devices: [],
      deviceItems: []
    };
  }

  componentWillMount = () => {
    this.getProjectsList();
  };

  getProjectsList = () => {
    const projectsUrl = "http://localhost:3001/projects";
    axios.get(projectsUrl).then(resp => {
      this.setState(
        {
          id: resp.data.projects[0].id,
          projects: resp.data.projects,
          devices: resp.data.projects[0].devices,
          memberships: resp.data.projects[0].memberships
        },
        () => {
          for (let i = 0; i < this.state.devices.length; i++) {
            this.getDeviceInfo(this.state.devices[i].href);
          }
        }
      );
    });
  };

  getDeviceInfo = id => {
    const deviceUrl = `http://localhost:3001${id}`;

    axios.get(deviceUrl).then(resp => {
      this.setState({
        deviceItems: [...this.state.deviceItems, resp.data]
      });
    });
  };

  renderDevices = () => {
    return (
      <ListGroup>
        {this.state.devices.map((el, index) => {
          return <DeviceListItem key={index} href={el.href} />;
        })}
      </ListGroup>
    );
  };

  handleClick = () => {
    window.location.href = "http://localhost:3000";
  };

  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Container>
          <h1 onClick={this.handleClick}>Packet API - List of Devices</h1>
        </Container>
        <Switch>
          <Route
            exact path="/devices/new"
            component={() => <DeviceNew />}
          />
          <Route
            exact path="/"
            component={() => <DeviceList devices={this.state.devices} />}
          />
          <Route
            path="/devices/:id"
            component={() => (
              <DeviceShow deviceItems={this.state.deviceItems} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
