import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  margin-bottom: 5%;
  .logo{
      text-decoration: none;
      color: black;
      font-size: 3rem;
  }
`

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 95%;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 10%;
  
  .nav {
    margin-left: 5%;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: black;
    transition: .3s;
    :hover{
      color: rgb(216, 73, 73);
      font-weight: bold;
    }
  }
`

function Header(){
    return(
        <header>
            <Heading>
                <HeadWrap>
                    <Link className='logo' to='/'>Logo</Link>
                </HeadWrap>
                <NavBar>
                    <Link className="nav" to='/'>Home</Link>
                    <Link className="nav" to='/About'>About</Link>
                    <Link className="nav" to='/Contact'>Contact</Link>
                </NavBar>
            </Heading>
        </header>
        
    )
}

export default Header