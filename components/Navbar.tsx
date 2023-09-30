import React from "react";

interface NavbarProps {
  isIndexPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isIndexPage = true }) => {
  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >

      <img onClick={handleHomeClick} src="/shuai-jie.svg" loading="lazy" alt="shuai-jie" style={{ cursor: 'pointer' }} />

      <nav role="navigation" className="nav-menu w-nav-menu">
        {isIndexPage && (
          <>
            <a href="#Home" className="nav-link w-nav-link">
              Home.
            </a>
            <a href="#Blog" className="nav-link w-nav-link">
              Projects | Blog.
            </a>
            <a href="#Profile" className="nav-link w-nav-link">
              Profile.
            </a>
            <a href="#Resume" className="nav-link w-nav-link">
              Resume.
            </a>
          </>
        )}
        {!isIndexPage && (
          <>
            <a onClick={handleHomeClick} className="nav-link w-nav-link" style={{ cursor: 'pointer' }}>
              Home.
            </a>
          </>
        )}
        <a href="#footer" className="nav-link w-nav-link">
          Contact.
        </a>
      </nav>
      <div className="nav-social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="social-icon-item w-inline-block"
        >
          <img
            src="/facebook.svg"
            loading="lazy"
            alt="Facebook"
            className="social-icon"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="social-icon-item w-inline-block"
        >
          <img
            src="/instagram.svg"
            loading="lazy"
            alt="Instagram"
            className="social-icon"
          />
        </a>
        <a
          href="https://pinterest.com/"
          target="_blank"
          className="social-icon-item w-inline-block"
        >
          <img
            src="/pinterest.svg"
            loading="lazy"
            alt="Pinterest"
            className="social-icon"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="social-icon-item w-inline-block"
        >
          <img
            src="/twitter.svg"
            loading="lazy"
            alt="Twitter"
            className="social-icon"
          />
        </a>
      </div>
      <div className="menu-button w-nav-button">
        <div className="w-icon-nav-menu" />
      </div>
    </div>
  );
}

export default Navbar;
