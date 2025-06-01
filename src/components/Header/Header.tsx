import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import './Header.css';
import { headerContent } from '@/data/content';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Collapse dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          {headerContent.logoText}
        </Link>

        <nav className="desktop-nav">
          {headerContent.menuItems.map((item, index) => (
            <div key={index} className="nav-item" ref={item.dropdown ? dropdownRef : null}>
              {item.dropdown ? (
                <button className="nav-link" onClick={() => toggleDropdown(item.title)}>
                  {item.title}
                  <ChevronDown className="icon-chevron" />
                </button>
              ) : (
                <Link to={item.url || '#'} className="nav-link">
                  {item.title}
                </Link>
              )}
              {item.dropdown && (
                <div
                  className={cn(
                    'dropdown',
                    activeDropdown === item.title ? 'show' : 'hide'
                  )}
                >
                  {item.items?.map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      to={dropdownItem.url}
                      className="dropdown-item"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="book-button-desktop">
          <Link to="/booking">
            <Button className="book-button">
              {headerContent.bookNowButton}
            </Button>
          </Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          {headerContent.menuItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-nav-link"
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        'icon-chevron',
                        activeDropdown === item.title ? 'rotate' : ''
                      )}
                    />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="mobile-dropdown">
                      {item.items?.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.url}
                          className="mobile-dropdown-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.url || '#'}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        <div className="mobile-book-button">
          <Link to="/booking">
            <Button className="book-button">
              {headerContent.bookNowButton}
            </Button>
          </Link>
        </div>
        </div>
      )}
    </header>
  );
};

export default Header;
