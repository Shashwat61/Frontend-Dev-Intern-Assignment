import React from 'react'
import styled from 'styled-components'

function Session() {
    return (
        <Container>
        <p>SESSION AVAILABLITY</p>
        <PriceContainer>

        <CheckContainer>
           <input type="checkbox"/>
           <input type="checkbox"/>
           <input type="checkbox"/>
           

        </CheckContainer>
        <LabelContainer>
            <label>30 min</label>
            <label>60 min</label>
            <label>15 min</label>
           
        </LabelContainer>
    
        </PriceContainer>
        
       

    </Container>
    )
}

export default Session
const Container=styled.div`
padding:20px 10px;
p{
    margin-bottom:20px;
}
`;
const PriceContainer=styled.div`
display:flex;
align-items:center;
`;

const CheckContainer=styled.div`
display:flex;
flex-direction:column;

>input{
    height:20px;
    width:20px;
    margin:11px 5px 11px 0;
}

`;

const LabelContainer=styled.div`
display:flex;
flex-direction:column;
>label{
    padding:10px 2px 10px 0;

}
`;