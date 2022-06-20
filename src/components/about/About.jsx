import React from 'react';
import './about.css';
import Photo from '../../assets/photo.jfif';

const About = () => {
  return (
    <>
        <section id='about-section'>
            <h4 id='hi'>Hi, my name is</h4>
            <h1 id='myName'>Mukul Gaur.</h1>
            <h2 id='oneLiner'>I build things for the web.</h2>
            <h3 id='me'>
                I'm a software engineer specializing in building
                amazing digital experiences. Currently I'm working
                at <span id='companyName'>Capgemini</span>.
            </h3>
            <article id='about-detail'>
                <div id='article-heading'>
                    <h1><span className='heading-number'>01.</span> About Me</h1>
                    <hr />
                </div>
                <div className='article-content'>
                    <div>
                    <p>
                    💡 It’s hard enough to find an error in your code when you’re looking for it; it’s even harder when you’ve assumed your code is error-free.
                    <br/><br/>
                    👋🏻 Hi! I am a software developer who is obsessed with the idea of improving himself, and I love building things for the web.
                    <br/><br/>
                    Development calls to all my passions; it incorporates creativity and problem solving and I am allowed to break it to improve the code <span>( in a separate Git branch, of course)</span>.
                    <br/><br/>
                    💬 Ask me about Data structures, Algorithms.
                    <br/><br/>
                    Here are a few technologies I’ve been working with recently:<br/><br/>
                    🚀 Programming: Java (Spring Framework, Hibernate), JavaScript (React JS), HTML5, CSS3 (Bootstrap5)
                    <br/><br/>
                    🚀 Database:<br/><br/>
                    SQL - MySQL, MSSQL<br/><br/>
                    NoSQL - MongoDB
                    <br/><br/>
                    🚀 Tools: Git, Maven
                    <br/><br/>
                    And I can fly a helicopter 🚁...haha just checking if you are still paying attention 😅.
                    </p>
                    </div>
                    <div>
                        <figure>
                            <img src={Photo} alt="Mukul Gaur" />
                        </figure>
                    </div>
                </div>
            </article>
        </section>
    </>
  )
}

export default About