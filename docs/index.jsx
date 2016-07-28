import React from 'react';
import ReactDOM from 'react-dom';
import Fork from 'react-ghfork';

import {Container, Row, Col} from '../src/index'

import './main.css';
import 'react-ghfork/gh-fork-ribbon.css'

const project = 'Amazing-Space-Invader/react-amazing-grid';

ReactDOM.render(
    <div>
        <Fork project={project} className='right'/>
        <div className='header'>
            <h1>React-amazing-grid</h1>
            <p>WIP, don't use dat shit now.</p>
        </div>
        <div>
            <Container>
                <Row className='demo-row'>
                    <Col xs={1} sm={3} md={4} lg={6} xl={11} className='demo-col'>
                        <p className="demo-block">Col</p>
                    </Col>
                    <Col xs={1} sm={3} md={4} lg={6} xl={1} className='demo-col'>
                        <p className="demo-block">Col</p>
                    </Col>
                </Row>

                <Row className='demo-row'>
                    <Col className='demo-col'>
                        <p className="demo-block">Col</p>
                    </Col>
                    <Col className='demo-col'>
                        <p className="demo-block">Col</p>
                    </Col>
                    <Col className='demo-col'>
                        <p className="demo-block">Col</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>,
    document.getElementById('app')
);
