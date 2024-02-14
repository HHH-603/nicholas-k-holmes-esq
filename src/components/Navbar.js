import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsSticky(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-background py-3 fixed justify-items-center content-center w-full h-fit transition-all duration-300 z-50 ${
        isSticky ? "top-0" : "-top-20"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/" className="font-semibold text-xl">
            <StaticImage
              src="../images/Logo -- Small.png"
              alt="Logo"
              height={40}
              width={60}
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              to="tel:16034961181"
              className="alaised text-center pl-0 pr-3 py-2 rounded-md text-sm font-medium"
              onClick={closeMenu}
            >
              Call
            </Link>
            <Link
              to="mailto:nholmes@nb-holmes.com"
              className="alaised text-center pl-0 pr-3 py-2 rounded-md text-sm font-medium"
              onClick={closeMenu}
            >
              Email
            </Link>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="hamburger">
              <div
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></div>
              <div
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></div>
              <div
                className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block bg-background opacity-75 z-50" : "hidden"
        } md:hidden`}
      >
        <Link
          to="#experience"
          className="alaised text-center block px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMenu}
        >
          Experience
        </Link>
        <Link
          to="#representativeCases"
          className="alaised text-center block px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMenu}
        >
          Representative Cases
        </Link>
        <Link
          to="#professionalMemberships"
          className="alaised text-center block px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMenu}
        >
          Professional Memberships
        </Link>
        <Link
          to="#publications"
          className="alaised text-center block px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMenu}
        >
          Publications
        </Link>
        <Link
          to="#speakingEngagements"
          className="alaised text-center block px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMenu}
        >
          Speaking Engagements
        </Link>
        <Link
          to="#education"
          className="alaised text-center block px-3 py-2 rounded-md text-base font-medium"
          onClick={closeMenu}
        >
          Education
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
