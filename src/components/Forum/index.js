import React from "react";

import { Dimmer } from "semantic-ui-react";

import "../../css/universal.css"; //main wrapper for every component //places content below top menu
import "../../css/forum.css"; //every component has its own css file

const Forum = () => (
  <div className="wrapper">
    <Dimmer active>
      <div
        style={{
          position: "absolute",
          fontSize: "5vw",
          textAlign: "center",
          top: "45vh",
          width: "100%"
        }}
      >
        Coming Soon
      </div>
    </Dimmer>
    <div className="forum__flexWrapper">
      {/* backgrounds */}
      <div className="forum__leftBackground" />
      <div className="forum__centerBackground" />
      <div className="forum__rightBackground" />
    </div>
    <div className="forum__flexWrapperInside">
      {/* backgrounds */}
      <div className="forum__insideLeft">
        <div className="forum__insideLeft__title" />
      </div>
      <div className="forum__insideCenter" />
      <div className="forum__insideRight">
        <div className="forum__insideRight__title" />
      </div>
    </div>
  </div>
);
export default Forum;
