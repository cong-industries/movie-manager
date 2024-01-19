import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import list from './list';
import data from '../../daten.json';

function App() {
  const [count, setCount] = useState(0)

  //  <List elements={data} />  //  Zugriff auf Öoste ,ot Lartem

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
