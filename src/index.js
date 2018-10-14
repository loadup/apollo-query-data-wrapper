import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ApolloQueryDataWrapper extends Component {
  render() {
    const {
      data,
      DataComponent,
      error,
      ErrorComponent,
      loading,
      LoadingComponent,
      ...rest
    } = this.props

    // Handle the loading case
    if (loading) {
      return <LoadingComponent data={data} {...rest} />
    }

    // Handle the error case
    if (error) return <ErrorComponent error={error} {...rest} />

    // Handle the success case
    if (!loading && !error && data) {
      return <DataComponent data={data} {...rest} />
    }
  }
}

ApolloQueryDataWrapper.propTypes = {
  data: PropTypes.object,
  DataComponent: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ErrorComponent: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  LoadingComponent: PropTypes.func.isRequired,
}

ApolloQueryDataWrapper.defaultProps = {
  DataComponent: () => <h1>Got the data!</h1>,
  ErrorComponent: ({ error }) => <h1>There was an error: {error.message}</h1>,
  LoadingComponent: () => <h1>Loading...</h1>,
}

export default ApolloQueryDataWrapper
