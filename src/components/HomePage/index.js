import React from "react";

import RecentForum from "./RecentForum";
import LeaderboardsHome from "./LeaderboardsHome";

import "../../css/universal.css"; //main wrapper for every component //places content below top menu
import "../../css/home.css"; //every component has its own css file

const Home = () => (
  <div className="wrapper">
    <div className="home__flexWrapper">
      {/* backgrounds */}
      <div className="home__leftBackground" />
      <div className="home__centerBackground" />
      <div className="home__rightBackground" />
    </div>
    <div className="home__bottomBackground" />
    <div className="home__flexWrapperInside">
      {/* backgrounds */}
      <div className="home__insideLeft">
        <div className="home__insideLeft__title">Leaderboards</div>
        <div className="home__leaderboardsWrapper">
          <LeaderboardsHome />
        </div>
      </div>
      <div className="home__insideCenter">
        <div className="home__insideCenter__title">Seas of Calliope</div>
        <div
          className="home__insideCenter__content"
          style={{
            position: "absolute",
            top: "20vh",
            textAlign: "center",
            width: "40vw"
          }}
        >
          This website is under construction; video commercial will go here.
          <div
            style={{
              position: "relative",
              marginTop: "2vh",
              fontSize: "3vh",
              textAlign: "center",
              lineHeight: "35px"
            }}
          >
            The Seas of Calliope is Free to Play, 3D, indie MMO currently in closed Alpha (The open beta will be available for download in May).
          </div>
        </div>
      </div>
      <div className="home__insideRight">
        <div className="home__insideRight__title">Forum Posts</div>
        <div className="home__recentForumWrapper">
          <RecentForum />
        </div>
      </div>
    </div>
    <div className="home__insideBottom">bottom</div>
  </div>
);
export default Home;
