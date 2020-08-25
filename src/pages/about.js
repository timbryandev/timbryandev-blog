import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

import Avatar from "../components/avatar"

function About() {
  useEffect(() => {
    document.querySelector(".navbar").scrollIntoView()
  })
  return (
    <Layout>
      <SEO title="About" />
      <article id="about">
        <h2>
          <span className="fas fa-microchip" aria-hidden="true"></span> About
          Tim
        </h2>
        <Avatar floatDirection="right" />
        <p>
          Confident front-end web developer with experience in back-end &amp;
          software development who also offers impartial advice on web
          solutions. A perpetual learner with a genuine passion for technology,
          science, learning and DIY.
        </p>
        <div style={{ clear: "both" }}></div>
        <p>
          <strong>Likes</strong>: writing code, solving puzzles, telling jokes,
          playing bass guitar, DIY projects, and enthusing about science,
          electronics &amp; technology.
        </p>
        <p>
          <strong>Dislikes</strong>: being late, being untidy or unorganised,
          using/developing for Internet Explorer, tab VS spaces, odd numbers.
        </p>
        <section>
          <p>
            "From a young age, I've has had a fascination with technology and
            can&apos;t remember a time when I wasn&apos;t tinkering with, taking
            apart or breaking things.
          </p>
          <p>
            I can usually be found playing around and experimenting on Debian
            (home server), Manjaro (personal machine) and RaspianOS (for various
            Pi's), as well as Windows 10 (work laptop) for my main development
            tasks."
          </p>
        </section>
        <p>
          If you want to get in touch you can grab on the social medias listed
          under <Link to="#footer">"Find me online"</Link> in the footer, email
          me on <a href="mailto:hi@timbryan.dev">hi@timbryan.dev</a> or use the
          contact form at the bottom of this page.
        </p>
      </article>
      <ContactForm />
    </Layout>
  )
}

export default About
