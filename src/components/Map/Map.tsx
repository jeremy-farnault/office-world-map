import { GoogleApiWrapper, Map } from 'google-maps-react'
import React, { memo } from 'react'

const MapContainer: React.FC = memo(() => {
  return (
    <Map
      google={window.google}
      initialCenter={{
        lat: -41.284378,
        lng: 174.776847
      }}
      zoom={14}
    />
  )
})

export const GoogleMap = GoogleApiWrapper({
  apiKey: 'AIzaSyCIBnvJHBDiNZGKA9yLU_4UfqEiSfI1fBc'
})(MapContainer)
