import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import "./style.css";

Modal.setAppElement("#root");

const EntouragePage3 = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const form = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          alert("RSVP sent successfully!");
          form.current.reset();
          closeModal();
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <div className="rsvp-container">
      <h2>RSVP Invitation</h2>
      <button className="open-modal-btn" onClick={openModal}>
        Open RSVP Form
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="RSVP Form"
        className="rsvp-modal"
        overlayClassName="rsvp-modal-overlay"
      >
        <h2>RSVP Here</h2>
        <form ref={form} onSubmit={sendEmail} className="rsvp-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message / RSVP Details"
            required
          />
          <button type="submit">Submit RSVP</button>
        </form>
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EntouragePage3;
