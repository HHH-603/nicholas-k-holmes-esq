import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/global.css";

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
      className={`bg-background py-3 fixed w-full z-50 ${
        isSticky ? "top-0" : "-top-20"
      } transition-all duration-300`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a
            href="https://nkh-jd-bmf.netlify.app/"
            className="font-semibold text-xl"
          >
            <StaticImage
              src="../images/Logo -- Small.png"
              alt="Logo"
              class="max-h-12 max-w-24"
            />
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              to="tel:16034969204"
              className="alaised text-center px-3 py-2 text-base font-semibold"
              onClick={closeMenu}
            >
              Call
            </Link>
            <Link
              to="mailto:nholmes@nb-holmes.com"
              className="alaised text-center px-3 py-2 text-base font-semibold"
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
          </button>{" "}
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          to="#experience"
          className="alaised text-center block px-3 py-2 first:pt-4 first:pb-2 text-babase font-semibold"
          onClick={closeMenu}
        >
          EXPERIENCE
        </Link>
        <Link
          to="#representativeCases"
          className="alaised text-center block px-3 py-2 text-babase font-semibold"
          onClick={closeMenu}
        >
          REPRESENTATIVE CASES
        </Link>
        <Link
          to="#professionalMemberships"
          className="alaised text-center block px-3 py-2 text-babase font-semibold"
          onClick={closeMenu}
        >
          PROFESSIONAL MEMBERSHIPS
        </Link>
        <Link
          to="#publications"
          className="alaised text-center block px-3 py-2 text-babase font-semibold"
          onClick={closeMenu}
        >
          PUBLICATIONS
        </Link>
        <Link
          to="#speakingEngagements"
          className="alaised text-center block px-3 py-2 text-babase font-semibold"
          onClick={closeMenu}
        >
          SPEAKING ENGAGEMENTS
        </Link>
        <Link
          to="#education"
          className="alaised text-center block px-3 py-2 text-babase font-semibold"
          onClick={closeMenu}
        >
          EDUCATION
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
