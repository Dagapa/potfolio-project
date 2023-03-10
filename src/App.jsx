import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContactForm } from './components/ContactForm/ContactForm'
import Nav from './components/Nav/Nav'
import { Main } from './components/Main/Main'
import { About } from './components/About/About'
import Projects from './components/projects/Projects'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
