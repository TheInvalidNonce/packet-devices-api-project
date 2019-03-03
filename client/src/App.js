import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DeviceList from './components/DeviceList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          Packet API - List of Devices
        </Container>
      <Container>
          <Row>
            <Col>
              <DeviceList/>
            </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default App;
