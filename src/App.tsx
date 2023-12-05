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
import SignUp_1 from './pages/Login/SignUp_1'
import SignUp_2 from './pages/Login/SignUp_2'
import SignUp_3 from './pages/Login/SignUp_3'
import ChatbotMessage from './pages/Chatbot/ChatbotMessage'
import ChatbotSavedChat from './pages/Chatbot/ChatbotSavedChat'
import ReactHookForm from './pages/Login/LoginForm'
import FindFriend from './pages/Friend/FindFriend'
import NewChat from './pages/Chat/NewChat'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PreLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/newchat" element={<NewChat />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbotmessage" element={<ChatbotMessage />} />
        <Route path="/chatbotsavedchat" element={<ChatbotSavedChat />} />
        <Route path="/more" element={<More />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword_2" element={<ForgetPassword_2 />} />
        <Route path="/forgetpassword_3" element={<ForgetPassword_3 />} />
        <Route path="/signup_1" element={<SignUp_1 />} />
        <Route path="/signup_2" element={<SignUp_2 />} />
        <Route path="/signup_3" element={<SignUp_3 />} />
        <Route path="/setting/:detail" element={<SettingDetail />} />
        <Route path="/findfriend/:whichtofind" element={<FindFriend />} />
      </Routes>
    </Layout>
  )
}

export default App
