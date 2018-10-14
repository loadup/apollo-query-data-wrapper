import React, { Component } from 'react'
import Data from './components/Data'
import Error from './components/Error'
import Loading from './components/Loading'

export default class App extends Component {
  render () {
    return (
      <div style={{ padding: 30 }}>
        <p>Data Example:</p>
        <Data />
        <p>Error Example:</p>
        <Error />
        <p>Loading Example:</p>
        <Loading />
      </div>
    )
  }
}
