import './Footer.less';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Designed & built with care
          </p>
          <p className="footer-text">
            © {currentYear} Hannah Xiao
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
