import React from 'react';
import '../App.css';

// Models
import { Bubbles } from '../Models/Bubbles';

// Components
import { ImageMain, NavBar, SideBar } from '../Components';
import FadeIn from 'react-fade-in';
import Particles from 'react-particles-js';

const Home = () => {
    return (
        <div>
            <FadeIn>
                <NavBar />
                <div className="flex">
                    <ImageMain />
                    <Particles className="black particles" params={(new Bubbles()).params} />
                    <SideBar className="sidebar  flex-stack"/>
                </div>
            </FadeIn>
        </div>
    )
}

export default Home;