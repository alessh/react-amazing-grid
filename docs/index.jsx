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
        </div>
        <div className='demo-feature'>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Responsive</h2>
                        <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md, lg & xl viewport widths.</p>
                    </Col>
                </Row>
                <Row className='demo-row'>
                    <Col xs={2} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={8} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={2} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={6} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={6} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={8} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={4} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                </Row>
            </Container>
        </div>

        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Offsets</h2>
                        <p>Offset a column.</p>
                    </Col>
                </Row>
                <Row className='demo-row'>
                    <Col xs={1} xsOffset={11} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={3} xsOffset={9} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={5} xsOffset={7} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={7} xsOffset={5} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={9} xsOffset={3} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                    <Col xs={11} xsOffset={1} className='demo-col'>
                        <p className="demo-block"></p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>,
    document.getElementById('app')
);
