import { useState } from 'react'
import './styles/index.css'

import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button />
      <Button variant="filled-button"/>
    </div>
  )
}

export default App
