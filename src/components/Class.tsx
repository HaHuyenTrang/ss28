import React, { Component } from 'react'
interface Props{

}
interface State{
    name:string,
    age:number
}
export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            name:"Trang",
            age:18,
        }
    }
  render() {
    return (
      <div>class
        {this.state.name}
        {this.state.age}
      </div>
    )
  }
}
