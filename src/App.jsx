import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import StartPage from './pages/StartPage'
import MovieInfoPage from './pages/MovieInfoPage'
import Watched from './pages/Watched'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route path='/movieinfo' element={<MovieInfoPage />} />
        <Route path='/watched' element={<Watched />} />
      </Routes>
    </Router>
  )
}

export default App
