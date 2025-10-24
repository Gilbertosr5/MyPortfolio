import '../styles/Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Portfolio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
