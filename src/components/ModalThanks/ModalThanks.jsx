import React from 'react'
import './ModalThanks.scss'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ModalThanks = ({open, children, onClose}) => {

    if (!open) return null

  return (
      <div className="frag">
      
    <div className="modalthanks">
       <div className="modalthanks__circle app__flex">🎉</div>
       <h3>Thank you for<br/>sharing your story!</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <button onClick={onClose}>Close</button>

    </div>

    <div className="modal__overlay" ></div>
      </div>
  )
}

export default ModalThanks
