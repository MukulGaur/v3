import React from 'react';
import './project.css';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
                    <div>
                        <p>
                        Weather app is a simple weather forecast app, which uses weather APIs from
                        OpenWeatherMap to fetch the temperature and other details of any city in the world.
                        </p>
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
                            Mausam (Weather App)
                        </h3>
                    </div>
                    <div>
                        <p>
                        Weather app is a simple weather forecast app, which uses weather APIs from
                        OpenWeatherMap to fetch the temperature and other details of any city in the world.
                        </p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Project