import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
blue: '#a5cee4',
black: '#393939',
salmon: '#fda692',
beiche: '#fdeada',
lightbeiche: '#fff4eb',
maxWidth: '1000px',
bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
background: white;
color: ${props => props.theme.black};
`

const Inner = styled.div`
max-width: ${props => props.theme.maxWidth};
background: ${props => props.theme.blue};
margin: 0 auto;
padding: 2rem;
`

class Page extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <StyledPage>
          <Meta/>
          <Header/>
          <Inner>{ this.props.children }</Inner>
          </StyledPage>
        </ThemeProvider>
      </div>
    )
  }
}

 export default Page
   