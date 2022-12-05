import React from 'react';
import ProfileImage from '../files/profileImage.jpg';

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={ProfileImage} alt="profile"></img>
            <p className="App-header">Aaron Socher is a Jr Web Developer with training from UC Berkeley Extension Bootcamp. He has addition education experience in computer troubleshooting, electronic circuits and working with databases in an Geographic Information Systems environment. </p>
        </div>
    );
}
export default About;
