import React from 'react'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Profile from './components/Profile'
import './App.css'

const App = () => {
  return (
    <div className='dashboard'>
      <SideBar />
      <div className="dashboard--content">
        <Content/>
        <Profile/>

      </div>
    </div>
  )
}

export default App

