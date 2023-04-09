import React from 'react'
import DisplayChat from './DisplayChat'
import Navbar from "./Navbar"
import Search from "./Search"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search />
      <DisplayChat />
    </div>
  )
}

export default Sidebar;