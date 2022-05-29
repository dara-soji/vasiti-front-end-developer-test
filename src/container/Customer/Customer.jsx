import React, { useState } from 'react'
import './Customer.scss'
import { Modal, ModalThanks } from '../../components';


const Customer = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isThanks, setIsThanks] = useState(false)

    const onClose = () => {
        setIsThanks(true)
        setIsOpen(false)

    }
  return (
    <div className="customer app__flex">
      <div className="customer__image app__flex">
        <div className="customer__image-circle">
        <div className="customer__image-container"></div>

        </div>
      </div>
      <div className="customer__content app__flex">
        <h3 className="bold-text">Tolu & Joy’s Experience</h3>
        <p className="customer__content-customer">CUSTOMER</p>
        <p className="p-text customer__content-content">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
        <div className="customer__content-share">
            <p onClick={() => setIsOpen(true)}>Share your own story!</p>
      
            <div />
        </div>
      </div>

      <Modal open={isOpen} onClose={onClose} justClose={() => setIsOpen(false)}/>
        <ModalThanks open={isThanks} onClose={() => setIsThanks(false)}/>
       

    </div>
  )
}

export default Customer
