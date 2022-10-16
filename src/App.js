import React , {useState} from 'react';
import Room from './Room';
import './App.css'

export default function App() {

const [litDark, setLight] = useState('lit');

const lightSwitch = () => {
  setLight( light => light === 'lit' ? 'dark' : 'lit') // setLight(light=>!light)
}

  return (
    
      <div className={`room ${litDark}`}>
        <h1>Hi!</h1>
        <Room litDark = {litDark} lightSwitch ={lightSwitch}/>
      </div>
  )
}
