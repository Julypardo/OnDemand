import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Services from '../components/Services'
import Wave from '../components/Wave'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Welcome To Our Studio!</h1>
        <p>DIGITAL DESIGNERS</p>
        <Link to="/page-2/">TELL ME MORE</Link>
        <Wave />
      </div>
    </div>

    <section class="page-section" id="services">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Nuestros Servicios</h2>
          <h3 class="section-subheading text-muted">Todo lo que necesitas para un sitio Web o una App a tu medida:</h3>
        </div>
        <div class="row text-center">
          <Services title="Cívico"
           text="Mensaje"
           image={require('../Images/service/android.png')} />

<Services title="Cívico"
           text="Mensaje"
           image={require('../Images/service/android.png')} />

<Services title="Cívico"
           text="Mensaje"
           image={require('../Images/service/android.png')} />

<Services title="Cívico"
           text="Mensaje"
           image={require('../Images/service/android.png')} />
        </div>
      </div>
    </section>

    <div className="Cards">
      <h2>PORTFOLIO</h2>
      <h1>We present a quick sample of the projects we have worked on.</h1>

      <div className="CardGroup">
        <Card title="Cívico"
          image={require('../Images/01-thumbnail.png')} />

        <Card title="Cívico Negocios"
          image={require('../Images/02-thumbnail.png')} />

        <Card title="Hush"
          image={require('../Images/03-thumbnail.png')} />

        <Card title="Easy VPN"
          image={require('../Images/04-thumbnail.png')} />

        <Card title="VitalHand"
          image={require('../Images/05-thumbnail.png')} />

      </div>
    </div>
  </div>
)

export default IndexPage



