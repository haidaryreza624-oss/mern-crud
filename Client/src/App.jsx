import React from 'react'
import ListUser from './pages/ListUser'
import { Routes, Route } from 'react-router-dom'
import AddUser from './pages/AddUser'
import { Toaster } from "react-hot-toast";
function App() {

  return (
    <div>
      <Toaster position="top-right" />
      <Routes>

        <Route path="/" element={<ListUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<AddUser />} />

      </Routes>
    </div>
  )
}

export default App
