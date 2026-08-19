import React from 'react'
import heroImg from "../assets/hero.png"
import anambraLogo from "../assets/Anambra.png"

const profileCard = ({ bgColor, color, name, role, profileImg, age }) => {
  return (
    <div>
        <div className= { ` ${bgColor} h-40 w-60 p-5 rounded-3xl mt-4`} >
           <h2 className={`${color} text-3xl font-black`}>{name}</h2>
           <p>I am a {role} </p>
           <p>I am {age} years old </p>
            <img className='h-10 w-10' src={profileImg}/>
        </div>
    </div>
  )
}

export default profileCard
