import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GuidelinePage from './pages/GuidelinePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guideline" element={<GuidelinePage />} />
    </Routes>
  )
}

export default App
