import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <h1>Cetin Kaan Taskingenc</h1>
      <p>
        Welcome to my public website.
        Insted of an terminal website like the one I had before, I wanted to craft something that is minimal, efortless to add content to and easily readable by everyone, 
        thus this website was born.
        </p>
      <h2>About</h2>
    </>
  )
}

export default App
