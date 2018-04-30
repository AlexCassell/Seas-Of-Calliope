import React from "react";
import { Tab } from "semantic-ui-react";

import { moneyBoard, itemBoard, treasureBoard } from "../../dummyData";
import "../../css/leaderboardsHome.css";

const panes = [
  {
    menuItem: { key: "dollar", icon: "dollar" },
    render: () => (
      <Tab.Pane
        style={{
          position: "absolute",
          width: "100%",
          top: "5vh",
          left: "-.70vw",
          background: "none",
          border: "none",
          boxShadow: "none"
        }}
        attached={false}
      >
        {moneyBoard}
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "clipboard list", icon: "clipboard list" },
    render: () => (
      <Tab.Pane
        style={{
          position: "absolute",
          width: "100%",
          top: "5vh",
          left: "-.70vw",
          background: "none",
          border: "none",
          boxShadow: "none"
        }}
        attached={false}
      >
        {itemBoard}
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "map", icon: "map" },
    render: () => (
      <Tab.Pane
        style={{
          position: "absolute",
          width: "100%",
          top: "5vh",
          left: "-.70vw",
          background: "none",
          border: "none",
          boxShadow: "none"
        }}
        attached={false}
      >
        {treasureBoard}
      </Tab.Pane>
    )
  }
];

const LeaderboardsHome = () => (
  <Tab
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }}
    menu={{ inverted: true }}
    panes={panes}
  />
);

export default LeaderboardsHome;