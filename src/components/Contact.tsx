import { Mail, MapPin, Phone } from 'lucide-react';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <section className="contact" id="contato">
      <div className="contact-container">
        <h2 className="section-title">Contato</h2>
        <p className="contact-subtitle">
          Está interessado em trabalhar juntos? Entre em contato!
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <Mail size={24} />
            <h3>Email</h3>
            <a href="mailto:gillbertosr5@gmail.com">gillbertosr5@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone size={24} />
            <h3>Telefone</h3>
            {/* <a href="tel:+5511999999999">+55 11 99999-9999</a> */}
            <a href="#">Entre em contato para receber meu número</a>
          </div>
          <div className="contact-item">
            <MapPin size={24} />
            <h3>Localização</h3>
            <p>São Paulo, Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
};
