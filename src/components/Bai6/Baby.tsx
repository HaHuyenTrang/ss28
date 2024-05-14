import React, { Component } from 'react'
interface User{
    id:number,
    name:string,
    address:string,
    email:string,
}
interface State{
    users :User[];
}
export default class baby extends Component<{}, State> {
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
         {this.state.users.map(user => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Tên: {user.name}</p>
            <p>Địa chỉ: {user.address}</p>
            <p>email: {user.email}</p>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}
