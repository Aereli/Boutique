import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Header from '../components/Header'
import Meta from '../components/Meta'

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
margin: 0 auto;
padding: 2rem;
`

injectGlobal`
@font-face{
  font-family: 'Shadows Into Light';
  src: url('/static/ShadowsIntoLight-Regular.woff2')
  format('woff2');
  letter-spacing: 2rem;
}
html{
  box-sizing: border-box;
  font-size: 10px; 
} 
*, *:before, *after{
  box-sizing: inherit;
}
body{
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-family: 'Shadows Into Light', cursive;
  letter-spacing: 2px;
  a{
    text-decoration: none;
    color: ${theme.black};
  }
}
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
   