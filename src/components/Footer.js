import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-3 flex flex-wrap flex-col items-center place-items-center text-background">
      <p className="font-medium">Law Office of Nicholas K. Holmes, PLLC</p>
      <p className="text-sm font-medium">
        <a className="text-sky-500" href="tel:16034969204" target="_blank">
          (603) 496-9204
        </a>{" "}
        |{" "}
        <a
          className="text-sky-500"
          href="mailto:nholmes@nb-holmes.com"
          target="_blank"
        >
          nholmes@nb-holmes.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
