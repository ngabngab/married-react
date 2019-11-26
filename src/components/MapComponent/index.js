import React, { useState, useRef, useEffect } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapComponent = ({ google, setDomElement }) => {

  const [latlng, setLatLng] = useState({ lat: -6.2446969, lng: 106.8509677 })
  const [visibleInfo, setVisibleInfo] = useState(false)
  const [activeMarker, setActiveMarker] = useState({})
  const [locationName, setLocationName] = useState('Location : Renno rent car')
  const mapContainer = useRef()

  const initialObserver = () => {
    if(mapContainer) {
      setDomElement(mapContainer.current)
    }
  }


  const clickShowOnMap = (valueLatlng, locationNamePar) => {
    setLatLng(valueLatlng)
    setLocationName(locationNamePar)
  }

  const onMarkerClick = (props, marker, e) => {
    setActiveMarker(marker)
    setVisibleInfo(true)
  }

  const onCloseInfoWindow = () => {
    if (visibleInfo) {
      setActiveMarker(null)
      setVisibleInfo(false)
    }
  }

  const mapStyles = {
    width: '100%',
    height: '100%',
    minHeight: `${320 / 16}rem`
  };

  useEffect(() => {
    initialObserver()
  })

  return (
    <React.Fragment>
      <section className="map-section" ref={ mapContainer }>
        <div className="container map-container">
          <div className="row">
            <div className="col-md-4 row">
              <div className="col-6 col-md-12 location-container">
                <h3 className="location-title">Location</h3>
                <h4 className="location-detail">
                  Renno rent car
                <br />
                  Jl cikoko barat dalam I
                <br />
                  RT 04/03 no 10-15, Cikoko
                <br />
                  Pancoran - Jakarta selatan
                </h4>
                <button className="btn btn-primary" onClick={() => clickShowOnMap({ lat: -6.2446969, lng: 106.8509677 }, 'Location : Renno rent car')} >Show on map</button>
              </div>
              <div className="col-6 col-md-12 location-container">
                <h3 className="location-title">Parking area</h3>
                <h4 className="location-detail">
                  Gedung MLI
                <br />
                  Jl. Letjen M.T. Haryono
                <br />
                  No.Kav. 49, Cikoko
                <br />
                  Pancoran - Jakarta selatan
                </h4>
                <button className="btn btn-primary" onClick={() => clickShowOnMap({ lat: -6.2437293, lng: 106.8505825 }, 'Parking area : Gedung MLI')} >Show on map</button>
              </div>
            </div>
            <div className="col-md-8 map-wrapper">
              <Map
                google={google}
                zoom={18}
                style={mapStyles}
                initialCenter={latlng}
                center={latlng}
                onClick={onCloseInfoWindow}
              >
                <Marker position={latlng} onClick={onMarkerClick} />
                <InfoWindow visible={visibleInfo} marker={activeMarker} closeWindow={onCloseInfoWindow}>
                  <div className="info-map-window">
                    <span>{locationName}</span>
                  </div>
                </InfoWindow>
              </Map>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 row"></div>
            <div className="col-md-8 cta-map">
              <a href="https://www.google.com/maps/place/Renno+Rent+Car/@-6.2446916,106.848779,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f3bafcdbd32f:0xe4cdf223b521ea70!8m2!3d-6.2446969!4d106.8509677"
                target="_blank"
                className="btn btn-secondary"
                rel="noopener noreferrer"
              >Open at google map</a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API
})(MapComponent);