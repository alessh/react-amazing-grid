# [React Amazing Grid](https://amazing-space-invader.github.io/react-amazing-grid/)
Flex grid with inline styles.

### Installation
    npm install react-amazing-grid --save

### Usage
```javascript
import {Container, Row, Col} from 'react-amazing-grid'

class Demo extends React.Component {
    render() {
        return  <div>
                    <Container>
                        <Row>
                            <Col xs={6} xsOffset={3}>
                                content here.
                            </Col>
                        </Row>
                    </Container>
                </div>
    }
}
```
