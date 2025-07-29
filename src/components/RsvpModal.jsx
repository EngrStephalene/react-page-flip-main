import React, { useState, useEffect } from 'react';
import { 
    Button, 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from "@mui/material";
import emailjs from "@emailjs/browser";

const RsvpModal = ({open, onClose}) => {
    const [modalError, setModalError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [attendance, setAttendance] = useState('')
    const [companion, setCompanion] = useState('')
    const [attendanceError, setAttendanceError] = useState('');
    const [companionError, setCompanionError] = useState('');

    const closeModal = () => onClose

    // Focus management: Set focus on the first input field when the dialog is open
    useEffect(() => {
        if (open) {
        // Focus the first input field when the dialog opens
        document.getElementById("name-input")?.focus();
        }
    }, [open]);

    const handleChangeAttendance = (event) => {
      setAttendance(event.target.value);
    };

    const handleChangeCompanion = (event) => {
      setCompanion(event.target.value);
    };

    const sendEmail = () => {
      console.log("Full Name: " + name)
      console.log("Email: " + email)
      console.log("Message: " + message)
      console.log("Attendance: " + attendance)
      console.log("Companion: " + companion)

      let hasError = false;
    
      if (!name.trim()) {
        setNameError('Full name is required');
        hasError = true;
      } else {
        setNameError('');
      }
    
      if (!email.trim()) {
        setEmailError('Email is required');
        hasError = true;
      } else {
        setEmailError('');
      }
    
      if (!attendance) {
        setAttendanceError('Please select an option');
        hasError = true;
      } else {
        setAttendanceError('');
      }
    
      if (!companion) {
        setCompanionError('Please select an option');
        hasError = true;
      } else {
        setCompanionError('');
      }
    
      if (hasError) return;
    
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
        attendance: attendance === "attendYes" ? "Yes" : "No",
        companion: companion === "companionYes" ? "Yes" : "No",
      };
    
      emailjs
        .send(
          "service_ykwoaln",
          "template_zxhcpzn",
          templateParams, 
          "MPVuoF5L7Dv9ipMq9"
          )
        .then(() => {
          setSuccessMessage("Thank you! Your RSVP has been sent.");
          setName('');
          setEmail('');
          setMessage('');
          setAttendance('attendYes');
          setCompanion('companionYes');
    
          setTimeout(() => {
            setSuccessMessage('');
            onClose();
          }, 2000);
        })
        .catch((error) => {
          alert("Something went wrong: " + error.text);
        });
    };          

  return (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="rsvp-dialog"
    slotProps={{
      backdrop: {
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
        },
      },
      paper: {
        sx: {
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // frosted white
          backdropFilter: 'blur(10px)',                 // optional blur
          borderRadius: 3,
          padding: 3,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
          maxWidth: 'sm',      // maintain appropriate width
          width: '100%',       // ensures responsiveness
        },
      },
    }}
    >
    <DialogTitle
      id="rsvp-dialog"
      sx={{ 
        backgroundColor: '#1dad9b', // Color for the header
        color: '#ffffff', // White text color for better contrast
        fontWeight: 'bold', 
        textAlign: 'center', 
        borderRadius: '8px 8px 0 0', // Rounded corners for the top
      }}
    >
      Répondez S'il Vous Plaît 
    </DialogTitle>
    <DialogContent sx={{
      marginTop: '20px'
    }}>
      <TextField
        id="name-input"
        name="user_name"
        label="Full Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!nameError}
        helperText={nameError}
        sx={{ marginBottom: '10px' }}
        required
      />
      <TextField
        id="email-input"
        name="user_email"
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        helperText={emailError}
        sx={{ marginBottom: '20px' }}
        required
      />
      <TextField
        id="message-input"
        label="Your Message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginBottom: '20px' }}
        autoFocus
      />

      <FormControl>
        <FormLabel id="radio-buttons-group-attendance">WILL YOU BE THERE TO CELEBRATE WITH US?</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-attendance"
          defaultValue="attendYes"
          name="attendance-group"
          value={attendance}
          onChange={handleChangeAttendance}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <br></br>
      <FormControl>
        <FormLabel id="radio-buttons-group-companion">WILL YOU BRING A COMPANION?</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-companion"
          defaultValue="companionYes"
          name="companion-group"
          value={companion}
          onChange={handleChangeCompanion}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      {successMessage && (
        <div style={{ 
          backgroundColor: '#dff0d8', 
          color: '#3c763d', 
          padding: '10px', 
          borderRadius: '5px', 
          marginBottom: '15px',
          fontWeight: 'bold',
          textAlign: 'center'
          }}>
            {successMessage}
        </div>
      )}
    </DialogContent>
    <DialogActions>
      <Button 
        onClick={sendEmail} 
        sx={{
          backgroundColor: '#1dad9b', // Science Quest green button color
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#16978c',
          },
        }}
      >
        Submit
      </Button>
      <Button 
        onClick={onClose} 
        sx={{
          backgroundColor: '#ff5722', // Red "Cancel" button
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#e64a19',
          },
        }}
      >
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default RsvpModal