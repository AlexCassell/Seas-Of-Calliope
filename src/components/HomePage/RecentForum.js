import React from "react";
import { Feed, Icon } from "semantic-ui-react";

import "../../css/recentForum.css";

const RecentForum = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/judith.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Judith</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              Where is the best place to sell rice?
            </span>
            <Feed.Date className="recentForum__timePosted">
              1 Hour Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                4 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                5 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/aaron.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Aaron</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              Does anyone know how to get into that futuristic looking city?
            </span>
            <Feed.Date className="recentForum__timePosted">
              3 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                7 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                10 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/brook.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Rhonda</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              When are they adding crafting?
            </span>
            <Feed.Date className="recentForum__timePosted">
              3 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                1 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                6 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/caleb.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Caleb</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              Where is the hermet doll maker?
            </span>
            <Feed.Date className="recentForum__timePosted">
              4 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                9 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                11 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>

        <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/eric.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Eric</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              Where can I buy bamboo?
            </span>
            <Feed.Date className="recentForum__timePosted">
              5 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                3 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                6 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>

        <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/greg.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Greg</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              What job or ability are you looking forward too?
            </span>
            <Feed.Date className="recentForum__timePosted">
              5 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                12 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                15 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>
    
    <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/roger.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Roger</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              When is the market coming?
            </span>
            <Feed.Date className="recentForum__timePosted">
              6 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                5 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                7 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>

        <Feed.Event>
      <Feed.Label image={require("../../images/avatars/small/stan.png")} />
      <div className="recentForum__content">
        <Feed.Content>
          <Feed.Summary>
            <Feed.User className="recentForum__names">Stan</Feed.User>
            <span className="recentForum__content">
              created a new forum post titled:
            </span>
            <span className="recentForum__postTitle">
              Where do you think the train goes?
            </span>
            <Feed.Date className="recentForum__timePosted">
              7 Hours Ago
            </Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <span className="recentForum__likes">
                <Icon name="like" />
                12 Likes
              </span>
              <span className="recentForum__comments">
                <i className="comments icon" />
                16 Replies
              </span>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </div>
    </Feed.Event>
  </Feed>
);

export default RecentForum;
