/**
 * Created by amazi on 28.07.2016.
 */

import React from 'react'

export default class FlexboxRow extends React.Component {
    render () {
        let style = {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '-15px',
            marginRight: '-15px',
            boxSizing: 'border-box'
        };

        return  <div style={style} {...this.props}>
            {this.props.children}
            <div style={{display: 'table', clear: 'both'}}/>
        </div>
    }
}
