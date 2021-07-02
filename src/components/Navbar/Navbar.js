import { useEffect } from 'react'
import gsap from 'gsap';
import styled from 'styled-components';
import { MdHome, MdContactPhone } from 'react-icons/md';
import { GiShatteredGlass } from 'react-icons/gi';
import { GoCalendar } from 'react-icons/go';
import { Link } from 'react-router-dom'
import { CHAR_0 } from 'picomatch/lib/constants';

const links = [
    {
        id: 1,
        path: "/",
        icon: <MdHome size="5rem" />,
        ariaLabel: 'Home Page'
    },
    {
        id: 2,
        path: "/drinks",
        icon: <GiShatteredGlass size="5rem" />,
        ariaLabel: 'Go to drinks menu page'
    },
    {
        id: 3,
        path: "/events",
        icon: <GoCalendar size="5rem" />,
        ariaLabel: 'Go to events page'
    },
    {
        id: 4,
        path: "/contact",
        icon: <MdContactPhone size="5rem" />,
        ariaLabel: 'Go to contact page'
    },

];

const Wrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 17.5vw;
    height: 100vh;

    nav {
        width: 0%;
        height: 100%;
        background: rgba(0,0,0,1);
    }
    .btnBox {
        width: 0%;
        height: 5rem;
        background: rgba(0,0,0,1);
        margin: 0 auto;
    }
    ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    li {
        margin-top: -5rem;
    }
    a{
        color: #fff;
        border-bottom: rgba.2rem solid transparent;
        transition: .3s ease border;
    }
    a:hover {
        color: lightskyblue;
        border-bottom: .2rem solid white;
    }
    button {
        font-size: 3rem;
        color: white;
        background: transparent;
        z-index: 4;
        border: none;
        padding: .5rem 1rem;
        cursor: pointer;
    }
    @media(max-width:1200px){
        a{
            font-size: 2.2rem;
        }
        button {
            font-size: 3.2rem;
        }
    }
    @media(max-width: 991px){
        width: 50vw;
        .btnBox{
            margin: 0
        }
        a{
            font-size: 2.2rem;
        }
        button {
            font-size: 3rem;
        }
    }
    @media(max-width: 767px){
        a{
            font-size: 1.9rem;
        }
        button {
            font-size: 2.8rem;
        }
    }
    @media(max-width: 575px){
        a{
            font-size: 2.4rem;
        }
        button {
            font-size: 2.4rem;
        }
    }
`

const Navbar = () => {
    const tl = gsap.timeline({ paused: true });

    useEffect(() => {
        tl.to('nav, .btnBox', .5, {
            width: '100%',
            ease: 'expo.Out'
        }).from('li', .25, {
            opacity: 0,
            x: -125,
            stagger: .25
        })
        tl.from('.close', .05, {
            display: "none",
            delay: .1
        }).to('.open', .05, {
            display: "none",
            delay: -.1
        })
    });


    return (
        <Wrap>
            <div className="btnBox">
                <button className="close" onClick={() => tl.reverse()}>close</button>
                <button className="open" onClick={() => tl.play()}>open</button>
            </div>
            <nav>
                <ul>
                    {
                        links.map(item => (
                            <li key={item.id}><a href={item.path} aria-label={item.ariaLabel}>{item.icon}</a></li>
                        ))
                    }
                </ul>
            </nav>
        </Wrap>
    )
}

export default Navbar
