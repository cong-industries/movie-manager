import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
          {/*
          <Layout>
              <Route exact path="/" render={() => <HomePage />} />
          </Layout>
          */}
      </Router>
  )
}

export default App
