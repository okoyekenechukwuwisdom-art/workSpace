import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProfileCard from './components/profileCard'
import anambraLogo from "./assets/Anambra.png"
import LikeButton from './components/LikeButton'
import Counter from './components/counter'
import StudentsData from './components/StudentsData'
import SignUpForm from './components/SignUpForm'
import Posts from './components/Posts'
import { Routes } from 'react-router-dom'


function App() {

  const myName = "John Doe"
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    
   /*  <Route path='/post' element = {<Posts/>}></Route> */
   <div className={`App p-6  h-screen bg-[#f0f0f0]`}>
     <Posts/>
      {/* <SignUpForm/>
      
      
      <ProfileCard name= "Kene" role="Frontend Developer" age="35" profileImg={anambraLogo}/>
      <ProfileCard name= "Okoye" role="Frontend Developer" age="29" profileImg={heroImg}/>
      <ProfileCard name= "Wisdom" role="Frontend Developer" age="44" profileImg={anambraLogo}/> 

      <Counter/>
      <LikeButton/>
      <StudentsData/> */}
    </div>
    
  )
    
}
export default App
