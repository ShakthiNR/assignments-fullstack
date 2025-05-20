import { Content, Footer, Title } from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Title />
      <Content />
      <Footer />
    </>
  )
}

export default App
