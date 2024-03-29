import {Link} from "react-router-dom";
import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-height: 30vh;
  width: 100%;


  .logo{
      text-decoration: none;
      color: #61dafb;
      font-size: 4rem;
  }
`

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5vh;
  justify-content: center;
  width: 95%;

  @media (max-width: 650px){
    margin: 1vh;
    .logo{
      font-size: 2rem;
    }
  }

`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 10%;
  text-align: right;
  line-height: 30px;

  
  .nav {
    margin-left: 5%;
    text-decoration: none;
    font-size: 1rem;
    font-family: sans-serif;
    color: #61dafb;
    transition: .5s;
    :hover{
      color: black;
      font-weight: bold;
    }
  }


  @media (max-width: 750px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0.33, 0.33, 0.33, .35);
    border-radius: 10px;
    margin-right: 0%;
    .nav{
      font-weight: bold;
    }
    .nav:hover{
      color: white;
    }
  }
`

function Header(){
    return(
        <header>
            <Heading>
                <NavBar>
                    <Link className="nav" to='/'>Home</Link>
                    <Link className="nav" to='/Register'>Register For Class</Link>
                    <Link className="nav" to='/info'>Schedule/Pricing</Link>
                    <Link className="nav" to='/glimpse'>Day to Day</Link>
                    <Link className="nav" to='/Contact'>Contact</Link>
                </NavBar>
                <Logo>
                    <Link className='logo' to='/'>Little Acorns</Link>
                </Logo>
            </Heading>
        </header>
        
    )
}

export default Header