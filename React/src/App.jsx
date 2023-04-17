import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    <div>
      <h1>This is Main</h1>
    </div>
    </Layout>
  )
}

export default App
