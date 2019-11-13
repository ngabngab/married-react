import React, {useEffect, useRef} from 'react'
import {ReactComponent as NameIconSvg} from '../../assets/img/name.svg'

const HomePage = () => {

  const preLoadingScreenContainer = useRef();

  useEffect(() => {
    setTimeout(() => {
      preLoadingScreenContainer.current.classList.add('zoom-out')
    }, 6000);
  }, [])

  return (
      <div className="pre-loading-screen" ref={preLoadingScreenContainer}>
        <NameIconSvg />
      </div>
  )
}

export default HomePage;