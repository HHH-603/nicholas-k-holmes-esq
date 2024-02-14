// src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap flex-col w-full place-items-center items-center bg-black text-background py-3">
      <p className="font-medium">Law Office of Nicholas K. Holmes, PLLC</p>
      <p className="text-sm font-medium">
        <a href="tel:16034969204" target="_blank">
          (603) 496-1181
        </a>{" "}
        |{" "}
        <a href="mailto:nholmes@nb-holmes.com" target="_blank">
          nholmes@nb-holmes.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
