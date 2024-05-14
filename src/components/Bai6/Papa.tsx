import React, { Component } from 'react'
import Baby from './Baby'
interface User{
    id:number,
    name:string,
    address:string,
    email:string,
}
interface State{
    users :User[];
}
export default class Papa extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state={
            users:[
                {id:1,name:"Trang",address:"Sơn La",email:"trang@gmail.com"}
            ]
        }
    }
    render() {
    return (
      <div>
        <Baby></Baby>
      </div>
    )
  }
}
