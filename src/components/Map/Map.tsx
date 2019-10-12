import { GoogleApiWrapper, Map } from 'google-maps-react'
import React, { memo } from 'react'

const MapContainer: React.FC = memo(() => {
  return <Map google={window.google} zoom={14} />
})

export const GoogleMap = GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)
