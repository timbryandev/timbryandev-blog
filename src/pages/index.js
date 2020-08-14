import React, { useState } from "react"
// import { withPrefix, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Avatar from "../components/avatar"

const IndexPage = () => {
  const [dropdownStates, setDropdownStates] = useState({})

  function toggleNav(elementId) {
    setDropdownStates(prevState => ({
      ...prevState,
      [elementId]: !prevState[elementId],
    }))
  }

  const MainContent = () => {
    return (
      <>
        <article id="about">
          <h2>
            <span className="fas fa-microchip" aria-hidden="true"></span> About
            Tim
          </h2>
          <p>
            Confident front-end web developer with experience in back-end &amp;
            software development who also offers impartial advice on web
            solutions. Perpetual learner with a genuine passion for technology,
            science, learning and DIY.
          </p>
          <p>
            <strong>Likes to</strong>: write code, tell jokes, play the bass
            guitar, take on DIY projects and enthuse about science, electronics
            &amp; technology.
          </p>
          <p>
            <strong>Doesn&apos;t like to</strong>: be late, be untidy or
            unorganised, use Internet Explorer, tab versus spaces and dislikes
            odd numbers.
          </p>
          <Avatar />
          <p>
            From a young age, I've has had a fascination with technology and
            can&apos;t remember a time when I wasn&apos;t tinkering with, taking
            apart or breaking things.
            <br />I can usually be found playing around and experimenting on
            Debian (home server), Manjaro (personal laptop) and RaspianOS (three
            guesses what what I use that on) depending on mood and the task at
            hand, as well as Windows 10 (work laptop) for my main development
            tasks.
          </p>
          <p>
            If you want to get in touch you can grab on the social medias in the
            footer, email me on
            <a href="mailto:hi@timbryan.dev">hi@timbryan.dev</a> or use the
            contact form at the bottom of this page.
          </p>
        </article>
        <article
          id="experience"
          className={`card dropdown ${
            dropdownStates.experience ? "dropdown-show" : ""
          }`}
        >
          <header>
            <h2
              className="dropdown-toggle"
              onClick={toggleNav.bind(this, "experience")}
              onKeyDown={toggleNav.bind(this, "experience")}
            >
              <span className="fas fa-laptop-code" aria-hidden="true"></span>
              Experience
            </h2>
          </header>
          <section className="dropdown-content">
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
          <section className="dropdown-content">
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
          <section className="dropdown-content">
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
        </article>
        <article
          id="projects"
          className={`card dropdown ${
            dropdownStates.projects ? "dropdown-show" : ""
          }`}
        >
          <header>
            <h2
              className="dropdown-toggle"
              onClick={toggleNav.bind(this, "projects")}
              onKeyPress={toggleNav.bind(this, "projects")}
            >
              <span className="fas fa-code" aria-hidden="true"></span> Projects
            </h2>
          </header>
          <h3>Work Projects</h3>
          <section className="dropdown-content">
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
          <section className="dropdown-content">
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
          <section className="dropdown-content">
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
          <section className="dropdown-content">
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
        </article>
        <article
          id="education"
          className={`card dropdown ${
            dropdownStates.education ? "dropdown-show" : ""
          }`}
        >
          <header>
            <h2
              className="dropdown-toggle"
              onClick={toggleNav.bind(this, "education")}
              onKeyPress={toggleNav.bind(this, "education")}
            >
              <span className="fas fa-university" aria-hidden="true"></span>{" "}
              Education
            </h2>
          </header>
          <section className="dropdown-content">
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
          <section className="dropdown-content">
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
          <section className="dropdown-content">
            <h3>A-Levels</h3>
            <p>Marple Sixth Form College</p>
            <ul className="arrow">
              <li>BTEC Cert Business Studies</li>
              <li>Electronics</li>
            </ul>
          </section>
          <section className="dropdown-content">
            <h3>GCSEs</h3>
            <p>
              11 at A-C including Maths, English, Tripple Science, ICT, Music,
              Graphics…
            </p>
          </section>
        </article>
        <section id="contact" className="card">
          <h2>
            <span className="fas fa-at" aria-hidden="true"></span> Contact
          </h2>
          <p>
            Use the form below to get in touch. Alternatively, you can send an
            email directly to{" "}
            <a href="mailto:hi@timbryan.dev" title="Send Tim an email">
              hi@timbryan.dev
            </a>
            .
          </p>
          <form action="https://formspree.io/meqrploz" method="post">
            <label htmlFor="name">
              <span className="sr-only" role="none">
                Name:
              </span>
              <input
                id="name"
                required
                type="text"
                className="name"
                name="name"
                placeholder="Your Name"
              />
            </label>
            <label htmlFor="email">
              <span className="sr-only" role="none">
                Email:
              </span>
              <input
                required
                type="email"
                className="email"
                name="email"
                placeholder="Email Address"
              />
            </label>
            <br />
            <label htmlFor="message">
              <span className="sr-only" role="none">
                Message:
              </span>
              <textarea
                required
                className="message"
                name="message"
                placeholder="Type your Message"
                rows="6"
              ></textarea>
            </label>
            <p className="form-status"></p>
            <button className="submit" type="submit">
              <i className="fas fa-paper-plane"></i> Send
            </button>
          </form>
        </section>
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
