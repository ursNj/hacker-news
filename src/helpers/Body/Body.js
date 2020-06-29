import React from 'react';
import Header from "../../components/Header/Header";
import './Body.css';

const Body = (props) => (
  <div className="body">
    <Header/>
    <div className="main">
      <div className="container">
        {props.children}
      </div>
    </div>
  </div>
);

export default Body;
