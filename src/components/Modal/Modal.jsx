import { useEffect, useState } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './style.module.css'

const Modal = ({ setShowModal }) => {

    const[showContent, setShowContent] = useState(false)

    // On Open
    useEffect(() => {
        setShowContent(true)
    }, [])

    // Handle Close Modal
    const closeModal = () => {
        setShowContent(false)
        setTimeout(() => {
            setShowModal(false)
        }, 500)    
    }

  return (
    <>
        <Backdrop showBackdrop={showContent} closeModal={closeModal} />
        {/* Modal */}
        <div className={`${classes.modal} ${showContent && classes.showModal}`}>
            {/* Close Btn */}
            <div onClick={closeModal} className={classes.closeBtn}>
                <span>&times;</span>  
            </div>  
             {/* Modal Content */}
             {/* Modal Header */}
             <div className={classes.modalHeader}>
                <h3>Web Dev</h3>
             </div>
              {/* Modal Body */}
              <div className={classes.modalBody}>
                <h1>Animated Modal in React</h1>
                <button onClick={closeModal}>More info</button>
            </div>
        </div>
    </>
  )
}

export default Modal