import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="banner">
            <Container>
            <div className="banner-content">
                <h1>Welcome to Our Hospital</h1>
                    <p className="w-50">How can we help you ? What's your problem describe now or set an appoint to our experiance doctor</p>
                    <Link className="appo-btn">Set An Appoinment</Link>
            </div>
            </Container>
        </div>
    );
};

export default Home;