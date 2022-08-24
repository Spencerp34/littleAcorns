import styled from 'styled-components';

const Heading = styled.div`
  display: flex;
  justify-content: right;
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


  @media (max-width: 650px){
    flex-direction: column;
    align-items: center;
    background-color: #9D9B95;
    border-radius: 10px;
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
                    <a className="nav" href='/Register'>Register For Class</a>
                    <a className='nav' href='/info'>Schedule/Pricing</a>
                    <a className='nav' href='/glimpse'>Day to Day</a>
                    <a className="nav" href='/Contact'>Contact</a>
                </NavBar>
                <Logo>
                    <a className='logo' href='/'>Little Acorns</a>
                </Logo>
            </Heading>
        </header>
        
    )
}

export default Header