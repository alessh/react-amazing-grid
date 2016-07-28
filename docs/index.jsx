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
                    <Col lg={3} md={6} sm={12} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                </Row>

                <Row className='demo-row'>
                    <Col lg={4} md={6} sm={6} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={4} md={3} sm={6} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={4} md={3} sm={12} xs={12} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                </Row>

                <Row className='demo-row'>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                    <Col lg={1} md={3} sm={6} xs={2} className='demo-col'>
                        <p className='demo-block'>Col</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>,
    document.getElementById('app')
);
