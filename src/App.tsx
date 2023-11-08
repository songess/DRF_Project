import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './pages/Login/Login'
import Friend from './pages/Friend/Friend'
import Chat from './pages/Chat/Chat'
import PreLogin from './pages/Login/PreLogin'
import Chatbot from './pages/Chatbot/Chatbot'
import More from './pages/More/More'
import Setting from './pages/Setting/Setting'
import SettingDetail from './pages/Setting/SettingDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PreLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/more" element={<More />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/setting/:detail" element={<SettingDetail/>} />
      </Routes>
    </Layout>
  )
}

export default App
