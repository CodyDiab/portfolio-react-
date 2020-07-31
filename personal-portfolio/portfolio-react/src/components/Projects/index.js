import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Projects() {
    return(
        <Carousel showThumbs={false}>
        <a href="https://stormy-scrubland-17368.herokuapp.com/" tagtet="_blank" rel="noopener noreferrer">
            <div className="item ">
                <img src={require("../../assets/scatterbrain.png")} alt="screenshot"></img>
                <p>Scatterbrain</p>
            </div>
         </a>
        <a href="https://codydiab.github.io/dm-emergency-paper-locator/" target="_blank" rel="noopener noreferrer">
            <div className="item" >
        <img  src={require("../../assets/Screenshot (11).png")} alt="screenshot"></img>
           <p>Paper Locator</p>
        </div>
         </a>
        
        <a href="https://codydiab.github.io/IRIS-wapp/" tagtet="_blank" rel="noopener noreferrer">
        <div className="item">
            <img src={require("../../assets/IRISscreenshot.png")} alt="screenshot"></img>
             <p>IRIS Weather</p>
        </div>
        </a>
        <a href="https://codydiab.github.io/git-it-done/" tagtet="_blank" rel="noopener noreferrer">
        <div className="item ">
            <img src={require("../../assets/git-it-done.png")} alt="screenshot"></img>
            <p>Git-It-Done</p>
        </div>
        </a>
        <a href="https://codydiab.github.io/Accessibility-Boost-Project/" target="_blank" rel="noopener noreferrer">
            <div className="item">
           <img src={require("../../assets/acess-boost.png")} alt="screenshot"></img>
           <p>Horiseon</p>
          </div>
       </a>
        <a href="https://codydiab.github.io/Work-Day-Scheduler/" tagtet="_blank" rel="noopener noreferrer">
        <div className="item">
            <img src={require("../../assets/work-day-sched..png")} alt="screenshot"></img>
            <p>Work-Day-Scheduler</p>
        </div>
        </a>
        
    </Carousel>
    )
}



export default Projects;