import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>The skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_blockchain">
                    <h3>Blockchain Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>Smart Contract</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>Rust</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>Solidity</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>C/C++</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                    </div>
                </div>

                <div className="experience_fullstack">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>HTML/CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>NextJS</h4>
                                <small className='text-light'>Beginner</small>
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Beginner</small>
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>Web3</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>

                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience