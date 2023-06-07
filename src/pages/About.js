import React, { Component } from 'react';
import './About.css';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src="src/assets/profile.jpg"
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              <p>Some brief description about you</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}