import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import playRoom from '../assets/playRoom.PNG'
import learning1 from '../assets/learning1.jpg'
import learning2 from '../assets/learning2.jpg'
import playTime from '../assets/playTime.webp'
import handsOnLearning1 from '../assets/handsOnLearning1.jpg'
import handsOnLearning2 from '../assets/handsOnLearning2.jpg'

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={playRoom} alt='playRoom' />
                    <p className="legend">My Play Room</p>
                </div>
                <div>
                    <img src={learning1} alt='learning' />
                    <p className="legend">Motor skills</p>
                </div>
                <div>
                    <img src={learning2} alt='learning' />
                    <p className="legend">Learning to Count</p>
                </div>
                <div>
                    <img src={handsOnLearning1} alt='hands on learning' />
                    <p className="legend">Fun in the class room</p>
                </div>
                <div>
                    <img src={handsOnLearning2} alt='hands on learning' />
                    <p className="legend">STEM and Curiosity</p>
                </div>
                <div>
                    <img src={playTime} alt='play time' />
                    <p className="legend">Play Time!</p>
                </div>
                
            </Carousel>
        );
    }
};


export default HomeCarousel