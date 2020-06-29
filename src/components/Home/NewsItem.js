import React from 'react';
import './Home.css';
import {TimeUtils} from "../../helpers/Utils/TimeUtils";

class NewsItem extends React.Component {

  render() {
    const data = this.props.item;
    return (
      <div className="news-block">
        <div className="news-comments user-select">{data.num_comments}</div>
        <div className="news-votes user-select">{data.points}</div>
        <div className="news-upvote user-select">
          <div onClick={this.props.onUpvoteClick} className="pointer">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-caret-up-fill" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
            </svg>
          </div>
        </div>
        <div
          className="news-details user-select">{data.title} <span
          className="news-sub-details"> by {data.author} &middot; {TimeUtils.getFormattedDate(new Date(data.created_at))}
          &nbsp;&middot; </span> [<a className="pointer" onClick={this.props.onHideClick}>Hide</a>]
        </div>
      </div>
    )
  }
}

export default NewsItem;
