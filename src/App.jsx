import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import { FeedbackProvider } from './Context/FeedbackContext'


const App = () => {



  return (
    <FeedbackProvider>
      <Navbar />
      <div className='bg-[#C9E6F0] min-h-screen'>
        <Form />
        <ListGroup />
      </div>
    </FeedbackProvider>
  )
}

export default App