import { useState } from 'react'
import './App.css'
import Produtos from './components/Produtos/Produtos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Produtos/>
    </div>
  )
}

export default App
