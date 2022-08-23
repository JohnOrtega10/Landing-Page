import React from 'react';
import {useEffect} from 'react'
import {gsap, Power4, Elastic} from 'gsap'
import './style.css'

const Page = () => {

    // Acceder a varios elementos
    const timeLine = gsap.timeline({defaults:{
        opacity:0, 
        y:50, 
        duration:1, 
        ease: Power4.easeOut
        // ease: Elastic.easeOut.config(1,0.3)
    },})
    // Easing para suavizar las animaciones
    // https://greensock.com/docs/v2/Easing

    useEffect(()=>{
        // gsap.from
        // Pasar estilos dados con GSAP a nuestros estilos CSS
        // gsap.to
        // Pasar de un estilo que dimos con CSS a estilos creados con GSAP

        // const titulo = document.querySelector('.titulo')
        // gsap.from(titulo, { opacity: 0, y:50,duration:3,})
        
        
        const titulos1 = document.querySelectorAll('.titulo')
        const titulos2 = document.querySelectorAll('.titulo2')
        const images = document.querySelectorAll('.imagen')
        timeLine.from(titulos1, {
            x:50,
            stagger:0.3, //encadenar animaciones, tiempo en que aparezca la otra
        }).from(titulos2,{
            x: -50,
            stagger:0.3
        }, "-=1.3") //No inicie esta animacion al terminar la anterior, si no,  se ejecute un tiempo antes
        .from(images, {y:60, stagger:0.3}, "-=1.5")

    },[])


    return (
        <div className='container'>
            <div className="wrapper">
                <div className="info">
                    <div className="center-info">
                        <h2 className='titulo'>Welcome to</h2>
                        <h2 className='titulo2'>Introduccion</h2>
                        <h1 className='titulo'>GSAP</h1>
                        <h2 className='titulo2'>+</h2>
                        <h1 className='titulo'>React</h1>
                        <p className='titulo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus doloremque, est amet quo nemo maxime! Excepturi quae id veritatis sed.</p>
                        <button 
                            className='titulo2'
                            // timeLine.reversed(), retorna true si ya se ejecuto en reversa o false si no
                            onClick={()=>{timeLine.reversed() ? timeLine.play(): timeLine.reverse()}}     
                        >GetStarted</button>

                    </div>
                </div>
                <div className="imagenes">
                    <div className="colum1">
                        <img className = 'imagen' src="./imgs/img1.jpg" alt="" />
                    </div>
                    <div className="colum2">
                        <img className = 'imagen' src="./imgs/img2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;