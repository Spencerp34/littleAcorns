import slideBoy from '../assets/slideBoy.webp'

import styled from 'styled-components';

const RegistrationDiv = styled.div`
    .group{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

    @media (max-width: 800px) {
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
                        <p>Below you can fill out a registration form. After Filling out the Registration Form I will contact you to get the materials fee ($45 for 3yo and $60 for 4yo classes) as well as sending you the enrollment form and answer any questions that you may have.</p>
                        <p>The materials fee will be used to hold your spot and will not be refundable.</p>
                        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScp9p8yQQce6NCHaBt86Pq2JJ3nRmSE-r15etPO7TQRHNC6HQ/viewform">Registration Form</a>
                    </div>
                    <div className='pics'></div>
                </div>
                
            </RegistrationDiv>
        </div>
    )
}

export default Registration