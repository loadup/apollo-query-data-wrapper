import React from 'react'
import ApolloQueryDataWrapper from '@loadup/apollo-query-data-wrapper'

const Loading = () => <ApolloQueryDataWrapper loading LoadingComponent={() => <h1>Loading example...</h1>} />

export default Loading
