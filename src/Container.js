/**
 * Created by invader on 19.07.16.
 */

import React from 'react'

export default class Container extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			width: 0
		};

		this.handleViewportWidth = this.handleViewportWidth.bind(this);
	}

	handleViewportWidth() {
		let self = this;
		self.setState({width: window.innerWidth});
	}

	componentDidMount() {
		window.addEventListener('load', this.handleViewportWidth);
		window.addEventListener('resize', this.handleViewportWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.handleViewportWidth);
		window.removeEventListener('resize', this.handleViewportWidth);
	}

	render() {
		let style = {
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
            boxSizing: 'border-box'
        };

		if(this.state.width > 1200) {
			style = Object.assign({}, style, {width: '1170px'});
		} else if(this.state.width > 992) {
            style = Object.assign({}, style, {width: '970px'});
		} else if(this.state.width > 768) {
            style = Object.assign({}, style, {width: '750px'});
		}

		return  <div style={style}>
                    {this.props.children}
                </div>
	}
}
