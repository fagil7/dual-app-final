import { useState } from 'react' 
import './App.css'
import Clima from './components/Clima'
import Contador from './components/Contador'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Mi trabajo final</h1>
    <div className="App" id="principal">
        <Contador/>
        <Clima/>
        
    </div>
    </>
  )
}

export default App
