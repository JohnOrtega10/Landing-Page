import React from 'react';
import { useEffect } from 'react';
import './style.css'
import {gsap} from 'gsap'
import { useRef } from 'react';

const Home = () => {
    const timeLine = gsap.timeline()
    const wrapper = useRef();
    const el = gsap.utils.selector(wrapper);

    useEffect(()=>{
        timeLine.to(el('.left'), 2, {
            duration: .8,
            width: '50%',
            // ease: Power2.easeInOut
          }).to(el('.right'), 2, {
            duration: .6,
            width: '50%',
            // // ease: Power3.easeInOut
          }).from(el('.nav'), 2, {
            duration: .8,
            opacity: 0,
            // // ease: Expo.easeInOut
          }).from(el('.text h1'), 2, {
            duration: .6,
            x: 1000,
            // // ease: Circ.easeInOut
          }).from(el('.text p'), 2, {
            duration: .7,
            x: 1000,
            // // ease: Circ.easeInOut
          }).to(el('.karina'), 2, {
            duration: 1.5,
            width: '800px',
            // // ease: Power2.easeInOut
          }).staggerFrom(el('.bottomnav ul li'), 2, {
            duration: 1,
            x: 1000,
            // // ease: Circ.easeInOut
          }, 0.08).from(el('.info'), 2, {
            duration: 1.5,
            y: 100,
            // // ease: Circ.easeInOut
          }).from(el('.name'), 2, {
            duration: 1.5,
            x: -600,
            // // ease: Circ.easeInOut
          })
    }, [])




    return (
        <div class="wrapper" ref={wrapper}>
        <div class="left"></div>
        <div class="right"></div>
    
        <nav class="nav">
          <ul>
            <li class="logo">unsplash</li>
            <li class="menu"><i class="fa fa-bars"></i></li>
            <li class="collection">collection</li>
            <li class="explore">explore</li>
            <li class="search">search</li>
            <li class="profile">
              <div class="img"></div>
            </li>
          </ul>
        </nav>
    
        <div class="content">
          <div class="img-wrapper">
            <div class="karina"></div>
          </div>
    
          {/* <div class="info">
            <ul>
              <li>unsplash.com</li>
              <li>@karinates</li>
              <li>karinates.com</li>
              <li><i class="fa fa-share-alt"></i></li>
            </ul>
          </div> */}
    
          <div class="text">
            <h1>John Ortega</h1>
            <p>Desarrollador Web</p>
          </div>
    
          <div class="name">John Ortega</div>
    
          <div class="bottomnav">
            <ul>
              <li>profile</li>
              <li>portfolio</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Home;