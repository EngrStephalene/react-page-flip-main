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

const RsvpModal = ({ open, onClose }) => {
    const [modalError, setModalError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [companionNameError, setCompanionNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [attendance, setAttendance] = useState('');
    const [companion, setCompanion] = useState('');
    const [companionName, setCompanionName] = useState('');
    const [attendanceError, setAttendanceError] = useState('');
    const [companionError, setCompanionError] = useState('');

    const closeModal = () => onClose();

    useEffect(() => {
        if (open) {
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

        if (companion === 'Yes' && !companionName.trim()) {
            setCompanionError("Companion name is required");
            hasError = true;
        } else {
            setCompanionError('');
        }

        if (hasError) return;

        const templateParams = {
            guest_name: name,
            guest_email: email,
            message: message,
            attendance: attendance === "Yes" ? "Yes" : "No",
            companion: companion === "Yes" ? "Yes" : "No",
            companion_name: companion === "Yes" ? companionName : '',
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
                setAttendance('');
                setCompanion('');
                setCompanionName('');

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
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
                paper: {
                    sx: {
                        backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 3,
                        padding: 3,
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
                        maxWidth: 'sm',
                        width: '100%',
                    },
                },
            }}
        >
            <DialogTitle
                id="rsvp-dialog"
                sx={{
                    backgroundColor: '#1dad9b',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    borderRadius: '8px 8px 0 0',
                }}
            >
                Répondez S'il Vous Plaît
            </DialogTitle>
            <DialogContent sx={{ marginTop: '20px' }}>
                <TextField
                    id="name-input"
                    name="guest_name"
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
                    name="guest_email"
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
                />

                <FormControl sx={{ marginBottom: '15px' }}>
                    <FormLabel id="radio-buttons-group-attendance">WILL YOU BE THERE TO CELEBRATE WITH US?</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-attendance"
                        name="attendance-group"
                        value={attendance}
                        onChange={handleChangeAttendance}
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                    {attendanceError && (
                        <span style={{ color: 'red', fontSize: '0.875rem' }}>{attendanceError}</span>
                    )}
                </FormControl>

                <FormControl sx={{ marginBottom: '15px' }}>
                    <FormLabel id="radio-buttons-group-companion">WILL YOU BRING A COMPANION?</FormLabel>
                    <RadioGroup
                        aria-labelledby="radio-buttons-group-companion"
                        name="companion-group"
                        value={companion}
                        onChange={handleChangeCompanion}
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                    {companionError && (
                        <span style={{ color: 'red', fontSize: '0.875rem' }}>{companionError}</span>
                    )}
                </FormControl>

                {companion === 'Yes' && (
                    <TextField
                        id="companion-name-input"
                        name="companion_name"
                        label="Companion Name"
                        variant="outlined"
                        fullWidth
                        value={companionName}
                        onChange={(e) => setCompanionName(e.target.value)}
                        error={!!companionError}
                        helperText={companionError}
                        sx={{ marginBottom: '10px' }}
                        required
                    />
                )}

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
                        backgroundColor: '#1dad9b',
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
                        backgroundColor: '#ff5722',
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
    );
};

export default RsvpModal;