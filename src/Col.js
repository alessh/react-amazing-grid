/**
 * Created by invader on 19.07.16.
 */

import React from 'react'

export default class FlexboxCol extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            width: 0,
            maxCols: 12,
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0,
            xsOffset: 0,
            smOffset: 0,
            mdOffset: 0,
            lgOffset: 0,
            xlOffset: 0
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
        self.setState({xsOffset: this.props.xsOffset});
        self.setState({smOffset: this.props.smOffset});
        self.setState({mdOffset: this.props.mdOffset});
        self.setState({lgOffset: this.props.lgOffset});
        self.setState({xlOffset: this.props.xlOffset});
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

        function makeObject(xs, sm, md, lg, xl) {
            return {
                'xl': xl,
                'lg': lg,
                'md': md,
                'sm': sm,
                'xs': xs
            }
        }

        /*
        *   Принимает объект и брейкпоинт, перебирает объект до первого не
        *   нулевого значения. Начинает считать с брейкпоинта.
        *   params: obj - объект
        *           bp - строка, ключ обхекта, с которого начинать отсчет
        * */

        function getSize(obj, bp = 'xl') {
            for(var i = 0; i < Object.keys(obj).length; i++) {
                if (Object.keys(obj)[i] == bp) {
                    for(i; i < Object.keys(obj).length; i++) {
                        if (obj[Object.keys(obj)[i]] != false) {
                            return obj[Object.keys(obj)[i]];
                        }
                    }
                }
            }
        }

        function makeCol(maxWidth, colSize) {
            let width = 100 / (maxWidth / colSize);
            style = Object.assign({}, style, {flex: '0 0'+width+'%', maxWidth: width+'%'});
            return style;
        }

        function makeColOffset(maxWidth, offsetSize) {
            let width = 100 / (maxWidth / offsetSize);
            style = Object.assign({}, style, {marginLeft: width+'%'});
            return style;
        }

        if(this.state.width > 1200) {

            let colSize = makeObject(
                this.props.xs,
                this.props.sm,
                this.props.md,
                this.props.lg,
                this.props.xl);

            let offsetSize = makeObject(
                this.props.xsOffset,
                this.props.smOffset,
                this.props.mdOffset,
                this.props.lgOffset,
                this.props.xlOffset);

            makeCol(this.state.maxCols, getSize(colSize, 'xl'));
            makeColOffset(this.state.maxCols, getSize(offsetSize, 'xl'));
        } else if(this.state.width > 992) {

            let colSize = makeObject(
                this.props.xs,
                this.props.sm,
                this.props.md,
                this.props.lg,
                this.props.xl);

            let offsetSize = makeObject(
                this.props.xsOffset,
                this.props.smOffset,
                this.props.mdOffset,
                this.props.lgOffset,
                this.props.xlOffset);

            makeCol(this.state.maxCols, getSize(colSize, 'lg'));
            makeColOffset(this.state.maxCols, getSize(offsetSize, 'lg'));
        } else if(this.state.width > 768) {

            let colSize = makeObject(
                this.props.xs,
                this.props.sm,
                this.props.md,
                this.props.lg,
                this.props.xl);

            let offsetSize = makeObject(
                this.props.xsOffset,
                this.props.smOffset,
                this.props.mdOffset,
                this.props.lgOffset,
                this.props.xlOffset);

            makeCol(this.state.maxCols, getSize(colSize, 'md'));
            makeColOffset(this.state.maxCols, getSize(offsetSize, 'md'));
        } else if(this.state.width > 544) {

            let colSize = makeObject(
                this.props.xs,
                this.props.sm,
                this.props.md,
                this.props.lg,
                this.props.xl);

            let offsetSize = makeObject(
                this.props.xsOffset,
                this.props.smOffset,
                this.props.mdOffset,
                this.props.lgOffset,
                this.props.xlOffset);

            makeCol(this.state.maxCols, getSize(colSize, 'sm'));
            makeColOffset(this.state.maxCols, getSize(offsetSize, 'sm'));
        } else if(this.state.width < 544) {

            let colSize = makeObject(
                this.props.xs,
                this.props.sm,
                this.props.md,
                this.props.lg,
                this.props.xl);

            let offsetSize = makeObject(
                this.props.xsOffset,
                this.props.smOffset,
                this.props.mdOffset,
                this.props.lgOffset,
                this.props.xlOffset);

            makeCol(this.state.maxCols, getSize(colSize, 'xs'));
            makeColOffset(this.state.maxCols, getSize(offsetSize, 'xs'));
        }

        return  <div style={style} {...this.props}>{this.props.children}</div>
    }
}
