import React, { Component } from 'react'
interface User{
    id:number,
    name:string,
    address:string,
}
interface State{
    users :User[];
}
export default class Bai3 extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
           users:[
            { id:1,name:"Hà Huyền Trang",address: 'Hà Nội'},
            { id:2,name:"Hà Bảo Châu",address: 'Sơn La'},
           ]
        };
    }
  render() {
    let {users}= this.state
    return (
      <div>
         {users.map(user => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Tên: {user.name}</p>
            <p>Địa chỉ: {user.address}</p>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}
