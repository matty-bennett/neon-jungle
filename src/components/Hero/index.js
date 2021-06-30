import React from 'react';
import '../../index.css'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Gecko from '../../assets/hero/day-gecko.jpg';
import Lizard from '../../assets/hero/bearded-dragon.jpg';
import Snake from '../../assets/hero/rainbow-boa.jpg';
import Frog from '../../assets/hero/terribilis.jpg';
import Plant from '../../assets/hero/bromeliad.jpg';

function Hero() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="hero-img"
                src={Gecko}
                alt="Giant Day Gecko"
                />
                <Carousel.Caption>
                <Button className="button-primary" href="#" size="lg" block>View All Geckos</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="hero-img"
                src={Snake}
                alt="Rainbow Boa"
                />

                <Carousel.Caption>
                <Button className="button-primary" href="#" size="lg" block>View All Snakes</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="hero-img"
                src={Frog}
                alt="Orange Terribilis"
                />

                <Carousel.Caption>
                <Button className="button-primary" href="#" size="lg" block>View All Frogs</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="hero-img"
                src={Lizard}
                alt="Bearded Dragon"
                />

                <Carousel.Caption>
                <Button className="button-primary" href="#" size="lg" block>View All Lizards</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="hero-img"
                src={Plant}
                alt="Bromeliad"
                />

                <Carousel.Caption>
                <Button className="button-primary" href="#" size="lg" block>View All Plants</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Hero