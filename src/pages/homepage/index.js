import React, {useEffect} from 'react'
import {ReactComponent as NameIconSvg} from '../../assets/img/name.svg'

const HomePage = () => {

  useEffect(() => {
    document.querySelectorAll('#Layer_1 path').forEach((e) => {
      console.log(e.getTotalLength())
    })
  }, [])

  return (
      <div className="pre-loading-screen">
        <NameIconSvg />
      </div>
  )
}

export default HomePage;