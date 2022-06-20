import React from 'react';
import './experience.css';

const Experience = () => {
    
    const companies = ["A", "B", "C"];

    return (
        <>
            <section id='exp-section'>
                <div id='article-heading'>
                    <h1><span className='heading-number'>02.</span> Where I’ve Worked</h1>
                    <hr />
                </div>
                <div id='exp-content'>
                    <div id='company-btns'>
                        <button className='btn'>A</button>
                        <button className='btn'>B</button>
                        <button className='btn'>C</button>
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
                        <div>
                            <h3>desg @ B</h3>
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
                        <div>
                            <h3>desg @ C</h3>
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