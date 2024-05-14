import React, { Component } from 'react'
import Children from './Children'

interface State{
    name:string,
}
interface Props{

}
export default class Parent extends Component<Props,State > {
    constructor(props:Props){
        super(props)
            this.state={
                name:"Trang",
        }
    }
  render() {
    return (
      <div>Parent
       <Children></Children>
      </div>
    )
  }
}
