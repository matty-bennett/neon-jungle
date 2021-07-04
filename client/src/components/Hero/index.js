import React from 'react';
import '../../index.css'
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Gecko from '../../assets/hero/day-gecko.jpg';
import Lizard from '../../assets/hero/bearded-dragon.jpg';
import Snake from '../../assets/hero/rainbow-boa.jpg';
import Frog from '../../assets/hero/terribilis.jpg';
import Plant from '../../assets/hero/bromeliad.jpg';
import ViewAll from '../../assets/hero/view-all.jpg';

import { Link } from 'react-router-dom';
// import { useStoreContext } from '../../utils/GlobalState';
// import Category from '../Category';

function Hero(category) {
    const { _id } = category;
    // const [state, dispatch] = useStoreContext();
    // const { categories } = state;

    // const categoryId = categories.find((catId) => catId._id === _id);

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="hero-img"
                    src={Gecko}
                    alt="Giant Day Gecko"
                />
                <Carousel.Caption style={{
                    marginBottom: "2rem"
                }}>
                    <Button className="button-primary" href="#" size="lg" block>
                        <Link to={`/category/${_id}`}>View All Geckos</Link>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="hero-img"
                    src={Snake}
                    alt="Rainbow Boa"
                />

                <Carousel.Caption style={{
                    marginBottom: "2rem"
                }}>
                    <Button className="button-primary" href="#" size="lg" block>
                        <Link to={`/category/${_id}`}>View All Snakes</Link>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="hero-img"
                    src={Frog}
                    alt="Orange Terribilis"
                />

                <Carousel.Caption style={{
                    marginBottom: "2rem"
                }}>
                    <Button className="button-primary" href="#" size="lg" block>
                        <Link to={`/category/${_id}`}>View All Frogs</Link>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="hero-img"
                    src={Lizard}
                    alt="Bearded Dragon"
                />

                <Carousel.Caption style={{
                    marginBottom: "2rem"
                }}>
                    <Button className="button-primary" href="#" size="lg" block>
                        <Link to={`/category/${_id}`}>View All Lizards</Link>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="hero-img"
                    src={Plant}
                    alt="Bromeliad"
                />

                <Carousel.Caption style={{
                    marginBottom: "2rem"
                }}>
                    <Button className="button-primary" href="#" size="lg" block>
                        <Link to={`/category/${_id}`}>View All Plants</Link>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="hero-img"
                src={ViewAll}
                alt="jungle"
                />

                <Carousel.Caption style={{
                    marginBottom: "2rem"
                }}>
                <Button className="button-primary" href="#" size="lg" block>View All Categories</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Hero