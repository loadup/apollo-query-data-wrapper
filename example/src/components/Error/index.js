import React from 'react'
import ApolloQueryDataWrapper from '@loadup/apollo-query-data-wrapper'

const Error = () => (
  <ApolloQueryDataWrapper
    error={{ message: 'This is an example Error state.' }}
    LoadingComponent={({ error }) => <h1>{error.message}</h1>}
  />
)

export default Error
