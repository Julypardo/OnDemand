import React from 'react'
import Link from 'gatsby-link'
import logo from '../Images/navbar-logo.svg'
import './Header.css'

class Header extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    hasScrolled: false   
  }
}

componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
    }
}

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={logo} width="150" /></Link>
        <Link to="/Services">SERVICES</Link>
        <Link to="/Portfolio">PORTFOLIO</Link>
        <Link to="/About">ABOUT</Link>
        <Link to="/Team">TEAM</Link>
        <Link to="/Contact">CONTACT</Link>
     </div>
    </div>
    )
  }
}

export default Header
