import styled from 'styled-components';
import profile from '../assets/profile.jpg'

const ContactDiv = styled.div`
    img{
        border-radius: 50%;
        width: 20%;
    }
`

function Contact(){
    return(
        <ContactDiv>
            <img src={profile} alt='' />
            <h2> Contact Me</h2>
            <h3>✉️Email:</h3>
            <h4>talia.littleacorns@gmail.com</h4>
            <h3>📞 Phone:</h3>
            <h4>(801) 739 - 2830</h4>
            
        </ContactDiv>
    )
}

export default Contact