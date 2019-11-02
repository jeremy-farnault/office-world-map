// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import React, { useEffect } from 'react'
import './App.css'
import { Filters, GoogleMap } from './components'
import { getEmployeeDetails } from './graphql/queries'

const App: React.FC = () => {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        getData()
        console.log({ user })
      })
      .catch(error => console.log({ error }))
  })

  async function getData() {
    try {
      const coinData = await API.graphql(graphqlOperation(getEmployeeDetails))
      console.log('data from API: ', coinData)
    } catch (err) {
      console.log('error fetching data..', err)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Filters />
      <GoogleMap />
    </div>
  )
}

export default withAuthenticator(App, { includeGreetings: true })
