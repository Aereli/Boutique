import App, { Container } from 'next/app'
import Page from '../components/Page'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'
import { ApolloClient } from 'apollo-boost'

class Myapp extends App {
  static async getInitialProps({Component, ctx }){
    let pageProps = {}
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx)
    }
    //this exposese the query to the user
    pageProps.query = ctx.query
    return { pageProps }
  }
  render(){
    const { Component, apollo, pageProps } = this.props
    
    return(
      <Container>
        <ApolloProvider client={ApolloClient}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    ) 
  }
} 

export default Myapp