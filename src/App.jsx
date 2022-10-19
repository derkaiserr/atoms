import React from 'react'
import Header from './header'
import Sectionone from './Sectionone'
import Two from './Two'
import Four from './Four'
import './App.css'
import Data from './Data'
import Data2 from './Data2'
import Three from './Three'
import Five from './Five'
import Six from './Six'
import Footer from "./Footer"

function App() {

  const cards = Data.map(item => {
    return (<Two key = {item.id}
                 {...item} />
                 )
   })
  const cardss = Data2.map(item => {
    return (<Four key = {item.id}
                 {...item} />
                 )
   })

  return (
    <div className="App">
     <Header />
     <Sectionone />
    <section className='cards'>{cards}</section>
    <Three />
    <section className='cards'>{cardss}</section>
    <Five />
    <Six />
    <Footer />
    </div>
  )
}

export default App
