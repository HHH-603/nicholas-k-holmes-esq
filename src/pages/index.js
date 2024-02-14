import React from "react";
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
  return (
    <div className="bg-gradient-to-r from-background to-backgroundDark">
      <Navbar />
      <div className="flex flex-wrap flex-col mx-auto md:w-1/2 max-w-full max-h-full">
        <div className="flex flex-wrap flex-col max-w-full max-h-auto md:pt-24 pt-16">
          <StaticImage
            src="../images/Holmes-Nicholas-WEB.jpg"
            className="place-self-center md:w-auto w-full md:border md:border-8 md:border-backgroundDark"
          />
        </div>
        <div className="px-4 md:pt-6 pt-4 pb-3">
          <h1 className="alaised text-3xl font-bold">NICHOLAS K. HOLMES</h1>
          <h3 className="alaised text-xl font-medium italic">
            Alternative Dispute Resolution
          </h3>
          {about.content.map((data, index) => {
            return (
              <>
                <p className="alaised pt-3" key={`content_id_${index}`}>
                  {data.about}
                </p>
              </>
            );
          })}
        </div>
        <div className="px-4 py-3">
          <h3
            id="experience"
            className="alaised text-2xl font-bold border-b-4 border-black"
          >
            EXPERIENCE
          </h3>
          {experience.content.map((data, index) => {
            return (
              <>
                <p
                  className=" text-sm font-light pt-3"
                  key={`content_id_${index}`}
                >
                  {data.startYear} - {data.endYear}
                </p>
                <p className="alaised font-medium" key={`content_id_${index}`}>
                  {data.employer}
                </p>
                <p className="alaised text-sm pb-3" key={`content_id_${index}`}>
                  {data.city}, {data.state}
                </p>
              </>
            );
          })}
        </div>
        <div className="px-4 py-3">
          <h3
            id="representativeCases"
            className="alaised text-2xl font-bold border-b-4 border-black"
          >
            REPRESENTATIVE CASES
          </h3>
          {representativeCases.content.map((data, index) => {
            return (
              <>
                <p
                  className="alaised font-medium pt-3"
                  key={`content_id_${index}`}
                >
                  {data.description}
                </p>
                <p className="alaised text-sm pb-3" key={`content_id_${index}`}>
                  {data.venue} | {data.state}
                </p>
              </>
            );
          })}
        </div>
        <div className="px-4 py-3">
          <h3
            id="professionalMemberships"
            className="alaised text-2xl font-bold border-b-4 border-black"
          >
            PROFESSIONAL MEMBERSHIPS
          </h3>
          {professionalMemberships.content.map((data, index) => {
            return (
              <>
                <p
                  className=" text-sm font-light pt-3"
                  key={`content_id_${index}`}
                >
                  {data.startYear} - {data.endYear}
                </p>
                <p className="alaised font-medium" key={`content_id_${index}`}>
                  {data.organization}
                </p>
                <p className="alaised text-sm pb-3">{data.position}</p>
              </>
            );
          })}
        </div>
        <div className="px-4 py-3">
          <h3
            id="publications"
            className="alaised text-2xl font-bold border-b-4 border-black"
          >
            PUBLICATIONS
          </h3>
          {publications.content.map((data, index) => {
            return (
              <>
                <p className="alaised py-3" key={`content_id_${index}`}>
                  {data.authors}.{" "}
                  <span className="italic">{data.publication}</span>.{" "}
                  {data.source}. {data.miscellaneous}.
                </p>
              </>
            );
          })}
        </div>
        <div className="px-4 py-3">
          <h3
            id="speakingEngagements"
            className="alaised text-2xl font-bold border-b-4 border-black"
          >
            SPEAKING ENGAGEMENTS
          </h3>
          {speakingEngagements.content.map((data, index) => {
            return (
              <>
                <p
                  className=" text-sm font-light pt-3"
                  key={`content_id_${index}`}
                >
                  {data.date}
                </p>
                <p className="alaised font-medium" key={`content_id_${index}`}>
                  {data.event}
                </p>
                <p className="alaised" key={`content_id_${index}`}>
                  {data.description}
                </p>
                <p className="alaised text-sm pb-3" key={`content_id_${index}`}>
                  {data.city}, {data.state}
                </p>
              </>
            );
          })}
        </div>
        <div className="px-4 py-3">
          <h3
            id="education"
            className="alaised text-2xl font-bold border-b-4 border-black"
          >
            EDUCATION
          </h3>
          {education.content.map((data, index) => {
            return (
              <>
                <p
                  className=" text-sm font-light pt-3"
                  key={`content_id_${index}`}
                >
                  {data.startYear} - {data.endYear}
                </p>
                <p className="alaised font-medium" key={`content_id_${index}`}>
                  {data.school}
                </p>
                <p className="alaised text-sm" key={`content_id_${index}`}>
                  {data.city}, {data.state}
                </p>
                <p
                  className="alaised text-sm italic pb-3 last:pb-1"
                  key={`content_id_${index}`}
                >
                  {data.degree}, {data.honors}
                </p>
              </>
            );
          })}
        </div>{" "}
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Your Website Title</title>;
