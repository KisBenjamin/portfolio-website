import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://instagram.com/_kisbenjamin_" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://github.com/KisBenjamin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/kis-benjámin-tibor-046760354" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:kis.benjamin05@gmail.com">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Kis Benjamin
      </div>
    </footer>
  );
}