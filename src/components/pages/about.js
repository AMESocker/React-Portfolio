import React from 'react';
import ProfileImage from '../files/profileImage.jpg';

function About() {
    return (
        <div className=' container'>
            
            <img src={ProfileImage} alt="profile"></img>
            <div className="about">Aaron Socher is a Jr Web Developer with training from UC Berkeley Extension Bootcamp. He has addition education experience in computer troubleshooting, electronic circuits and working with databases in an Geographic Information Systems environment. </div>
        </div>
    );
}
export default About;
