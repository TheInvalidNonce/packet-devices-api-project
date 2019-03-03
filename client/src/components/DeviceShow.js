import React, { Component } from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class DeviceShow extends Component {
  render() {
    const selectedDevice = this.props.deviceItems.filter(
      el => el.id === document.URL.split("/")[4]
    )[0];
    return (
      <Container className="deviceShow">
        {selectedDevice && (
          <Container>
            <Card style={{ width: "24rem" }}>
              <Card.Body>
                <Card.Title>{selectedDevice.operating_system.name}</Card.Title>
                <Card.Text>{selectedDevice.plan.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>ID: {selectedDevice.id}</ListGroupItem>
                <ListGroupItem>
                  Created At: {selectedDevice.created_at}
                </ListGroupItem>
                <ListGroupItem>
                  Pricing: ${selectedDevice.plan.pricing.hour} per hour
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Container>
        )}
      </Container>
    );
  }
}
