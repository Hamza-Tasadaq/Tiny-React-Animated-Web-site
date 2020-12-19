import React from 'react'
import './App.css'


import useWebAnimations, { zoomInDown } from "@wellyshen/use-web-animations";

function Hero() {
    const { keyframes, timing } = zoomInDown;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 1000, // Delay 1s
            duration: timing.duration * 0.75, // Speed up the animation
            easing: "ease-in-out",
        },
    });

    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
                <div id="heroCarousel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
                    <div ref={ref} className="carousel-item active">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Selecao</span></h2>
                            <p className="animate__animated fanimate__adeInUp">Ut velit est quam dolor ad a aliquid qui aliquid.
                            Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
                            Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore
          modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero
