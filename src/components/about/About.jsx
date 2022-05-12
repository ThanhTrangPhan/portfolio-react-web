import React from 'react'
import './about.css'
import ME from "../../assets/ava.png"
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {GoProject} from 'react-icons/go'

const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={ME} alt="aboutImage" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <BsAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years working</small>
                        </article>

                        <article className="about_card">
                            <FaUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>10+ Clients worldwide</small>
                        </article>

                        <article className="about_card">
                            <GoProject className="about_icon"/>
                            <h5>Projects</h5>
                            <small>Done 5+ projects</small>
                        </article>
                    </div>
                    <p>
                        Did you use alternate lorem ipsum generators before it was cool?<br/>
                        Of course you did, and you probably already know about Hipster Ipsum, too, because...<br/>
                        Oh, just beer me. Hipster Ipsum loads you up with painfully hipster dummy text with as many paragraphs as you need.<br/>
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About