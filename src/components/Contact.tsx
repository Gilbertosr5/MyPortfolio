import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { socialLinks } from '../config';
import { useLanguage } from '../contexts/LanguageContext';
import { revealDelay } from '../hooks/useReveal';
import '../styles/Contact.css';

export const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${socialLinks.email}`;
    }
  };

  const channels = [
    { icon: Linkedin, label: 'LinkedIn', value: '/in/gilbertosr5', href: socialLinks.linkedin },
    { icon: Github, label: 'GitHub', value: '@Gilbertosr5', href: socialLinks.github },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue },
  ];

  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-glow" aria-hidden="true" />

          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <h2 className="contact-title">
            {t.contact.titleStart} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="contact-subtitle">
            {t.contact.subtitle}
          </p>

          <div className="contact-email">
            <a href={`mailto:${socialLinks.email}`} className="btn btn-primary">
              <Mail size={18} /> {t.contact.sendEmail}
            </a>
            <button className="btn btn-ghost" onClick={copyEmail} aria-live="polite">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? t.contact.copied : socialLinks.email}
            </button>
          </div>

          <p className="contact-note">{t.contact.note}</p>
        </div>

        <div className="contact-grid">
          {channels.map(({ icon: Icon, label, value, href }, index) => {
            const content = (
              <>
                <div className="contact-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{label}</h3>
                  <p>{value}</p>
                </div>
                {href && <ArrowUpRight size={18} className="contact-arrow" />}
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card contact-item reveal"
                style={revealDelay(index * 80)}
              >
                {content}
              </a>
            ) : (
              <div key={label} className="card contact-item reveal" style={revealDelay(index * 80)}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
