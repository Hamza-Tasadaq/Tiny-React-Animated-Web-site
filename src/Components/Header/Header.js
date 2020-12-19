import React from 'react'
import './App.css'
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";

function Header() {


    const { keyframes, timing } = slideInDown;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 100, // Delay 1s
            // duration: timing.duration * 0.75, // Speed up the animation
            easing: "ease-in-out",
        },
    });


    return (
        <>
            <header ref={ref} id="header" className="fixed-top d-flex align-items-center  header-transparent ">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1 className="text-light"><a href="index.html">Selecao</a></h1>
                    </div>
                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="index.html">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
