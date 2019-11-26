import React, {useState, useEffect} from 'react'
import logoSvg from '../../assets/img/logo.svg'

const HeaderNav = ({ menuMapActive }) => {

  const [onScroll, setScroll] = useState(false)

  const onScrollWindow = (e) => {
    if(e.target.scrollingElement.scrollTop > 0) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollWindow)
    return() => {
      window.removeEventListener('scroll', onScrollWindow)
    }
  }, [])

  const goToMap = () => {
    const mapSection = document.querySelector('.map-section')
    mapSection.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const goToHome = () => {
    const homeSection = document.querySelector('body')
    homeSection.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <React.Fragment>
      <header className={`header-top ${onScroll ? 'on-scroll' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="logo-wrapper">
                <img src={logoSvg} alt="logo" />
              </div>
            </div>
            <div className="col-8">
              <nav className="nav-top">
                <ul className="nav-list desktop">
                  <li className={ `nav-list-item ${menuMapActive ? '' : 'is-active' }` }><span onClick={ goToHome }>home</span></li>
                  <li className={ `nav-list-item ${menuMapActive ? 'is-active' : '' }` }><span onClick={ goToMap }>location</span></li>
                </ul>
                <ul className="nav-list mobile">
                  <li className="hamburger-menu">
                    <button className="btn-hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </li>
                  <li className="full-hamburger-menu">
                    
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default HeaderNav