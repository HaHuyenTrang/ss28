import React, { Component } from 'react'
interface Props{
    
}
interface State{
    id:number,
    name:string,
    price:number,
    quantity:number,
}
export default class Cpncon extends Component<Props,State> {
    constructor(props:Props){
        super(props)
         this.state ={
            id:1,
            name:"ABC",
            price: 200,
            quantity: 5
        }
       }
  render() {
    return (
      <div>
        id: {this.state.id} <br />
        tên: {this.state.name} <br />
        price: {this.state.price} <br />
        quantity: {this.state.quantity}
      </div>
    )
  }
}
