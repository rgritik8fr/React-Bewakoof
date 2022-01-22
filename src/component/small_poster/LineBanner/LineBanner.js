import React, { Component } from 'react'
import "./LineBanner.css";
export class LineBanner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <div className = {`${this.props.col} Linebananer`}>
                <img src = {this.props.img} alt=""  className='w-100'/>
            </div>
            </>
        )
    }
}

export default LineBanner
