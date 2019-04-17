import React from 'react';
import Link from 'next/link';
import { Button, ButtonToolbar, Carousel, Container } from 'react-bootstrap';

import { HeadContent } from '../components/HeadContent';
import NavBar from '../components/NavBar';

const Index = () => {
    return (
        <body>
            <HeadContent/>
            <NavBar />
            <section className="landing">
                <Carousel
                    controls={false}
                    indicators={false}
                >
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"
                            src="../static/background.png"
                        />
                        <Carousel.Caption>
                            <div className="landing-text">
                                <h1>MELVIN'S DEATHMATCH</h1>
                                <h4>A new and upcoming deathmatch server, built from the ground up.</h4>
                                <Button className="btn-sign-up" href="/register" variant="light">Sign Up</Button>                        
                                <Button className="btn-log-in" href="/login" variant="outline-light">Login</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="jumbotron">
                <Container>
                    <h2>Sign up, join the closed beta!</h2>
                    <p>
                        Have a chance to join the closed beta by signing up via the link below and help test the server.
                    </p>
                    <p>
                        <Button variant="secondary" href="https://beta.melvinsdm.com">Sign Up</Button>
                    </p>
                </Container>
            </section>
        </body>
    )
}

export default Index