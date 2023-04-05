import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Cart></Cart>
      <Toaster />
    </div>
  )
}

export default App
