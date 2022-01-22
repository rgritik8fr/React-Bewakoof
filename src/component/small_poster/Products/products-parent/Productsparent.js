import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Productsparent.css';


export class Productsparent extends Component {
    render() {
        return (
           <>
           <div className ={`${this.props.css}`}>
           <Link to={`${this.props.Link}`}>
               <div className={`${this.props.data === 'product-price' ? 'product-card' :''} card-img rounded`}>
                   <img src={this.props.img} alt="" className='rounded'/>
               </div>
               <div className ={`${this.props.data === 'product-price' ? 'd-none':''} text-center my-3 text-dark `}>
                   <h5>{this.props.content}</h5>
               </div>
               <div className="d-flex">
               <div className={`${this.props.data === 'category-box' ? 'd-none':''} text-dark mr-4`}>
                   <h5>{this.props.price}</h5>
               </div>

               <div className={`${this.props.data === 'category-box' ? 'd-none':''} text-dark ml-4`}>
                   <strike>{this.props.strike}</strike>
               </div>
               </div>
           </Link>
           </div>
           </>
        )
    }
}

export default Productsparent
