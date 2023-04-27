import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import StartPage from './pages/StartPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
      </Routes>
    </Router>
  )
}

export default App
