import React, { useState } from "react";
import { Button } from "antd";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import "./rsvp.css";

const Rsvp = () => {
  const [isAttending, setIsAttending] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    attending: "",
    events: [],
    guestCount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedEvents = [...formData.events];
      if (checked) {
        updatedEvents.push(value);
      } else {
        updatedEvents = updatedEvents.filter((event) => event !== value);
      }
      setFormData({ ...formData, events: updatedEvents });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAttendanceChange = (e) => {
    const value = e.target.value;
    setIsAttending(value);
    setFormData({ ...formData, attending: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare data for Firestore
      const rsvpData = {
        fullName: formData.fullName,
        attending: formData.attending === "yes" ? "Yes" : "No",
        events: formData.attending === "yes" ? formData.events : ["Not attending"],
        guestCount: formData.attending === "yes" ? formData.guestCount : "N/A",
        message: formData.message || "No message provided",
        timestamp: serverTimestamp()
      };

      // Add document to Firestore
      const docRef = await addDoc(collection(db, "rsvps"), rsvpData);
      console.log("Document written with ID: ", docRef.id);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit RSVP. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="hehe">
        <div className="wedding_img">
          <img
            src="https://i.imgur.com/3mf28js.png"
            alt=""
            className="wed_img"
          />
        </div>
        <div className="rsvpier">
          <h2 className="thank_you">Thank you for your RSVP!</h2>
          <div className="linee"></div>
          <p className="confirmation_message">
            We've received your response and look forward to celebrating with
            you!
          </p>
          <div className="linee"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="hehe">
      <div className="wedding_img">
        <img src="https://i.imgur.com/3mf28js.png" alt="" className="wed_img" />
      </div>
      <div className="rsvpier">
        <p className="rsvp_p">
          We're so thrilled to celebrate our special day with you! Your presence
          is incredibly meaningful, and we're counting down the days until we
          can share this beautiful moment together. To help us make everything
          perfect, please confirm your attendance below and let us know your
          meal preference. We have a selection of dishes to suit all tastes, so
          simply choose your favorite to enjoy at our celebration. **We do not
          have a gift registry for our wedding. Monetary gifts are preferred.**
        </p>

        <div className="linee"></div>
        <h2 className="kindly">Kindly RSVP by August 12, 2025.</h2>
        <div className="linee"></div>
        <h2 className="kindly_m">
          Thank you for being part of our journey—we can't wait to make
          unforgettable memories with you!
        </h2>
        <div className="linee"></div>
      </div>

      <div className="rsvp_form_section">
        <form onSubmit={handleSubmit} className="rsvp_form">
          <div className="form_sector">
            <label htmlFor="fullName" className="form_label">
              Your full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form_input"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form_sector">
            <label htmlFor="attending" className="form_label">
              Will you be attending?
            </label>
            <select
              id="attending"
              name="attending"
              className="form_input"
              value={isAttending}
              onChange={handleAttendanceChange}
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes, with pleasure</option>
              <option value="no">No, regretfully</option>
            </select>
          </div>

          {isAttending === "yes" && (
            <>
              <div className="form_sector">
                <label className="form_label">Events you'll attend:</label>
                <div className="event_options">
                  <div className="event_option">
                    <input
                      type="checkbox"
                      id="welcome"
                      name="events"
                      value="Welcome Celebration"
                      checked={formData.events.includes("Welcome Celebration")}
                      onChange={handleChange}
                    />
                    <label htmlFor="welcome">
                      Friday, Nov 7 - Welcome Celebration
                    </label>
                  </div>
                  <div className="event_option">
                    <input
                      type="checkbox"
                      id="wedding"
                      name="events"
                      value="The DOPE WEDDING"
                      checked={formData.events.includes("The DOPE WEDDING")}
                      onChange={handleChange}
                    />
                    <label htmlFor="wedding">
                      Saturday, Nov 8 - The DOPE WEDDING
                    </label>
                  </div>
                  <div className="event_option">
                    <input
                      type="checkbox"
                      id="brunch"
                      name="events"
                      value="Farewell Brunch"
                      checked={formData.events.includes("Farewell Brunch")}
                      onChange={handleChange}
                    />
                    <label htmlFor="brunch">
                      Sunday, Nov 9 - Dope Wedding Farewell Brunch
                    </label>
                  </div>
                </div>
              </div>

              <div className="form_sector">
                <label htmlFor="guestCount" className="form_label">
                  Number of guests (including yourself)
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  className="form_input"
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="form_sector">
            <label htmlFor="message" className="form_label">
              {isAttending === "yes"
                ? "Leave a message for the couple (optional)"
                : "Leave a message for the couple (optional)"}
            </label>
            <textarea
              id="message"
              name="message"
              className="form_textarea"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="submit_btn"
            loading={loading}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit RSVP"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Rsvp;