import { useState } from "react";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xknlgqbl", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setForm(initialForm);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to send. Please try again or email me directly.",
      });
    } finally {
      setButtonText("Send");
    }
    console.log("Contact form submitted:", form);

    setStatus("sent");
    setForm(initialForm);
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="eyebrow">Insert Coin</p>
        <h2 className="section-title">Contact Me</h2>

        <form className="contact-form pixel-border" onSubmit={handleSubmit}>
          <label className="contact-form__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Player One"
            />
          </label>

          <label className="contact-form__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label className="contact-form__field">
            <span>Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Say something..."
            />
          </label>

          <button type="submit" className="contact-form__submit">
            {status === "sent" ? "MESSAGE SENT" : "PRESS START"}
          </button>

          {status === "sent" && (
            <p className="contact-form__note" role="status">
              Thanks, your message was captured locally. Connect a real email
              service to deliver it, see the comment in Contact.jsx.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
