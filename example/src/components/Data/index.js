import React from 'react'
import ApolloQueryDataWrapper from '@loadup/apollo-query-data-wrapper'

const Data = () => (
  <ApolloQueryDataWrapper
    data={{ pricingDetails: { totalPrice: 50 }}}
    DataComponent={({ data }) => <h1>${data.pricingDetails.totalPrice}</h1>}
  />
)

export default Data
