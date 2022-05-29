import React, { useState } from 'react'
import './Modal.scss'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Modal = ({open, children, onClose, justClose}) => {

    if (!open) return null


  return (
      <div className="frag">
      
    <div className="modal">
        <h2>Share your amazing story!</h2>
        <div className="modal__pic">
            <p>Upload your Picture</p>
            <div className="modal__pic-input">


            <input type="file" name="dp" id="modal__dp" />
                <AttachFileIcon />
            </div>
        </div>
        <div className="modal__name">
            <div className="modal__name-first">
                <p>First Name</p>
                <div className="modal__name-input">
                    <input type="text" name="firstname" id="modal__firstname" />
                </div>
            </div>
            <div className="modal__name-first last">
                <p>Last Name</p>
                <div className="modal__name-input">
                    <input type="text" name="lastname" id="modal__lastname" />
                </div>
            </div>
        
            </div>
        <div className="modal__story">
            <p>Share your Story</p>
                <div className="modal__story-input">
                    <textarea type="text" name="story" id="modal__story" />
                </div>

        </div>
        <div className="modal__cv">
            <p>What did you interact with Vasiti as?</p>
            <label className="app__flex">
                <input type="radio" name="interact_as" />
            <div  className="app__flex">


                <span></span>
            </div>
                Customer
            </label>
            <label className="app__flex">
                <input type="radio" name="interact_as" />
                <div  className="app__flex">

                
                <span></span>
                </div>
                Vendor
            </label>

        </div>
        <div className="modal__location">
        <p>City or Higher Institution (for Students)</p>
                <div className="modal__location-input">
                    <input type="text" name="location" id="modal__location" />
                </div>
        </div>
      
      <button onClick={onClose}>Share Your Story</button>
        
    </div>
    <div className="modal__overlay" onClick={justClose}></div>
      </div>
  )
}

export default Modal
