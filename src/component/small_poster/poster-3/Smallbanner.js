import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Smallbanner.css';
export class Smallbanner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                <div className ={this.props.col }>
                   <div className='small-banner'>
                   <Link to={this.props.cat}>
                        <img src={this.props.image} alt="" />
                        </Link>
                    </div>
                    </div>
             </>


        )
    }
}

export default Smallbanner
