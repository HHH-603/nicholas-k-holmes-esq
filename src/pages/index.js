import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import workExperience from "../assets/workExperience.json";
import representativeCases from "../assets/representativeCases.json";
import professionalMemberships from "../assets/professionalMemberships.json";
import speakingEngagements from "../assets/speakingEngagements.json";
import publications from "../assets/publications.json";
import education from "../assets/education.json";

const IndexPage = () => {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <header className="flex flex-row flex-wrap h-auto w-full">
        <div className="flex flex-row h-auto w-1/2 pl-8 py-4">
          <StaticImage
            src="../images/Logo -- Large.png"
            placeholder="blurred"
            alt="nh-logo"
            height={100}
            width={200}
            layout="fixed"
            formats={["auto", "webp"]}
          />
        </div>
        <section className="flex flex-col flex-wrap h-auto w-1/2 justify-center pr-4 bg-logo">
          <p className="text-xl font-bold subpixel-antialiased text-right">
            LAW OFFICE OF NICHOLAS K. HOLMES, PLLC
          </p>
          <p className="text-lg font-bold subpixel-antialiased text-right">
            131 N STATE ST, #7
          </p>
          <p className="text-lg font-bold subpixel-antialiased text-right">
            CONCORD, NH 03301
          </p>
          <p className="text-lg font-bold subpixel-antialiased text-right">
            <a className=" cursor-pointer focus:visible text-blue-800">
              nick@nb-holmes.com
            </a>
          </p>
          <p className="text-lg font-bold subpixel-antialiased text-right">
            <a className="focus:visible cursor-pointer text-blue-800">
              (603) 496-9204
            </a>
          </p>
        </section>
      </header>
      <main className="flex flex-col h-auto w-1/2 justify-between">
        <div className="mt-4 mb-2 flex flex-row h-auto w-full rounded-lg border-8 border-logo bg-logo">
          <div className="flex flex-col h-auto w-1/2 items-center justify-center pt-4 pb-4 pr-0 pl-4">
            <StaticImage
              src="../images/Holmes-Nicholas-WEB.jpg"
              placeholder="blurred"
              alt="nicholas-k-holmes-esq"
              layout="fixed"
              formats={["auto", "webp"]}
              className="rounded-lg border-8 bg-background"
            />
          </div>
          <div className="flex flex-col h-auto w-1/2 items-center justify-center pt-4 pb-4 pr-8 pl-0">
            <p className="text-2xl font-base subpixel-antialiased text-left italic">
              After forty years as a litigator focusing on large, complex
              commercial cases including construction disputes, my practice is
              now exclusively devoted to serving as a neutral, helping parties
              resolve construction disputes.
            </p>
          </div>
        </div>
        <section className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h1 className="font-bold text-6xl subpixel-antialiased text-left">
            NICHOLAS K. HOLMES, ESQ.
          </h1>
          <p className="font-bold text-3xl font-base italic pt-2 subpixel-antialiased text-left">
            Alternative Dispute Resolution Services
          </p>
        </section>
        <section className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h2 className="font-bold text-5xl subpixel-antialiase text-left underline underline-offset-4 decoration-4">
            EXPERIENCE
          </h2>
          {workExperience.content.map((data, index) => {
            return (
              <>
                <p
                  className="font-base text-lg font-base py-2 text-left"
                  key={`content_id_${index}`}
                >
                  <span className="font-bold text-xl">{data.employer}</span> |{" "}
                  {data.city}, {data.state}{" "}
                  <span className="italic">
                    ({data.startYear} - {data.endYear})
                  </span>
                </p>
              </>
            );
          })}
        </section>
        <span className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h2 className="font-bold text-5xl subpixel-antialiased text-left underline underline-offset-4 decoration-4">
            REPRESENTATIVE CASES
          </h2>
          {representativeCases.content.map((data, index) => {
            return (
              <>
                <p
                  className="font-base text-lg font-base py-2 text-left"
                  key={`content_id_${index}`}
                >
                  <span className="font-bold text-xl">{data.description}</span>{" "}
                  | {data.venue} - {data.state}
                </p>
              </>
            );
          })}
        </span>
        <section className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h2 className="font-bold text-5xl subpixel-antialiased text-left underline underline-offset-4 decoration-4">
            PROFESSIONAL MEMBERSHIPS
          </h2>
          {professionalMemberships.content.map((data, index) => {
            return (
              <>
                <p
                  className="font-base text-lg font-base py-2 text-left"
                  key={`content_id_${index}`}
                >
                  <span className="font-bold text-xl">{data.position}</span> |{" "}
                  {data.organization}{" "}
                  <span className="italic">
                    ({data.startYear} - {data.endYear})
                  </span>
                </p>
              </>
            );
          })}
        </section>
        <section className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h2 className="font-bold text-5xl subpixel-antialiased text-left underline underline-offset-4 decoration-4">
            SELECTED PRESENTATIONS
          </h2>
          {speakingEngagements.content.map((data, index) => {
            return (
              <>
                <p
                  className="font-base text-lg font-base py-2 text-left"
                  key={`content_id_${index}`}
                >
                  <span className="font-bold text-xl">{data.description}</span>{" "}
                  | {data.city}, {data.state}{" "}
                  <span className="italic">({data.date})</span>
                </p>
              </>
            );
          })}
        </section>
        <section className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h2 className="font-bold text-5xl subpixel-antialiased  text-left underline underline-offset-4 decoration-4">
            PUBLICATIONS
          </h2>
          {publications.content.map((data, index) => {
            return (
              <>
                <p
                  className="font-base text-xl font-base py-2 text-left"
                  key={`content_id_${index}`}
                >
                  {data.authors}. "{data.publication}."{" "}
                  <span className="italic">{data.source}</span>.{" "}
                  {data.miscellaneous}
                </p>
              </>
            );
          })}
        </section>
        <section className="rounded-lg border-8 border-log my-2 p-4 bg-logo">
          <h2 className="font-bold text-5xl subpixel-antialiased  text-left underline underline-offset-4 decoration-4">
            EDUCATION
          </h2>
          {education.content.map((data, index) => {
            return (
              <>
                <p
                  className="font-base text-lg pt-2 text-left"
                  key={`content_id_${index}`}
                >
                  <span className="text-xl font-bold">{data.school}</span> |{" "}
                  {data.city}, {data.state}
                </p>
                <p className="text-lg font-base pl-12 pt-2 pb-4 text-left">
                  <span className="font-bold">{data.degree}</span>,{" "}
                  {data.honors}{" "}
                  <span className="italic">(Class of {data.endYear})</span>
                </p>
              </>
            );
          })}
        </section>
        <footer className="flex flex-row flex-wrap h-auto w-full">
          <section className="flex flex-ROW flex-wrap h-auto w-full justify-center pr-4">
            <p className="text-xl font-bold subpixel-antialiased">
              LAW OFFICE OF NICHOLAS K. HOLMES, PLLC
            </p>
          </section>
        </footer>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
