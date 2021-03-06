import React, { Component } from 'react'
import NavLink from '../NavLink/NavLink'

class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = { visible: false }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu () {
    const currentState = this.state.visible

    this.setState({ visible: !currentState })
  }

  render () {
    const links = [
      {section: 'Home', position: 0},
      {section: 'About', position: this.props.bioScrollPos},
      {section: 'Projects', position: this.props.projectsScrollPos},
      {section: 'Contact', position: this.props.contactScrollPos}
    ]

    return (
      <nav className='nav' ref={this.props.navRef}>
        <div className='nav__desktop'>
          <ul className='nav__desktopLinks'>
            {links.map(link => <NavLink className='nav__navLinks' key={link.position} link={link} />)}
          </ul>
        </div>
        <div className='nav__mobile' onClick={this.toggleMobileMenu}>
          <i className='nav__icon fa fa-bars' />
          <ul
            className={this.state.visible
              ? 'nav__navLinks nav__navLinks--visible'
              : 'nav__navLinks'}
          >
            {links.map(link => <NavLink key={link.position} link={link} />)}
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
