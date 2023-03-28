import { useState } from 'react'
import Modal from './components/Modal/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <div className="app">
      {showModal && <Modal setShowModal={setShowModal} />}
      <button onClick={openModal} className='open-btn'>Open Modal</button>
    </div>
  )
}

export default App
