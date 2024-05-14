import React, { Component } from 'react'
interface State{
    name:string
}
interface Props{

}
export default class Bai1 extends Component<Props,State > {
    constructor(props:Props){
        super(props)
        this.state ={
            name:" Hà Huyền Trang",
        }
    }
  render() {
    return (
      <div>
       họ và tên: {this.state.name}
      </div>
    )
  }
}
