import styled from 'styled-components';
import playing from '../assets/playing.jpg'
import circle from '../assets/circle.jpg'
import lesson from '../assets/lesson.jpg'
import singing from '../assets/singing.jpg'

const GlimpseDiv = styled.div`
    .schedule{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    p{
        padding: 5%;
        text-align: left;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .image{
        display: flex;
        width: 45%;
        height: 40vh;
        border-radius: 15px;
        background-position: center;
        justify-content: center;
        background-repeat: no-repeat;
    }

    .one{
        background-image: url(${playing});
    }
    .two{
        background-image: url(${circle});
    }
    .three{
        background-image: url(${lesson});
    }
    .four{
        background-image: url(${singing});
    }
    .last{
        display: flex;
        width: 80%;
        justify-content: right;
        align-items: center;
    }
    .last p{
        width: 100%;
    }


`

function Glimpse(){
    return(
        <div className='Glimpse'>
            <GlimpseDiv>
                <h1>A Glimpse into our Day to Day!</h1>
                <div className='schedule'>
                    <p>Open play - This is an important time for children to learn how to communicate with each other. It allows children to use their creativity and imagination while developing their physical abilities.</p>
                    <div className='image one'></div>
                    <div className='image two'></div>
                    <p>Circle time - This is where we practice our alphabet as well as learn about the day of the week, month, and weather. </p>
                    <p>Lesson - Whether the lesson is a letter spotlight, learning about emotions, community helpers, or anything in between, we will be working on art and movement and focusing on both fine and gross motor skills. </p>
                    <div className='image three'></div>
                    <div className='image four'></div>
                    <p>Music and stories are a huge focus every day and of course, we cannot forget snack time!</p>
                    <div className='last'>
                        <p>Each class will only have up to eight kids so everyone will be able to get tailored assistance.</p>         
                    </div>
                </div>
            </GlimpseDiv>
        </div>
    )
}

export default Glimpse