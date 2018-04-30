import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "../css/header.css";

class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="header header__menu">
        <Menu inverted>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="playNow"
            active={activeItem === "playNow"}
            onClick={() => {
              this.props.history.push("/playnow");
            }}
          >
            Play Now!
          </Menu.Item>
          <Menu.Item
            name="features"
            active={activeItem === "features"}
            onClick={() => {
              this.props.history.push("/features");
            }}
          >
            Features
          </Menu.Item>
          <Menu.Item
            name="news"
            active={activeItem === "news"}
            onClick={() => {
              this.props.history.push("/news");
            }}
          >
            News
          </Menu.Item>
          <Menu.Item
            name="forum"
            active={activeItem === "forum"}
            onClick={() => {
              this.props.history.push("/forum");
            }}
          >
            Forum
          </Menu.Item>
          <Menu.Item
            name="support"
            active={activeItem === "support"}
            onClick={() => {
              this.props.history.push("/support");
            }}
          >
            Support
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default withRouter(Navigation);

