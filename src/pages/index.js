import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about from "../assets/about.json";
import experience from "../assets/workExperience.json";
import representativeCases from "../assets/representativeCases.json";
import professionalMemberships from "../assets/professionalMemberships.json";
import publications from "../assets/publications.json";
import speakingEngagements from "../assets/speakingEngagements.json";
import education from "../assets/education.json";

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-background to-backgroundDark">
      <Navbar />
      <div className="mx-auto flex flex-wrap flex-col md:w-1/2 max-w-full">
        <div className="flex flex-col max-w-full pt-16 md:pt-24">
          <StaticImage
            src="../images/Holmes-Nicholas-WEB.jpg"
            className="w-full md:w-auto md:border-8 md:border-backgroundDark place-self-center"
          />
        </div>
        <div className="px-4 pt-4 pb-3">
          <h1 className="text-3xl font-bold alaised">NICHOLAS K. HOLMES</h1>
          <h3 className="text-xl font-medium alaised">
            Alternative Dispute Resolution
          </h3>
          {about.content.map((data, index) => (
            <p className="pt-3 alaised" key={`content_id_${index}`}>
              {data.about}
            </p>
          ))}
        </div>
        {/* Other sections */}
        {/* Experience */}
        <div className="px-4 py-3">
          <h3
            id="experience"
            className="text-2xl font-bold alaised border-b-4 border-black"
          >
            EXPERIENCE
          </h3>
          {experience.content.map((data, index) => (
            <React.Fragment key={`content_id_${index}`}>
              <p className="pt-3 text-sm font-light alaised">
                {data.startYear} - {data.endYear}
              </p>
              <p className="font-medium alaised" key={`content_id_${index}`}>
                {data.employer}
              </p>
              <p className="pb-3 text-sm alaised" key={`content_id_${index}`}>
                {data.city}, {data.state}
              </p>
            </React.Fragment>
          ))}
        </div>
        {/* Representative Cases */}
        <div className="px-4 py-3">
          <h3
            id="representativeCases"
            className="text-2xl font-bold alaised border-b-4 border-black"
          >
            REPRESENTATIVE CASES
          </h3>
          {representativeCases.content.map((data, index) => (
            <React.Fragment key={`content_id_${index}`}>
              <p className="pt-3 font-medium alaised">{data.description}</p>
              <p className="pb-3 text-sm alaised" key={`content_id_${index}`}>
                {data.venue} | {data.state}
              </p>
            </React.Fragment>
          ))}
        </div>
        {/* Professional Memberships */}
        <div className="px-4 py-3">
          <h3
            id="professionalMemberships"
            className="text-2xl font-bold alaised border-b-4 border-black"
          >
            PROFESSIONAL MEMBERSHIPS
          </h3>
          {professionalMemberships.content.map((data, index) => (
            <React.Fragment key={`content_id_${index}`}>
              <p className="pt-3 text-sm font-light alaised">
                {data.startYear} - {data.endYear}
              </p>
              <p className="font-medium alaised" key={`content_id_${index}`}>
                {data.organization}
              </p>
              <p className="pb-3 text-sm alaised">{data.position}</p>
            </React.Fragment>
          ))}
        </div>
        {/* Publications */}
        <div className="px-4 py-3">
          <h3
            id="publications"
            className="text-2xl font-bold alaised border-b-4 border-black"
          >
            PUBLICATIONS
          </h3>
          {publications.content.map((data, index) => (
            <p className="py-3 alaised" key={`content_id_${index}`}>
              {data.authors}. <span className="italic">{data.publication}</span>
              . {data.source}. {data.miscellaneous}.
            </p>
          ))}
        </div>
        {/* Speaking Engagements */}
        <div className="px-4 py-3">
          <h3
            id="speakingEngagements"
            className="text-2xl font-bold alaised border-b-4 border-black"
          >
            SPEAKING ENGAGEMENTS
          </h3>
          {speakingEngagements.content.map((data, index) => (
            <React.Fragment key={`content_id_${index}`}>
              <p className="pt-3 text-sm font-light alaised">{data.date}</p>
              <p className="font-medium alaised" key={`content_id_${index}`}>
                {data.event}
              </p>
              <p className="italic alaised" key={`content_id_${index}`}>
                {data.description}
              </p>
              <p className="pb-3 text-sm alaised" key={`content_id_${index}`}>
                {data.city}, {data.state}
              </p>
            </React.Fragment>
          ))}
        </div>
        {/* Education */}
        <div className="px-4 py-3">
          <h3
            id="education"
            className="text-2xl font-bold alaised border-b-4 border-black"
          >
            EDUCATION
          </h3>
          {education.content.map((data, index) => (
            <React.Fragment key={`content_id_${index}`}>
              <p className="pt-3 text-sm font-light alaised">
                {data.startYear} - {data.endYear}
              </p>
              <p className="font-medium alaised" key={`content_id_${index}`}>
                {data.school}
              </p>
              <p className="alaised text-sm" key={`content_id_${index}`}>
                {data.city}, {data.state}
              </p>
              <p
                className="pb-1 text-sm italic alaised"
                key={`content_id_${index}`}
              >
                {data.degree}, {data.honors}
              </p>
            </React.Fragment>
          ))}
        </div>{" "}
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Law Office of Nicholas K. Holmes, PLLC</title>;
