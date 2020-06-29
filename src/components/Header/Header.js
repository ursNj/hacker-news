import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Hacker News</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
