import React from "react";

import { Popup } from "semantic-ui-react";

const moneyBoard = (
  /*flex column*/
  <div className="leaderboards__data__Wrapper">
    {/*titles*/}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Position</span>
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Player</span>
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Gold</span>
      </div>
    </div>
    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="first place"
          src={require("./images/leaderboard/first.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/aaron.png")}
            />
          }
          content="Aaron"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          1052
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="second place"
          src={require("./images/leaderboard/second.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/eric.png")}
            />
          }
          content="Eric"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          1044
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="third place"
          src={require("./images/leaderboard/third.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/brook.png")}
            />
          }
          content="Rhonda"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          1031
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="fourth place"
          src={require("./images/leaderboard/four.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/greg.png")}
            />
          }
          content="Greg"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          1027
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="fifth place"
          src={require("./images/leaderboard/five.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/judith.png")}
            />
          }
          content="Judith"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          1002
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="sixth place"
          src={require("./images/leaderboard/six.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/caleb.png")}
            />
          }
          content="Caleb"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          997
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="seventh place"
          src={require("./images/leaderboard/seven.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/carter.png")}
            />
          }
          content="Carter"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          980
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="eigth place"
          src={require("./images/leaderboard/eight.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/stan.png")}
            />
          }
          content="Stan"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          944
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="eigth place"
          src={require("./images/leaderboard/nine.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/roger.png")}
            />
          }
          content="Roger"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          812
        </span>
      </div>
    </div>
  </div>
);

const itemBoard = (
  /*flex column*/
  <div className="leaderboards__data__Wrapper">
    {/*titles*/}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Position</span>
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Player</span>
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Items Sold</span>
      </div>
    </div>
    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="first place"
          src={require("./images/leaderboard/first.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/eric.png")}
            />
          }
          content="Eric"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          479
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="second place"
          src={require("./images/leaderboard/second.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/greg.png")}
            />
          }
          content="Greg"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          466
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="third place"
          src={require("./images/leaderboard/third.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/judith.png")}
            />
          }
          content="Judy"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          460
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="fourth place"
          src={require("./images/leaderboard/four.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/aaron.png")}
            />
          }
          content="Aaron"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          390
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="fifth place"
          src={require("./images/leaderboard/five.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/brook.png")}
            />
          }
          content="Rhonda"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          368
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="sixth place"
          src={require("./images/leaderboard/six.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/caleb.png")}
            />
          }
          content="Caleb"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          300
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="seventh place"
          src={require("./images/leaderboard/seven.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/carter.png")}
            />
          }
          content="Carter"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          276
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="eigth place"
          src={require("./images/leaderboard/eight.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/stan.png")}
            />
          }
          content="Stan"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          276
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="eigth place"
          src={require("./images/leaderboard/nine.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/roger.png")}
            />
          }
          content="Roger"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          193
        </span>
      </div>
    </div>
  </div>
);

const treasureBoard = (
  /*flex column*/
  <div className="leaderboards__data__Wrapper">
    {/*titles*/}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Position</span>
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Player</span>
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text">Treasures</span>
      </div>
    </div>
    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="first place"
          src={require("./images/leaderboard/first.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/judith.png")}
            />
          }
          content="Judy"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          21
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="second place"
          src={require("./images/leaderboard/second.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/aaron.png")}
            />
          }
          content="Aaron"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          19
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="third place"
          src={require("./images/leaderboard/third.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/greg.png")}
            />
          }
          content="Greg"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          17
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="fourth place"
          src={require("./images/leaderboard/four.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/eric.png")}
            />
          }
          content="Eric"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          17
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="fifth place"
          src={require("./images/leaderboard/five.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/brook.png")}
            />
          }
          content="Rhonda"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          11
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="sixth place"
          src={require("./images/leaderboard/six.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/caleb.png")}
            />
          }
          content="Caleb"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          9
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="seventh place"
          src={require("./images/leaderboard/seven.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/carter.png")}
            />
          }
          content="Carter"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          8
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="eigth place"
          src={require("./images/leaderboard/eight.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/stan.png")}
            />
          }
          content="Stan"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          5
        </span>
      </div>
    </div>

    {/* user place */}
    <div className="leaderboards__data__RowWrapper">
      <div className="leaderboards__data__Row">
        <img
          className="leaderboards__placeIcon"
          alt="eigth place"
          src={require("./images/leaderboard/nine.png")}
        />
      </div>
      <div className="leaderboards__data__Row">
        <Popup
          trigger={
            <img
              className="leaderboards__placeIcon"
              alt="user icon"
              src={require("./images/avatars/small/roger.png")}
            />
          }
          content="Roger"
        />
      </div>
      <div className="leaderboards__data__Row">
        <span className="leaderboards__data__Text leaderboards__data__TextScore">
          4
        </span>
      </div>
    </div>
  </div>
);

export { moneyBoard, itemBoard, treasureBoard };
