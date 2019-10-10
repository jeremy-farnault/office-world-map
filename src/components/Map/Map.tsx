import { GoogleApiWrapper } from 'google-maps-react'
import React, { memo } from 'react'

export const Map: React.FC = memo(() => {
  return <div></div>
})

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Map)
