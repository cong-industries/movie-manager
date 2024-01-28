import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from './button'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
      //
      // <Router>
      //     <Layout>
      //         <Route exact path="/" render={() => <HomePage />} />
      //         <Route exact path="/about" render={() => <AboutPage />} />
      //     </Layout>
      // </Router>
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <h3>TestButtonComponent 1</h3>  
        <Button 
          border="none"
          color="black"
          height = "50px"
          onClick={() => setCount((count) => count + 1)}
          radius = "25%"
          width = "200px"
          children = {"count is " + count}
        />

        <h3>TestButtonComponent 2</h3>  
        <Button 
          border="none"
          color="DarkBlue"
          height = "50px"
          onClick={() => setCount2((count2) => count2 + 1)}
          radius = "2%"
          width = "200px"
          children = {"count2 is " + count2}
        />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
