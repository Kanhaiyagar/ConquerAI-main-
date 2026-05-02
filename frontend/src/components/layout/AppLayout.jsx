import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header' 
import Footer from './Footer'

const AppLayout = ({children}) => {

  const [isSidebarOpen,setIsSidebarOpen]=useState(false)  

  const toggleSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout