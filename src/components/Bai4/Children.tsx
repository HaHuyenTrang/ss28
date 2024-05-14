import React, { Component } from 'react'
// import Parent from './Parent'
interface State{
    name:string,
}
interface Props{

}
export default class Children extends Component<Props,State> {
    constructor(props:Props){
        super(props)
            this.state={
                name:"Trang",
        }
    }
  render() {
    return (
      <div>Children
        <br />
        Họ và tên bên component cha:{this.state.name} <br />
        Họ và tên bên component con:{this.state.name}

        
      </div>
    )
  }
}
