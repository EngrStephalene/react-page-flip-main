import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-modal";
import "./style.css";

Modal.setAppElement("#root");

const FirstImageDesc = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [plusOneYes, setPlusOneYes] = useState(false);
  const form = useRef();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handlePlusOneChange = (e) => {
    setPlusOneYes(e.target.value === "Yes");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ykwoaln",
        "template_zxhcpzn",
        form.current,
        "MPVuoF5L7Dv9ipMq9"
      )
      .then(
        (result) => {
          alert("RSVP sent successfully!");
          form.current.reset();
          setPlusOneYes(false);
          closeModal();
        },
        (error) => {
          alert("Something went wrong: " + error.text);
        }
      );
  };

  return (
    <div className="pageTwo">
      <h2 className="message">
        We are thrilled to share our most cherished memories with you. <br />
        Our journey has been filled with love, laughter, and unforgettable memories. We can't wait to celebrate with you!
      </h2>

      {/* <div className="rsvp-container">
        <h2 className="invText">RSVP Invitation</h2>
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

            <label>Will you attend?</label>
            <div className="attendance-options">
              <label>
                <input type="radio" name="attendance" value="Can Go" required /> Yes
              </label>
              <label>
                <input type="radio" name="attendance" value="Can't Go" required /> No
              </label>
            </div>

            <label>Will you bring your +1?</label>
            <div className="plus-one-options">
              <label>
                <input
                  type="radio"
                  name="plus_one"
                  value="Yes"
                  onChange={handlePlusOneChange}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="plus_one"
                  value="No"
                  onChange={handlePlusOneChange}
                  required
                />{" "}
                No
              </label>
            </div>

            {plusOneYes && (
              <input
                type="text"
                name="plus_one_name"
                placeholder="Enter your +1's full name"
                required
              />
            )}

            <button type="submit">Submit RSVP</button>
          </form>

          <button className="close-modal-btn" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div> */}
    </div>
  );
};

export default FirstImageDesc;
