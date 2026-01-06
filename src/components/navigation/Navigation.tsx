import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import './Navigation.less';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <button
          onClick={() => navigateToPage('/')}
          className="logo"
        >
          HX
        </button>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <button onClick={() => scrollToSection('work')} className="nav-link">
            Work
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('for-fun')} className="nav-link">
            For Fun
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <button onClick={() => scrollToSection('work')} className="mobile-nav-link">
            Work
          </button>
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
            About
          </button>
          <button onClick={() => scrollToSection('for-fun')} className="mobile-nav-link">
            For Fun
          </button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
