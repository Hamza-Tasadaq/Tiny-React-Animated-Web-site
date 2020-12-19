import React from 'react'
import './App.css'

import useWebAnimations, { fadeInTopLeft, lightSpeedInRight } from "@wellyshen/use-web-animations";

function Services() {
    const serviceAnimation = fadeInTopLeft;
    const animationOne = useWebAnimations({
        keyframes: serviceAnimation.keyframes,
        timing: {
            ...serviceAnimation.timing,
            delay: 1200, // Delay 1s
            duration: serviceAnimation.timing.duration * 0.75, // Speed up the animation
            easing: "ease-in-out",
        },
    });
    const cardAnimation = lightSpeedInRight;
    const animationTwo = useWebAnimations({
        keyframes: cardAnimation.keyframes,
        timing: {
            ...cardAnimation.timing,
            delay: 1200, // Delay 1s
            duration: cardAnimation.timing.duration, // Speed up the animation
            easing: "ease-in-out",
        },
    });
    return (
        <>
            <section id="services" className="services">
                <div className="container">
                        <div ref={animationOne.ref} className="section-title" data-aos="zoom-out">
                            <h2>Services</h2>
                            <p>What we do offer</p>
                        </div>
                    <div ref={animationTwo.ref} className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="icon-box" data-aos="zoom-in-left">
                                <div className="icon"><i className="las la-basketball-ball" style={{ color: '#ff689b' }} /></div>
                                <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias
                                excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={100}>
                                <div className="icon"><i className="las la-book" style={{ color: '#e9bf06' }} /></div>
                                <h4 className="title"><a href>Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5 mt-lg-0 ">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={200}>
                                <div className="icon"><i className="las la-file-alt" style={{ color: '#3fcdc7' }} /></div>
                                <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={300}>
                                <div className="icon"><i className="las la-tachometer-alt" style={{ color: '#41cf2e' }} /></div>
                                <h4 className="title"><a href>Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={400}>
                                <div className="icon"><i className="las la-globe-americas" style={{ color: '#d6ff22' }} /></div>
                                <h4 className="title"><a href>Nemo Enim</a></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-5">
                            <div className="icon-box" data-aos="zoom-in-left" data-aos-delay={500}>
                                <div className="icon"><i className="las la-clock" style={{ color: '#4680ff' }} /></div>
                                <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                                tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
