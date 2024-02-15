import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
