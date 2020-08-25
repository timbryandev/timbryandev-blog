import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

import Avatar from "../components/avatar"

const IndexPage = () => {
  const [dropdownStates, setDropdownStates] = useState({})

  function toggleNav(elementId) {
    setDropdownStates(prevState => ({
      ...prevState,
      [elementId]: !prevState[elementId],
    }))
  }

  function articleAbout() {
    return (
      <article id="about">
        <h2>
          <span className="fas fa-microchip" aria-hidden="true"></span> About
          Tim
        </h2>
        <Avatar floatDirection="right" />
        <p>
          Tim is a confident front-end web developer with experience in
          back-end, full-stack &amp; software development solutions. A perpetual
          learner with a genuine passion for technology, science, learning and
          DIY.
        </p>
        <Link to="/about" onClick={toggleNav.bind(this)}>
          Read more about Tim
        </Link>

        <div style={{ clear: "both" }}></div>
      </article>
    )
  }

  function articleExperience() {
    return (
      <article
        id="experience"
        className={`card dropdown ${
          dropdownStates.experience ? "dropdown-show" : ""
        }`}
      >
        <header>
          <button
            className="card-toggle"
            onClick={toggleNav.bind(this, "experience")}
            onKeyDown={toggleNav.bind(this, "experience")}
          >
            <h2 className="dropdown-toggle">
              <span className="fas fa-laptop-code" aria-hidden="true"></span>{" "}
              Experience
            </h2>
          </button>
        </header>
        <div className="dropdown-content">
          <section>
            <h3>
              <a href="https://www.bpp.com" title="View BPP's website">
                BPP
              </a>{" "}
              <span className="duration">
                <time dateTime="2015-06-01">Jun 2015</time> &ndash; Present
                <span
                  className="calculate-date"
                  data-start="2015-06-01"
                  data-end=""
                ></span>
              </span>
            </h3>

            <h4>Digital Technology Developer</h4>
            <span className="duration">
              <time dateTime="2018-09-01">Sep 2018</time> &ndash; Present
              <span
                className="calculate-date"
                data-start="2018-09-01"
                data-end=""
              ></span>
            </span>
            <ul className="arrow">
              <li>
                Line manage members of the Digital Learning Development Team
                within the
                <abbr title="Digital Technology Solutions">DTS</abbr> unit.
              </li>
              <li>
                Aid in the creation, deployment and support of e-learning
                material, either bespoke, rapid developed or VLE platform-based
                and to support the delivery of various developments including
                Moodle and mobile applications.
              </li>
              <li>
                Working with various web and desktop technologies, being at the
                forefront of our digital product development.
              </li>
              <li>
                Work with senior stakeholders to develop and deliver new and
                innovative learning materials and platforms.
              </li>
              <li>Mentoring new starters and apprentices</li>
            </ul>
            <h4>E-Learning Developer</h4>
            <span className="duration">
              <time dateTime="2015-06-01">Jun 2015</time> &ndash; Aug 2018
              <span
                className="calculate-date"
                data-start="2015-06-01"
                data-end="2018-08-31"
              ></span>
            </span>
            <ul className="arrow">
              <li>
                Maintain, develop and improve existing E-Learning products and
                resources.
              </li>
              <li>
                Develop new and innovative products, assessments and user
                experiences online
              </li>
              <li>Develop tools to automate manual tasks</li>
              <li>
                Supporting internal and external clients, staff and students
                with technical support and troubleshooting.
              </li>
            </ul>
          </section>
          <section>
            <h3>
              <a
                href="https://www.stockport.ac.uk"
                title="View Stockport College's website"
              >
                Stockport College
              </a>
            </h3>
            <h4>E-Learning &amp; E-Resources Developer</h4>
            <p className="duration">
              <time dateTime="2014-06-01">Jun 2014</time> -
              <time dateTime="2015-05-01">May 2015</time>
              <span
                className="calculate-date"
                data-start="2014-06-01"
                data-end="2015-05-31"
              ></span>
            </p>
            <ul className="arrow">
              <li>
                Maintain, develop and improve existing E-Learning products and
                resources using legacy and current web technologies
              </li>
              <li>
                Troubleshooting and technical support for students and staff
              </li>
              <li>
                Perform a significant part in the migrating from the existing
                out-dated VLE over to a bleeding-edge, purpose-built Moodle
                instance
              </li>
            </ul>
          </section>
          <section>
            <h3>
              <span title="Site is no longer being hosted">WOTMATSAW.com</span>
            </h3>
            <h4>WordPress Developer &amp; Site Administrator</h4>
            <p className="duration">
              <time dateTime="2016-09-01">Sept 2016</time> -
              <time dateTime="2019-02-01">Feb 2019</time>
              <span
                className="calculate-date"
                data-start="2016-09-01"
                data-end="2019-02-28"
              ></span>
            </p>

            <p>
              This project is no longer active, but at the time that it was, I
              was responsible for the following:
            </p>
            <ul className="arrow">
              <li>
                Host, maintain and further develop a custom WordPress
                installation
              </li>
              <li>Ongoing technical support and troubleshooting</li>
              <li>Developing ideas into working features</li>
            </ul>
          </section>
        </div>
      </article>
    )
  }

  function articleProjects() {
    return (
      <article
        id="projects"
        className={`card dropdown ${
          dropdownStates.projects ? "dropdown-show" : ""
        }`}
      >
        <header>
          <button
            className="card-toggle"
            onClick={toggleNav.bind(this, "projects")}
            onKeyPress={toggleNav.bind(this, "projects")}
          >
            <h2 className="dropdown-toggle">
              <span className="fas fa-code" aria-hidden="true"></span> Projects
            </h2>
          </button>
        </header>
        <div className="dropdown-content">
          <h3>Work Projects</h3>
          <section>
            <h3>Multi-purpose home server</h3>
            <p>
              The original plan was to use a Rasberry Pi 3B+ until I fried the
              CPU (shorted the 5V to the 3.3V rail…). So, I&apos;ve currently
              assembled a server from old desktop computer parts, running Debian
              at its heart with a typical LAMP setup plus other goodies for
              experimenting and development stuff.
            </p>
            <p>What it does now</p>
            <ul className="arrow">
              <li>Nextcloud: for easy file backups, storing and sharing</li>
              <li>JellyFin: easy music and video consumption</li>
            </ul>
            <p>Things I hope to do in the future</p>
            <ul className="arrow">
              <li>
                CCTV Live feed, backup, and offsite backups in case of sabotage
              </li>
              <li>Simple home automation</li>
            </ul>
          </section>

          <h3>Personal Projects</h3>
          <section>
            <h3>Multi-purpose home server</h3>
            <p>
              The original plan was to use a Rasberry Pi 3B+ until I fried the
              CPU (shorted the 5V to the 3.3V rail…). So, I&apos;ve currently
              assembled a server from old desktop computer parts, running Debian
              at its heart with a typical LAMP setup plus other goodies for
              experimenting and development stuff.
            </p>
            <p>What it does now</p>
            <ul className="arrow">
              <li>Nextcloud: for easy file backups, storing and sharing</li>
              <li>JellyFin: easy music and video consumption</li>
            </ul>
            <p>Things I hope to do in the future</p>
            <ul className="arrow">
              <li>
                CCTV Live feed, backup, and offsite backups in case of sabotage
              </li>
              <li>Simple home automation</li>
            </ul>
          </section>
          <section>
            <h3>"PiHole"</h3>
            <p>
              The goal: network-wide ad blocking using a Raspberry Pi and{" "}
              <a href="https://pi-hole.net/" title="Go to PiHole's website">
                PiHole
              </a>
              .
            </p>
            <p>
              Since I finished getting this working and implemented it into my
              home router, I can now enjoy the wonders of the internet with the
              peace of mind that <strong>all</strong> the internet-connected
              devices at home will be free from <em>most</em> ads and tracking
              services. This makes everything feel quicker by loading fewer
              resources, safer by allowing me to block suspicious domains
              network-wide and enjoy the web with fewer interruptions. I
              pay/donate to the services and products I want to enjoy and feel I
              shouldn&apos;t need to subsidise them any further with my ad and
              tracking data.
            </p>
          </section>
          <section>
            <h3>Quizzing Buzzers</h3>
            <p>
              A friend likes to host a bi-annual quiz and for a long time, they
              wished to have a "fastest finger" round but was limited by his
              options for implementing such a type of round.
            </p>
            <p>
              Enter Tim, with an Arduino Uno and a couple of weekends. I built 3
              physical buzzers and a control box for the host. The code on the
              Arduino controlled the different states, kept score for each
              buzzer and also played tunes that had to be pre-programmed as an
              array of frequencies and durations to play through a simple
              buzzer. I went with the Imperial March, the Jurrasic Park Theme
              and the James Bond 007 Theme as I thought these were widely
              recognisable and different enough from each other that we could
              easily work out which team buzzed first even though it was
              displayed on the host&apos;s LCD.
            </p>
            <p>
              Currently working on a V2.0 after feedback from the successful
              first outing - hoping they will see the light of day again in a
              future quiz round.
            </p>
          </section>
        </div>
      </article>
    )
  }

  function articleEducation() {
    return (
      <article
        id="education"
        className={`card dropdown ${
          dropdownStates.education ? "dropdown-show" : ""
        }`}
      >
        <header>
          <button
            className="card-toggle"
            onClick={toggleNav.bind(this, "education")}
            onKeyPress={toggleNav.bind(this, "education")}
          >
            <h2 className="dropdown-toggle">
              <span className="fas fa-university" aria-hidden="true"></span>{" "}
              Education
            </h2>
          </button>
        </header>
        <div className="dropdown-content">
          <section>
            <h3>FdSc Enterprise Computing</h3>
            <p>
              <a href="https://mmu.ac.uk" title="View MMU's website">
                Manchester Metropolitan University
              </a>
            </p>
            <ul className="arrow">
              <li>
                Web &amp; Multimedia (HTML5, CSS3, Javascript, jQuery, PHP,
                MySQL, Adobe CS6 Web and Design Suite)
              </li>
              <li>Advanced Programming (Java)</li>
              <li>
                Information Systems (Oracle Databases, SQL, Normalisation, UML)
              </li>
              <li>Computer System Fundamentals</li>
              <li>Career Development</li>
            </ul>
          </section>
          <section>
            <h3>Level 2 Retail Apprenticeship</h3>
            <p>
              <a
                href="https://www.derby-college.ac.uk/"
                title="View Derby College's website"
              >
                Derby College
              </a>
            </p>
            <ul className="arrow">
              <li>Customer Service in the Retail Sector</li>
              <li>The Retail Selling Process</li>
              <li>
                How Individuals and Teams Contribute to the Effectiveness of a
                Retail Business
              </li>
              <li>
                How Retail Businesses Maintain Health &amp; Safety on their
                Premises
              </li>
              <li>Security and Loss Prevention in a Retail Business</li>
              <li>Handling of Customer Payments in a Retail Business</li>
            </ul>
          </section>
          <section>
            <h3>A-Levels</h3>
            <p>Marple Sixth Form College</p>
            <ul className="arrow">
              <li>BTEC Cert Business Studies</li>
              <li>Electronics</li>
            </ul>
          </section>
          <section>
            <h3>GCSEs</h3>
            <p>
              11 at A-C including Maths, English, Tripple Science, ICT, Music,
              Graphics…
            </p>
          </section>
        </div>
      </article>
    )
  }

  const MainContent = () => {
    return (
      <>
        {articleAbout()}
        {articleExperience()}
        {articleProjects()}
        {articleEducation()}
        <ContactForm />
      </>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <MainContent />
    </Layout>
  )
}

export default IndexPage
