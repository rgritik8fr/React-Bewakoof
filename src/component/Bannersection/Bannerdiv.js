import React, { Component } from 'react'
import './Bannerdiv.css'

export class Bannerdiv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
          return (
       <>
       {
this.props.details.map(el=><div key={el.id} className={`${el.size==12?'col-12 parent':'col-4 smallbox mt-3 px-3'} `} style={{background:`url(${el.img})`,
backgroundPosition:'center',
backgroundSize:'cover'}}>
<div className="containt">
    <div className="tile   p-3">
       
    </div>
</div>
</div>)
       }
       
       </>
        )
    }
}

export default Bannerdiv
