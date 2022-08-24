import {Link} from "react-router-dom";
import styled from 'styled-components';
import Carousel from './carousel'

import teaching from '../assets/teaching.webp'
import smallerTeaching from '../assets/smallerTeaching.PNG'
import girl from '../assets/girl.webp'
import boy from '../assets/boy.webp'

const HomeDiv = styled.div`
    .story{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .myStory{
        height: 25vh;
        width: 60%;
        background-image: url(${teaching});
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        border-radius: 25px;
        background-position: right;
    }
    span{
        color: #1D2564;
        font-weight: bold;
        font-size: 1.5em;
        margin-top: 0%;
    }
    #story{
        color: orange;
    }
    .short{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .sq{
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .sq img{
        max-width: 100%;
        background-position: center;
    }
    .nav{
        text-decoration: none;
        color: #61dafb;
        padding: 5%;
        border: 2px solid #61dafb;
        border-radius: 25px;
        transition: .3s;
    }
    .nav:hover{
        background-color: #61dafb;
        color: white;
    }
    
    @media (max-width: 1100px){
        .short{
            margin-bottom: 15vh;
        }
        p{
            font-size: 1rem;
        }
    }

    @media (max-width: 800px) {
        .myStory{
            background-image: url(${smallerTeaching});
            background-repeat: no-repeat;
        }

        .short{
            flex-direction: column;
            flex-wrap: nowrap;
            margin-bottom: 1vh;
        }
        .sq:nth-child(2){
            display: none;
        }
        .sq:nth-child(3){
            display: none;
        }
        p{
            font-size: 0.8rem;
        }
    }

`

function Home(){
    return(
        <div className='home'>
            <HomeDiv>
                <h2>Welcome to my Home!</h2>
                <Carousel />
                <br/>
                <div className='story'>
                    <div className='myStory' >
                        <span id="story">My Story</span>
                    </div>        
                    <p>My name is Talia, I have been passionate about teaching my entire life. I am a licensed care-taker for children and I am currently working towards a degree in elementary education where I am excited to forward my goals of being an educator. I live and operate my preschool from my home in Silverlake Eagle Mountain.</p>
                </div>
                <h3>Information Pack</h3>
                <div className='short'>
                    <div className='sq'>
                        <h4>Schedule & Pricing</h4>
                        <p>View times and prices for available classes!</p>
                        <Link className='nav' to='/info'>Schedule/Pricing</Link>
                    </div>
                    <div className='sq'>
                        <img src={girl} alt='' />
                    </div>
                    <div className='sq'>
                        <img src={boy} alt='' />
                    </div>
                    <div className='sq'>
                    <h4>Ready to Register?</h4>
                        <p>After Filling out the Registration Form I will contact you to get the materials fee ($55 for 3yo and $70 for 4yo classes non-refundable) as well as sending you the enrollment form!</p>
                        <Link className="nav" to='/Register'>Register</Link>
                    </div>
                </div>
            </HomeDiv>
        </div>
    )
}

export default Home