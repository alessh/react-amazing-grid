/**
 * Created by invader on 19.07.16.
 */

import React from 'react'

export default class Row extends React.Component {
    render () {
        let style = {
            marginRight: '-15px',
            marginLeft: '-15px',
            boxSizing: 'border-box'
        };

        return  <div style={style}>
                    <div style={{display: 'table'}}/>
                    {this.props.children}
                    <div style={{display: 'table', clear: 'both'}}/>
                </div>
    }
}
