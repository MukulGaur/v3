import React from 'react';
import './project.css';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Project = () => {
  return (
    <div id='project-section'>
        <div id='project-heading'>
            <h1 className='heading'><span className='heading-number'>03.</span> Projects</h1>
            <hr />
        </div>
        <div id='cards' className='d-flex'>
            <div className='card'>
                    <div className='d-flex card-icon'>
                        <div><AccountTreeIcon/></div>
                        <div>
                            <GitHubIcon/>
                            <OpenInNewIcon/>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Mausam (Weather App)
                        </h3>
                    </div>
                    <div className='d-flex'>
                        <div><ArrowRightIcon/></div>
                        <div>
                        The weather app uses weather APIs from OpenWeatherMap
                        to fetch the temperature and other details of any city in the world.
                        </div>
                    </div>
                    <div className='tech-stack'>
                        React JS
                    </div>
            </div>
            <div className='card'>
                    <div className='d-flex card-icon'>
                        <div><AccountTreeIcon/></div>
                        <div>
                            <GitHubIcon/>
                            <OpenInNewIcon/>
                        </div>
                    </div>
                    <div>
                        <h3>
                            Amusement Park
                        </h3>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <div><ArrowRightIcon/></div>
                            <div>
                            The Amusement Park management
                            system lets the user view all the events in the park and allows them to book tickets as well.
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div><ArrowRightIcon/></div>
                            <div>
                                The Front-end was developed in React JS and Material UI
                                was used for the designing part, and formik was used for form validations.
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div><ArrowRightIcon/></div>
                            <div>
                                Back-end REST APIs were developed using Java Spring framework.
                            </div>
                        </div>
                        <div className='tech-stack'>
                            React JS Java Spring MySQL
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Project