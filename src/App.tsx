import React from 'react'
// import Class from './components/Class'
import Function from './components/Function'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Parent from './components/Bai4/Parent'
import Cpncha from './components/Bai5/Cpncha'
import Papa from './components/Bai6/Papa'
// import  Children from './components/Bai4/Children'
export default function App() {
  return (
    <div>App
      <Function></Function>
      <h1>Bài 1</h1>
      <Bai1></Bai1>
      <h1>Bài 2</h1>
      <Bai2></Bai2>
      <h1>Bài 3</h1>
      <Bai3></Bai3>
      <h1>Bài 4</h1>
      <Parent></Parent>
      <h1>Bài 5</h1>
      <Cpncha></Cpncha>
      {/* <Children></Children> */}
      <h1>Bài 6</h1>
      <Papa></Papa>
    </div>
  )
}
