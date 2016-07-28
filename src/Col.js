/**
 * Created by invader on 19.07.16.
 */

import React from 'react'

export default class FlexboxCol extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            width: 0,
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0
        };

        this.handleViewportWidth = this.handleViewportWidth.bind(this);
    }

    handleViewportWidth() {
        let self = this;
        self.setState({width: window.innerWidth});
        self.setState({xs: this.props.xs});
        self.setState({sm: this.props.sm});
        self.setState({md: this.props.md});
        self.setState({lg: this.props.lg});
        self.setState({xl: this.props.xl});
    }

    componentDidMount() {
        window.addEventListener('load', this.handleViewportWidth);
        window.addEventListener('resize', this.handleViewportWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleViewportWidth);
        window.removeEventListener('resize', this.handleViewportWidth);
    }

    render () {
        let style = {
            position: 'relative',
            maxWidth: '100%',
            flexBasis: '0',
            flexGrow: '1',
            minHeight: '1px',
            paddingRight: '15px',
            paddingLeft: '15px',
            boxSizing: 'border-box'
        };

        if(this.state.width > 1200) {
            switch (this.state.xl) {
                case 1:
                    style = Object.assign({}, style, {flex: '0 0 8.33333333%', maxWidth: '8.33333333%'});
                    break;

                case 2:
                    style = Object.assign({}, style, {flex: '0 0 16.66666667%', maxWidth: '16.66666667%'});
                    break;

                case 3:
                    style = Object.assign({}, style, {flex: '0 0 25%', maxWidth: '25%'});
                    break;

                case 4:
                    style = Object.assign({}, style, {flex: '0 0 33.33333333%', maxWidth: '33.33333333%'});
                    break;

                case 5:
                    style = Object.assign({}, style, {flex: '0 0 41.66666667%', maxWidth: '41.66666667%'});
                    break;

                case 6:
                    style = Object.assign({}, style, {flex: '0 0 50%', maxWidth: '50%'});
                    break;

                case 7:
                    style = Object.assign({}, style, {flex: '0 0 58.33333333%', maxWidth: '58.33333333%'});
                    break;

                case 8:
                    style = Object.assign({}, style, {flex: '0 0 66.66666667%', maxWidth: '66.66666667%'});
                    break;

                case 9:
                    style = Object.assign({}, style, {flex: '0 0 75%', maxWidth: '75%'});
                    break;

                case 10:
                    style = Object.assign({}, style, {flex: '0 0 83.33333333%', maxWidth: '83.33333333%'});
                    break;

                case 11:
                    style = Object.assign({}, style, {flex: '0 0 91.66666667%', maxWidth: '91.66666667%'});
                    break;

                case 12:
                    style = Object.assign({}, style, {flex: '0 0 100%', maxWidth: '100%'});
                    break;
            }
        } else if(this.state.width > 992) {
            switch (this.state.lg) {
                case 1:
                    style = Object.assign({}, style, {flex: '0 0 8.33333333%', maxWidth: '8.33333333%'});
                    break;

                case 2:
                    style = Object.assign({}, style, {flex: '0 0 16.66666667%', maxWidth: '16.66666667%'});
                    break;

                case 3:
                    style = Object.assign({}, style, {flex: '0 0 25%', maxWidth: '25%'});
                    break;

                case 4:
                    style = Object.assign({}, style, {flex: '0 0 33.33333333%', maxWidth: '33.33333333%'});
                    break;

                case 5:
                    style = Object.assign({}, style, {flex: '0 0 41.66666667%', maxWidth: '41.66666667%'});
                    break;

                case 6:
                    style = Object.assign({}, style, {flex: '0 0 50%', maxWidth: '50%'});
                    break;

                case 7:
                    style = Object.assign({}, style, {flex: '0 0 58.33333333%', maxWidth: '58.33333333%'});
                    break;

                case 8:
                    style = Object.assign({}, style, {flex: '0 0 66.66666667%', maxWidth: '66.66666667%'});
                    break;

                case 9:
                    style = Object.assign({}, style, {flex: '0 0 75%', maxWidth: '75%'});
                    break;

                case 10:
                    style = Object.assign({}, style, {flex: '0 0 83.33333333%', maxWidth: '83.33333333%'});
                    break;

                case 11:
                    style = Object.assign({}, style, {flex: '0 0 91.66666667%', maxWidth: '91.66666667%'});
                    break;

                case 12:
                    style = Object.assign({}, style, {flex: '0 0 100%', maxWidth: '100%'});
                    break;
            }
        } else if(this.state.width > 768) {
            switch (this.state.md) {
                case 1:
                    style = Object.assign({}, style, {flex: '0 0 8.33333333%', maxWidth: '8.33333333%'});
                    break;

                case 2:
                    style = Object.assign({}, style, {flex: '0 0 16.66666667%', maxWidth: '16.66666667%'});
                    break;

                case 3:
                    style = Object.assign({}, style, {flex: '0 0 25%', maxWidth: '25%'});
                    break;

                case 4:
                    style = Object.assign({}, style, {flex: '0 0 33.33333333%', maxWidth: '33.33333333%'});
                    break;

                case 5:
                    style = Object.assign({}, style, {flex: '0 0 41.66666667%', maxWidth: '41.66666667%'});
                    break;

                case 6:
                    style = Object.assign({}, style, {flex: '0 0 50%', maxWidth: '50%'});
                    break;

                case 7:
                    style = Object.assign({}, style, {flex: '0 0 58.33333333%', maxWidth: '58.33333333%'});
                    break;

                case 8:
                    style = Object.assign({}, style, {flex: '0 0 66.66666667%', maxWidth: '66.66666667%'});
                    break;

                case 9:
                    style = Object.assign({}, style, {flex: '0 0 75%', maxWidth: '75%'});
                    break;

                case 10:
                    style = Object.assign({}, style, {flex: '0 0 83.33333333%', maxWidth: '83.33333333%'});
                    break;

                case 11:
                    style = Object.assign({}, style, {flex: '0 0 91.66666667%', maxWidth: '91.66666667%'});
                    break;

                case 12:
                    style = Object.assign({}, style, {flex: '0 0 100%', maxWidth: '100%'});
                    break;
            }
        } else if(this.state.width > 544) {
            switch (this.state.sm) {
                case 1:
                    style = Object.assign({}, style, {flex: '0 0 8.33333333%', maxWidth: '8.33333333%'});
                    break;

                case 2:
                    style = Object.assign({}, style, {flex: '0 0 16.66666667%', maxWidth: '16.66666667%'});
                    break;

                case 3:
                    style = Object.assign({}, style, {flex: '0 0 25%', maxWidth: '25%'});
                    break;

                case 4:
                    style = Object.assign({}, style, {flex: '0 0 33.33333333%', maxWidth: '33.33333333%'});
                    break;

                case 5:
                    style = Object.assign({}, style, {flex: '0 0 41.66666667%', maxWidth: '41.66666667%'});
                    break;

                case 6:
                    style = Object.assign({}, style, {flex: '0 0 50%', maxWidth: '50%'});
                    break;

                case 7:
                    style = Object.assign({}, style, {flex: '0 0 58.33333333%', maxWidth: '58.33333333%'});
                    break;

                case 8:
                    style = Object.assign({}, style, {flex: '0 0 66.66666667%', maxWidth: '66.66666667%'});
                    break;

                case 9:
                    style = Object.assign({}, style, {flex: '0 0 75%', maxWidth: '75%'});
                    break;

                case 10:
                    style = Object.assign({}, style, {flex: '0 0 83.33333333%', maxWidth: '83.33333333%'});
                    break;

                case 11:
                    style = Object.assign({}, style, {flex: '0 0 91.66666667%', maxWidth: '91.66666667%'});
                    break;

                case 12:
                    style = Object.assign({}, style, {flex: '0 0 100%', maxWidth: '100%'});
                    break;
            }
        } else {
            switch (this.state.xs) {
                case 1:
                    style = Object.assign({}, style, {flex: '0 0 8.33333333%', maxWidth: '8.33333333%'});
                    break;

                case 2:
                    style = Object.assign({}, style, {flex: '0 0 16.66666667%', maxWidth: '16.66666667%'});
                    break;

                case 3:
                    style = Object.assign({}, style, {flex: '0 0 25%', maxWidth: '25%'});
                    break;

                case 4:
                    style = Object.assign({}, style, {flex: '0 0 33.33333333%', maxWidth: '33.33333333%'});
                    break;

                case 5:
                    style = Object.assign({}, style, {flex: '0 0 41.66666667%', maxWidth: '41.66666667%'});
                    break;

                case 6:
                    style = Object.assign({}, style, {flex: '0 0 50%', maxWidth: '50%'});
                    break;

                case 7:
                    style = Object.assign({}, style, {flex: '0 0 58.33333333%', maxWidth: '58.33333333%'});
                    break;

                case 8:
                    style = Object.assign({}, style, {flex: '0 0 66.66666667%', maxWidth: '66.66666667%'});
                    break;

                case 9:
                    style = Object.assign({}, style, {flex: '0 0 75%', maxWidth: '75%'});
                    break;

                case 10:
                    style = Object.assign({}, style, {flex: '0 0 83.33333333%', maxWidth: '83.33333333%'});
                    break;

                case 11:
                    style = Object.assign({}, style, {flex: '0 0 91.66666667%', maxWidth: '91.66666667%'});
                    break;

                case 12:
                    style = Object.assign({}, style, {flex: '0 0 100%', maxWidth: '100%'});
                    break;
            }
        }

        return  <div style={style} {...this.props}>{this.props.children}</div>
    }
}
