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
import ForgetPassword from './pages/Login/ForgetPassword'
import ForgetPassword_2 from './pages/Login/ForgetPassword_2'
import ForgetPassword_3 from './pages/Login/ForgetPassword_3'

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
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword_2" element={<ForgetPassword_2 />} />
        <Route path="/forgetpassword_3" element={<ForgetPassword_3 />} />
        <Route path="/setting/:detail" element={<SettingDetail/>} />
      </Routes>
    </Layout>
  )
}

export default App
