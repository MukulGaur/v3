import React from 'react';
import './experience.css';

const Experience = () => {
    
    const companies = ["Capgemini", "Endurance", "TCS iON"];

    return (
        <>
            <section id='exp-section'>
                <div id='exp-heading'>
                    <h1 className='heading'><span className='heading-number'>02.</span> Where I’ve Worked</h1>
                    <hr />
                </div>
                <div id='exp-content'>
                    <div id='company-btns'>
                        {
                            companies.map( (name, index)=>{
                                return (
                                    <button key={index} className='btn'>{name}</button>
                                )
                            })
                        }
                    </div>
                    <div className="desc-container">
                        <div>
                            <h3>desg @ A</h3>
                            <h4>Dec 2019 - Present</h4>
                            <ul>
                                <li>
                                    <p>num 1</p>
                                </li>
                                <li>
                                    <p>num 2</p>
                                </li>
                                <li>
                                    <p>num 3</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience