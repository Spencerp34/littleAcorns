import styled from 'styled-components';

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 10vh;
    background-color: #61dafb;
    width: 100%;
    position: static;
    left: 0;
    bottom: 0;

    
`

function Footer(){
    return(
        <FooterDiv>
            <footer>
                <p>©2021 by Little Acorns LLC. Proudly created with React</p>
            </footer>
        </FooterDiv>
    )
}

export default Footer;