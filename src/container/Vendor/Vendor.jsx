import React, { useState } from 'react'
import { Modal, ModalThanks } from '../../components';
import './Vendor.scss'

const Vendor = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isThanks, setIsThanks] = useState(false)


    const onClose = () => {
        setIsThanks(true)
        setIsOpen(false)

    }

  return (
    <div className="vendor app__flex">
     
      <div className="vendor__content app__flex">
        <h3 className="bold-text">Josiah’s Experience</h3>
        <p className="vendor__content-vendor">VENDOR</p>
        <p className="p-text vendor__content-content">I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
        <div className="vendor__content-share">
            <p onClick={() => setIsOpen(true)}>Share your own story!</p>
      
            <div />
        </div>
      </div>

      <div className="vendor__image app__flex">
        <div className="vendor__image-circle">
        <div className="vendor__image-container"></div>

        </div>
      </div>
      <Modal open={isOpen} onClose={onClose} justClose={() => setIsOpen(false)}/>
      <ModalThanks open={isThanks} onClose={() => setIsThanks(false)}/>

    </div>
  )
}

export default Vendor
