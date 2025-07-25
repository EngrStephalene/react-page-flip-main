import React, {useState} from 'react'
import RsvpModal from './RsvpModal'
import { Fab } from '@mui/material';
import "./style.css";

const RsvpPage = () => {
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);

  const handleModalOpen = () => {
    console.log("Open modal button is clicked.")
    setRsvpModalOpen(true)
  }

  return (
    <div className="rsvp-page">
      <div className='rsvp-content'>
        <h2>RSVP Invitation</h2>
        <h2>Kindly click the button to open the RSVP form.</h2>
        <Fab
        color="secondary"
        aria-label="edit"
        variant="extended" 
        size="medium"
        sx={{
          marginTop: '30px',
          mr: 1
        }}
        onClick={handleModalOpen}
        >
          RSVP Form
        </Fab>
      </div>
      <RsvpModal
        open={rsvpModalOpen}
        onClose={() => setRsvpModalOpen(false)}
      />
    </div>
  )
}

export default RsvpPage