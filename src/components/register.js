import slideBoy from '../assets/slideBoy.webp'
import styled from 'styled-components';

const RegistrationDiv = styled.div`
    .group{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 65vh;
    }
    .information{
        width: 45%;
    }
    
    a{
        text-decoration: none;
        color: #61dafb;
        padding: 1%;
        border: 3px solid #61dafb;
        border-radius: 15px;
        transition: .4s;
    }

    a:hover{
        background-color: #61dafb;
        color: white;
    }

    .pics{
        width: 45%;
        background-image: url(${slideBoy});
        border-radius: 15px;
    }

    @media (max-width: 1000px) {
        .group{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .information{
            width: 85%;
        }
        .pics{
            display: none;
        }
    }
`

function Registration(){
    return(
        <div className='registration'>
            <RegistrationDiv>
                <h1>Registration</h1>
                <div className='group'>
                    <div className='information'>
                        <h2>Registration Form</h2>
                        <p>Below you can fill out a registration form. After filling out the registration form I will contact you to get the materials fee ($55 for 3yo and $70 for 4yo classes) as well as sending you the enrollment form and answer any questions that you may have.</p>
                        <p>The materials fee will be used to hold your spot and will not be refundable.</p>
                        <a target="_blank" href="https://forms.gle/vpkoksBndyyskv6r7" rel="noreferrer">Registration Form</a>
                    </div>
                    <div className='pics'></div>
                </div>
                
            </RegistrationDiv>
        </div>
    )
}

export default Registration