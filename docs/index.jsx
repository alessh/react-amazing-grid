import React from 'react';
import ReactDOM from 'react-dom';
import Fork from 'react-ghfork';

import {Container, Row, Col} from '../src/index'

//const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef

ReactDOM.render(
    <div>
        <Fork
            className="right"
            project={project}
            style={{
                backgroundColor: '#000'
            }}
        />
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                    <Col lg={12} md={6} sm={3} xs={1}>12, 6, 3, 1</Col>
                </Row>
            </Container>
        </div>
    </div>,
    document.getElementById('app')
);
