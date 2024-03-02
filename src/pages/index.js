import * as React from "react";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import about from "../assets/about.json";
import experience from "../assets/workExperience.json";
import representativeCases from "../assets/representativeCases.json";
import professionalMemberships from "../assets/professionalMemberships.json";
import publications from "../assets/publications.json";
import speakingEngagements from "../assets/speakingEngagements.json";
import education from "../assets/education.json";
import { Link } from "gatsby";

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center leading-8 bg-gradient-to-r from-background to-backgroundDark">
      <header className="text-center flex flex-col items-center justify-start w-screen h-screen px-2 text-black bg-background">
        <div className="flex flex-col w-full h-88% justify-start">
          {/* Text Content */}
          <div className="flex-auto w-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center items-center justify-center pb-8">
              <StaticImage
                src="../images/Logo -- Small.png"
                alt="logo"
                placeholder=""
                className="md:w-full w-5/6"
                blurUpDelay=""
                quality={100}
                loading="eager"
                objectFit=""
                layout="constrained"
              />
            </div>
            <h1 className="antialaised text-4xl font-bold">
LAW OFFICE OF NICHOLAS K. HOLMES, PLLC            </h1>
            <p className="antialaised text-lg">
              ALTERNATIVE DISPUTE RESOLUTION
            </p>
            <p className="antialaised">Concord, New Hampshire</p>
            <div
              id="container_header-links"
              className="flex flex-row space-x-2"
            >
              <a
                href="/"
                className="antialaised border-b-2 border-dotted hover:border-solid border-black"
              >
                Call
              </a>
              <a
                href="/"
                className="antialaised border-b-2 border-dotted hover:border-solid border-black"
              >
                Email
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="animate-bounce"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center items-center justify-center md:py-8 md:w-fit w-screen">
        <StaticImage
          src="../images/Holmes-Nicholas-WEB.jpg"
          alt="dad"
          placeholder=""
          className="md:w-full w-screen md:border-8 md:border-backgroundDark"
          blurUpDelay=""
          quality={100}
          loading="eager"
          objectFit=""
          layout="constrained"
        />
      </div>
      <main className="flex flex-col lg:w-1/3 md:w-1/2 w-full px-2">
        <section className="flex flex-col w-full h-auto">
          {about.content.map((data, index) => (
            <p
              className="antialaised md:pt-0 pt-4 pb-4 italic"
              key={`content_id_${index}`}
            >
              {data.about}.
            </p>
          ))}
        </section>
        <section className="flex flex-col w-full h-auto py-4">
          <h3 className="text-2xl font-bold antialaised border-b-2 border-solid border-black">
            EXPERIENCE
          </h3>
          {experience.content.map((data, index) => (
            <section id="card_asset-details" key={`content_id_${index}`}>
              <p className="antialaised">
                {data.startYear} - {data.endYear}
              </p>
              <p className="antialaised">{data.employer}</p>
              <p className="antialaised pb-4">
                {data.city}, {data.state}
              </p>
            </section>
          ))}
        </section>
        <section className="flex flex-col w-full h-auto py-4">
          <h3 className="text-2xl font-bold antialaised border-b-2 border-solid border-black">
            REPRESENTATIVE CASES
          </h3>
          {representativeCases.content.map((data, index) => (
            <section id="card_asset-details" key={`content_id_${index}`}>
              <p className="antialaised">{data.description}</p>
              <p className="antialaised">{data.employer}</p>
              <p className="antialaised pb-4">
                {data.venue} | {data.state}
              </p>
            </section>
          ))}
        </section>
        <section className="flex flex-col w-full h-auto py-4">
          <h3 className="text-2xl font-bold antialaised border-b-2 border-solid border-black">
            PROFESSIONAL MEMBERSHIPS
          </h3>
          {professionalMemberships.content.map((data, index) => (
            <section id="card_asset-details" key={`content_id_${index}`}>
              <p className="antialaised">
                {data.startYear} - {data.endYear}
              </p>
              <p className="antialaised">
                {data.position} | {data.organization}
              </p>
            </section>
          ))}
        </section>
        <section className="flex flex-col w-full h-auto py-4">
          <h3 className="text-2xl font-bold antialaised border-b-2 border-solid border-black">
            PUBLICATIONS
          </h3>
          {publications.content.map((data, index) => (
            <section id="card_asset-details" key={`content_id_${index}`}>
              <p className="antialaised">
                {data.authors}.{" "}
                <span className="italic">{data.publication}</span>.{" "}
                {data.source}. {data.miscellaneous}.
              </p>
            </section>
          ))}
        </section>
        <section className="flex flex-col w-full h-auto py-4">
          <h3 className="text-2xl font-bold antialaised border-b-2 border-solid border-black">
            SPEAKING ENGAGEMENTS
          </h3>
          {speakingEngagements.content.map((data, index) => (
            <section id="card_asset-details" key={`content_id_${index}`}>
              <p className="antialaised">{data.date}</p>
              <p className="antialaised">{data.event}</p>
              <p className="antialaised">{data.description}</p>
              <p className="antialaised">
                {data.city}, {data.state}
              </p>
            </section>
          ))}
        </section>
        <section className="flex flex-col w-full h-auto py-4">
          <h3 className="text-2xl font-bold antialaised border-b-2 border-solid border-black">
            EDUCATION
          </h3>
          {education.content.map((data, index) => (
            <section id="card_asset-details" key={`content_id_${index}`}>
              <p className="antialaised">
                {data.startYear} - {data.endYear}
              </p>
              <p className="antialaised">{data.university}</p>
              <p className="antialaised">{data.school}</p>
              <p className="antialaised">{data.degree}</p>
              <p className="antialaised">{data.honors}</p>
              <p className="antialaised pb-4">
                {data.city}, {data.state}
              </p>
            </section>
          ))}
        </section>
      </main>
      <footer className="flex flex-col w-full h-fit items-center justify-center text-background bg-black pt-2 pb-4">
        <p className="antialaised text-lg font-semibold">
          LAW OFFICE OF NICHOLAS K. HOLMES, PLLC
        </p>
        <p className="antialaised border-b-2 border-dotted hover:border-solid border-background">
          <a href="tel:+16034969204">(603) 496-9204</a>
        </p>
        <p className="antialaised border-b-2 border-dotted hover:border-solid border-background">
          <a href="mailto:nholmes@nb-holmes.com" target="_blank">
            nholmes@nb-holmes.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Law Office of Nicholas K. Holmes, PLLC</title>;
