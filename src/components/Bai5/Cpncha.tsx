import React, { Component } from 'react'
import Cpncon from './Cpncon'
interface Props{
    
}
interface State{
    id:number,
    name:string,
    price:number,
    quantity:number,
}
export default class Cpncha extends Component<Props,State> {
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
        <Cpncon></Cpncon>
      </div>
    )
  }
}
