import React from 'react'
import ListUser from './pages/ListUser'
import { Routes, Route } from 'react-router-dom'
import AddUser from './pages/AddUser'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/add" element={<AddUser />} />

      </Routes>
    </div>
  )
}

export default App
