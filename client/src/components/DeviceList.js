import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import DeviceListItem from './DeviceListItem';

export default class DeviceList extends Component {

  renderDevices = () => {
    return (
      <ListGroup>
        {this.props.devices.map( (el, index) => {
          return (
            <DeviceListItem
              onClick={this.props.handleClick}
              key={index}
              href={el.href}
            />
          )
        })}
      </ListGroup>
    )
  }

  render() {
    console.log('this.props :', this.props);
    return (
      <div className="devicesList">
        {this.renderDevices()}
      </div>
    )
  }
}