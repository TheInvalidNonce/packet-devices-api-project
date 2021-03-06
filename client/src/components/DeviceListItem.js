import React, { Component } from "react";
import { ListGroup, Nav } from "react-bootstrap";

export default class DeviceListItem extends Component {
  render() {
    return (
      <ListGroup.Item>
        <Nav.Link href={this.props.href}>
          {this.props.href.split("/")[2]}
        </Nav.Link>
      </ListGroup.Item>
    );
  }
}
