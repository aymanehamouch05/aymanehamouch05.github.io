import { useState } from 'react';

const ContactForm = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = 'Ce champ est obligatoire.';

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Veuillez entrer un email valide.';

    if (!formData.message.trim())
      newErrors.message = 'Le message ne peut pas être vide.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-wrapper">

        <div className="contact-info">
          <p>N'hésitez pas à me contacter pour toute question ou opportunité.</p>
          <ul className="contact-details">
            <li><i className="fas fa-map-marker-alt"></i> Marrakech, Maroc</li>
            <li><i className="fas fa-paper-plane"></i> ay.hamouch05@gmail.com</li>
          </ul>
        </div>

        <div id="contact" className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom..."
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Comment puis-je vous aider ?"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error-msg">{errors.message}</span>}
          </div>

          <button onClick={handleSubmit} className="btn-submit">
            Envoyer <i className="fas fa-paper-plane"></i>
          </button>

          {success && <div id="form-success">Message envoyé avec succès !</div>}

        </div>
      </div>
    </section>
  );
};

export default ContactForm;