import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const Logo = styled.h1`
font-size: 4rem;
margin-left: 2rem;
position: relative;
z-index: 2;
text-align: center;

a{
  padding: 0.5rem 1rem;
  background: ${props => props.theme.blue};
  color: white;
  color: ${props => props.theme.black};
  text-decoration: none;
  @media(max-width: 1300px){
    margin: 0;
    grid-template-columns: 1fr;
    text-align: center;
  }
}
`
const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.blue};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media(max-width: 1300px){
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar{
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 2px solid ${props => props.theme.salmon}
  }
`

const Header = () => (
  <StyledHeader>
     <div className="bar">
       <Logo>
        <Link href="/">
          <a>Boutique</a>        
        </Link>
       </Logo>
       <Nav/>
     </div>
     <div className="sub-bar"> 
       <p>Search</p>
     </div>
     <div>Cart</div>
  </StyledHeader>
)
export default Header     