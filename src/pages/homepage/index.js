import React, { useEffect, useRef, useState } from 'react'
import { ReactComponent as NameIconSvg } from '../../assets/img/name.svg'
import HeroComponent from '../../components/HeroComponent'
import HeaderNav from '../../components/HeaderNav'

const HomePage = () => {

  const preLoadingScreenContainer = useRef();

  const [imgOpener, setImageOpener] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      preLoadingScreenContainer.current.classList.add('zoom-out')
      setTimeout(() => {
        setImageOpener(false)
      }, 2000)
    }, 6000);
  }, [])

  return (
    <React.Fragment>
      { !imgOpener ? <HeaderNav /> : '' }
      <main>
        { imgOpener ? <div className="pre-loading-screen" ref={preLoadingScreenContainer}>
          <NameIconSvg />
        </div> :  
        <HeroComponent /> }
      </main>
    </React.Fragment>
  )
}

export default HomePage;