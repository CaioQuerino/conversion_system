import ConversorDParaR from './components/ConversorDParaR'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="App"> 
      <header>
          <Header />
      </header>
      <main>
          <ConversorDParaR />
      </main>
      <footer>
          <Footer />
      </footer>
    </div>
  )
}

export default App
