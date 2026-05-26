import Image from "next/image";
import Link from "next/link";
import { RevealSection } from "@/components/ui/reveal-section";

export default function HomePage() {
  return (
    <div className="space-y-12 py-12">
      <RevealSection className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft sm:p-12">
        <Image
          src="/logo.png"
          alt="DFX Engineering logo"
          width={680}
          height={360}
          priority
          className="mx-auto h-auto w-[68%] max-w-3xl"
        />

        <h1 className="mt-8 text-3xl font-bold text-slate-900 sm:text-4xl">Website Under Construction</h1>
        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          We are currently building our new website. Core pages are already available and you can continue
          browsing the site.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
          >
            About Us
          </Link>
          <Link
            href="/solutions/burn-in-rack"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            View Solutions
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Contact
          </Link>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-12">
        <div className="space-y-7 text-slate-900">
          <p className="text-lg leading-relaxed">
            DFX Engineering was established in early 2005. The company specializes in providing test solutions for electronic boards and systems, including the design and development of integrated hardware and software systems, as well as the supply of equipment from leading global test and measurement companies.
          </p>

          <p className="text-lg leading-relaxed">
            We offer our extensive professional expertise and many years of experience as an outsourcing partner.
          </p>
          <p className="text-lg leading-relaxed">
            Our services can be delivered as a complete turnkey solution or in collaboration with the customer’s engineering team.
          </p>

          <p className="text-lg leading-relaxed">
            Over the years, we have successfully completed projects for leading companies in Israel.
          </p>

          <p className="text-lg leading-relaxed">
            Our professional team brings many years of industry experience in hardware, mechanics, and software development.
          </p>

          <section className="space-y-4 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Board-Level Test Program Development</h2>
            <p className="text-lg leading-relaxed">
              Design and development of Design For Test (DFT) solutions - in-depth analysis of electrical schematics and recommendations for improving fault coverage for both ICT and dedicated testing solutions.
            </p>
            <p className="text-lg leading-relaxed">
              Design for Boundary Scan testing technology - IEEE 1149.1.
            </p>
            <p className="text-lg leading-relaxed">
              Development and manufacturing of test fixtures for production floor testing, including board design and development when required.
            </p>
            <p className="text-lg leading-relaxed">
              Preparation of technical documentation.
            </p>
            <p className="text-lg leading-relaxed">
              Installation and on-site customer training.
            </p>
            <p className="text-lg leading-relaxed">
              Product support, including technical change updates and ongoing maintenance.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Functional Test Development</h2>
            <p className="text-lg leading-relaxed">
              Functional testing - providing integrated hardware and software solutions tailored to customer requirements. As part of this activity, we collaborate with your development team in defining test requirements and jointly preparing detailed test specifications.
            </p>
            <p className="text-lg leading-relaxed">
              Development and coding of test software, including operator interfaces, execution environments, and databases for test data collection.
            </p>
            <p className="text-lg leading-relaxed">Software tools we work with include:</p>
            <ul className="list-disc space-y-1 pl-6 text-lg leading-relaxed">
              <li>LabVIEW</li>
              <li>Linux</li>
              <li>LabWindows/CVI</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Design and manufacturing of mechanical fixtures at both board and system levels.
            </p>
            <p className="text-lg leading-relaxed">
              Design and assembly of 19” rack systems according to project requirements.
            </p>
            <p className="text-lg leading-relaxed">
              Service and support contracts for hardware and software following installation.
            </p>
          </section>
        </div>
      </RevealSection>
    </div>
  );
}

