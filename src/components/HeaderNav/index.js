import React, {useState, useEffect} from 'react'
import logoSvg from '../../assets/img/logo.svg'

const HeaderNav = () => {

  const [onScroll, setScroll] = useState(false)

  const onScrollWindow = (e) => {
    console.log(e.target.scrollingElement.scrollHeight)
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
                  <li className="nav-list-item"><span>home</span></li>
                  <li className="nav-list-item"><span>location</span></li>
                </ul>
                <ul className="nav-list mobile">
                  <li className="nav-list-item hamburger-menu">
                    <button className="btn-hamburger">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
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