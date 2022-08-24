import React from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import './style.css'

// REACT 18 VERSION
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

function App() {
  return(
    <div className="container">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App