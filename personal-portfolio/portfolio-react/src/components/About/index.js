import React from "react";


function About() {

    return(
    <div className="about-container">
        <img alt=" profile" className="profile-img" src={require('../../assets/profile-image.jpg')}>
        </img>
           <div className="about-text">
            <h2>Cody Nabil Diab</h2>
            <p>
             cody is a front end web developer with a base in design principles, leveraging logic and functionality to deliver a creative aesthetic along with a fluid user interface.
           </p>
         </div>
      
    </div>
 )
}

export default About;
