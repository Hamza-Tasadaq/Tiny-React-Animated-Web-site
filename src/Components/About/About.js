import React from 'react'
import './App.css'

import useWebAnimations, { fadeInTopLeft, bounceInUp } from "@wellyshen/use-web-animations";

function About() {
    const aboutAnimation = fadeInTopLeft;
    const animationOne = useWebAnimations({
        keyframes: aboutAnimation.keyframes,
        timing: {
            ...aboutAnimation.timing,
            delay: 1200, // Delay 1s
            duration: aboutAnimation.timing.duration * 0.75, // Speed up the animation
            easing: "ease-in-out",
        },
    });
    const contentAnimation=bounceInUp;
    const animationTwo = useWebAnimations({
        keyframes: contentAnimation.keyframes,
        timing: {
            ...contentAnimation.timing,
            delay: 1500, // Delay 1s
            duration: 1700, // Speed up the animation
            easing: "ease-in-out",
        },
    });

    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div ref={animationOne.ref} className="section-title" data-aos="zoom-out">
                        <h2>About</h2>
                        <p>Who we are</p>
                    </div>
                    <div ref={animationTwo.ref} className="row content" data-aos="fade-up">
                        <div className="col-lg-6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate
                                velit</li>
                                <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
