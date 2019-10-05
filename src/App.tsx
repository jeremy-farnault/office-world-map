// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react'
import { Auth } from 'aws-amplify'
import React, { useEffect } from 'react'
import './App.css'
import { Filters, Map } from './components'

const App: React.FC = () => {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(error => console.log({ error }))
  })

  return (
    <div>
      <Filters />
      <Map />
    </div>
  )
}

export default withAuthenticator(App, { includeGreetings: true })
