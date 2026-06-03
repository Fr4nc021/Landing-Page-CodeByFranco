import './App.css'
import Header from './components/Header'
import Home from './sections/Home/Home'
import Sobre from './sections/Sobre/Sobre'
import Trabalhos from './sections/Trabalhos/Trabalhos'
import Pacotes from './sections/Pacotes/Pacotes'
import Contato from './sections/Contato/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Header />
      <Home />
      <Sobre />
      <Trabalhos />
      <Pacotes />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
