import React, { useState, useEffect } from 'react';

function ResponsiveHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={isMobile ? 'mobile-header' : 'desktop-header'}>
      <nav className="flex items-center justify-between bg-gray-700 py-4 px-8">
        <ul className="flex items-center space-x-4">
          <li>
            <a href="/" className="text-white hover:text-white">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-white">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-white">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-white">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ResponsiveHeader;

