import React from 'react';
import './home.styles.css'
import {gsap} from 'gsap'
import { useRef } from 'react';
import { useEffect } from 'react';
import hombre from './hombre.png'

const Home = () => {

    const timeLine = gsap.timeline();
    const container = useRef();
    const el = gsap.utils.selector(container);

    useEffect(()=>{
        timeLine.from(container.current, {
            duration:1.2,
            y: -200,
            height: 0,
            opacity: 0,
            ease: "power3.inOut"
        }).from([el("header"), el(".logo")],{
            delay: -0.2,
            y:-40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut"
        }).from([el(".content span"), el(".content h1"), el(".content h3"), el(".content p"), el(".content .cta")],{
            delay: -0.2,
            y: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.ease",
            stagger:{
                amount: .3
            }
        }).from(el(".side_navbar"),{
            delay: -0.2,
            x: 16,
            opacity: 0,
            duration: 0.8,
            ease: "power3.ease",
        }).from(el(".cap_item .cap"),{
            delay: -1.5,
            x:0,
            height:0,
            opacity:0.8,
            ease: "power3.Out",
            stagger:{
                amount: .8
            }
        }).from(el(".hero_img"),{
            delay: -0.4,
            x:20,
            opacity: 0,
            duration: .8,
            ease: "power3.Out"
        }).from(el(".social span"),{
            delay: -0.8,
            y: -81,
            opacity: 0,
            duration: .8,
            ease: "power3.Out",
            stagger: {
                amount: .8
            }
        })
    }, [el, timeLine])

    
    


    return (
        <div className='container' ref={container} >
            <div className="row">
                <div className="logo">
                    <div className="blue_"></div>
                    <div className="purple_"></div>
                </div>
                <header className='header'> 
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Contact</li>

                        </ul>
                    </nav>
                </header>

                <div className="hero">
                    <div className="hero_img">
                        <img src={hombre} alt="" />
                    </div>
                    <div className="cap_item">
                        <div className="cap blue_"></div>
                        <div className="cap purple_"></div>
                        <div className="cap lite_"></div>
                        <div className="cap dark_"></div>
                    </div>
                </div>

                <div className="content">
                    <span>a yoga club</span>
                    <h1>YOGA<br/>FLEX</h1>
                    <h3>Life</h3>
                    <p>
                        Schedule your Fitness Process
                        <br /> Who are in extremely love with eco friendly system.
                    </p>
                    <div className="cta">Our Featured</div>
                </div>

                <div className="indicator">
                    <span></span>
                    <span className='active'></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="side_navbar">
                <div className="mobile_nav">
                    <div className="nav_">

                    </div>
                </div>

                <div className="social">
                    <span >Facebook</span>
                    <span >Twitter</span>
                    <span >Instagram</span>
                </div>
                <div className='year'>@2022</div>

            </div>
        </div>
    );
};

export default Home;