import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function MentorCards() {
    return (
        <CardsContainer>
            <Header>

            <h3>Featured Experts</h3>
            <div><span>Best Match</span><KeyboardArrowDownIcon/></div>
            </Header>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
            


            

            
        </CardsContainer>
    )
}

export default MentorCards
const CardsContainer=styled.div`
padding:0 30px;
flex:0.7;
`;

const Header=styled.div`
display:flex;
justify-content:space-between;
/* align-items:center; */
>div{
    
    background-color:white;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:7px 10px;

}
`;