import React, { Component } from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg';

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profileImage}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jesus Ballesteros</div>
            <div className="brief_description">
              <p>I love learning about new ways to impact the world through tech!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}