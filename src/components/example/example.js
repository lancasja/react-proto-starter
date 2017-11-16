import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import './example.scss';

export default class Example extends Component {

    // Need this for GSAP to work
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Could also use refs instead of CSS selector
    handleClick() {
        TweenMax.to('.redBox', 1, {width: '700px'});
    }

    render() {
        return(
            <div
                className={'redBox'}
                onClick={this.handleClick}>
            </div>
        );
    }
}