import styled from 'styled-components';

const SchedulePricingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        color: #61dafb;
    }

    .info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .info p{
        color: #282C34;
    }
    span{
        font-size: 1.3rem;
        color: #61dafb;
    }
`

function SchedulePricing(){
    return(
        <div className='schedulePricing'>
            <SchedulePricingDiv>
                <h1>Schedule & Pricing</h1>
                <p>*Age specified is the age they will be turning during the school year. All ages must be potty trained</p>
                <div className='info'>
                    <div className='threeyo'>
                        <h2>Three Year Old Classes <span>$90/month</span></h2>
                        <h4>Age 3 by September</h4>
                        <p>Classes are Tuesday and Thursday</p>
                        <p>Morning classes are 9am - 11:30am</p>
                        <p>Afternoon classes are 12pm - 2:30pm</p>
                        <p>$80 per month with a $55 non-refundable materials fee</p>
                    </div>
                    <div className='fouryo'>
                        <h2>Four Year Old Classes <span>$110/month</span></h2>
                        <h4>Age 4 by September</h4>
                        <p>Classes are Monday, Wednesday, and Friday</p>
                        <p>Morning classes are 9am - 11:30am</p>
                        <p>Afternoon classes are 12pm - 2:30pm</p>
                        <p>$100 per month with a $70 non-refundable materials fee</p>
                    </div>
                </div>
                <p>*Materials Fee covers supplies, field trips, and preschool shirt.</p>
            </SchedulePricingDiv>
        </div>
    )
}

export default SchedulePricing