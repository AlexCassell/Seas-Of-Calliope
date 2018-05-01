import React from "react";

import { Dimmer } from "semantic-ui-react";

import "../../css/universal.css"; //main wrapper for every component //places content below top menu
import "../../css/auctionHouse.css"; //every component has its own css file

const AuctionHouse = () => (
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
    <div className="auctionHouse__flexWrapper">
      {/* backgrounds */}
      <div className="auctionHouse__leftBackground" />
      <div className="auctionHouse__centerBackground" />
      <div className="auctionHouse__rightBackground" />
    </div>
    <div className="auctionHouse__flexWrapperInside">
      {/* backgrounds */}
      <div className="auctionHouse__insideLeft">
        <div className="auctionHouse__insideLeft__title" />
      </div>
      <div className="auctionHouse__insideCenter" />
      <div className="auctionHouse__insideRight">
        <div className="auctionHouse__insideRight__title" />
      </div>
    </div>
  </div>
);
export default AuctionHouse;
