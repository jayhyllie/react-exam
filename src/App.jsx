import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import StartPage from './pages/StartPage'
import MovieInfoPage from './pages/MovieInfoPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route path='/movieinfo/:title' element={<MovieInfoPage />} />
      </Routes>
    </Router>
  )
}

export default App
