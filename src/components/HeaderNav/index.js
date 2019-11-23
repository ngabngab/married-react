import React from 'react'
import logoSvg from '../../assets/img/logo.svg'

const HeaderNav = () => {
  return (
    <React.Fragment>
      <header className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="logo-wrapper">
                <img src={logoSvg} alt="logo" />
              </div>
            </div>
            <div className="col-8">
              <nav className="nav-top">
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default HeaderNav