import React from 'react'
import { Routes, Route} from 'react-router-dom'


// Import Components
import Home from './pages/Home'
import Cdd from './pages/Cdd'
import Wux from './pages/Wux'
import CDDStudent from './components/CDDStudent'
import WUXStudent from './components/WUXStudent'

const Links = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cdd" element={<Cdd />} />
        <Route path="/wux" element={<Wux />} />
        <Route path="/cdd/:id" element={<CDDStudent />} />
        <Route path="/wux/:id" element={<WUXStudent />} />
    </Routes>
  )
}

export default Links