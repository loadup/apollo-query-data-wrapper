# @loadup/apollo-query-data-wrapper

> Conditional rendering wrapper for Apollo&#x27;s Query component

[![NPM](https://img.shields.io/npm/v/@loadup/apollo-query-data-wrapper.svg)](https://www.npmjs.com/package/@loadup/apollo-query-data-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @loadup/apollo-query-data-wrapper
```

## Usage

Instead of manually checking the loading, error, and success conditions, we'll use the `ApolloQueryDataWrapper` to abstract that layer and perform conditional rendering for us.

#### Use the Wrapper inside a Apollo `Query`

```jsx
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import ApolloQueryDataWrapper from '@loadup/apollo-query-data-wrapper'  
 
const query = gql`
  query UserProfile($id: ID!) {
    user(id: $id) {
      email
      firstName
      id
      lastName
    }
  }
`
 
class WrapperExample extends Component {
  render () {
    return (
      <Query query={query}>
        {all => (
          <ApolloQueryDataWrapper
            {...all}
            DataComponent={({ data }) => <UserProfile user={data.user} />}
            ErrorComponent={({ error }) => <h1>{error.message}</h1>}
            LoadingComponent={() => <SuperCuteLoader />}
          />
        )}
      </Query>
    )
  }
}
 
export default WrapperExample
```

## License

MIT © [Loadup Technologies](https://github.com/loadup)
