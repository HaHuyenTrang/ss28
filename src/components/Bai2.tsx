import React, { Component } from 'react'
interface State{
    id:number,
    name:string,
    date:string,
    address:string,
}
interface Props{

}
export default class Bai2 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            id:2005,
            name:" Hà Huyền Trang",
            date:"15/06/2005",
            address:"Sơn la"
        }
    }
  render() {
    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        Id:{this.state.id} <br />
        Tên:{this.state.name} <br />
        Ngày sinh:{this.state.date} <br />
        Địa chỉ:{this.state.address} <br />
      </div>
    )
  }
}
