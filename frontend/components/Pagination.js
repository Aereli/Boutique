import React from 'react'
import gql from 'graphql-tag'
import Head from 'next/head'
import Link from 'next/link'
import { Query  } from 'react-apollo'
import PaginationStyles from './styles/PaginationStyles'
import { perPage } from '../config'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY{
    itemsConnection{
      aggregate{
        count
      }
    }
  }
`

const Pagination = props => (
  <Query query={PAGINATION_QUERY}> 
      {({ data, loading , error }) => {
        if(loading) return <p>Loading...</p>
        const count = data.itemsConnection.aggregate.count
        const pages = Math.ceil(count / perPage)
        const page = props.page
      return(
        <PaginationStyles>
          <Head>
            <title>
              Boutique - page {page} of {pages}
            </title>
          </Head>
          <Link 
            prefetch
            href={{
            pathname: 'items',
            query: { page: page - 1 }
          }}>
          <a className="prev" aria-disabled={page <= 1}> ⬅ </a>
          </Link>
            <p>page {props.page}  of {pages}</p>
            <p> total items:{count}</p>
          <Link 
            prefetch
            href={{
            pathname: 'items',
            query: { page: page + 1 }
          }}>
          <a className="next" aria-disabled={page >= pages}> ➡ </a>
          </Link>
        </PaginationStyles>
      )}}
    </Query>
)


export default Pagination