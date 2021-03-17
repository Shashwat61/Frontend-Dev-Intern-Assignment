import React from 'react'
import {data} from './data/data';
import styled from 'styled-components'
import GradeIcon from '@material-ui/icons/Grade';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TimerIcon from '@material-ui/icons/Timer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TitleIcon from '@material-ui/icons/Title';
function Card() {
    return (
        
        <CardContainer>

        {data.map(item=>(

            <>
                <CardImgContainer>
               <img src={item.Image}/>
               <p>Price <span>{item.price}</span></p>
                <p><GradeIcon/><span>{item.rating}</span></p>
           </CardImgContainer>
           <CardDetailsContainer>
               <CardHeader>
                

                   <h3>{item.head}</h3>
                  
                   <SideButtons>
                       <FavoriteBorderIcon/>
                       <button>View Profile</button>

                   </SideButtons>


               </CardHeader>
               <CardHeadingSmall>{item.founder}</CardHeadingSmall>
               <hr/>

               <CardLinks>
                   <p><TimerIcon/>{item.sessions}</p>
                   <p><LocationOnIcon/>{item.location}</p>
                   <p><TitleIcon/>{item.language}</p>
               </CardLinks>

               <Description>
                   <p>

               {item.description} 
                   </p>

               </Description>

               <SkillsContainer>
                   
                   
                <button>{item.Skills.marketing}</button>
                  <button>{item.Skills.seo}</button>
                  <button>{item.Skills.content}</button>
                  <button>{item.Skills.market}</button>
                   
                   
               </SkillsContainer>
           </CardDetailsContainer>
          
            
           </>
        ))}
        </CardContainer>
    )
}

export default Card

const CardContainer=styled.div`
max-width:100%;
padding:10px;
margin: 10px 0;
display:flex;
border:1px solid lightgrey;
background-color:whitesmoke;
`;
const CardImgContainer=styled.div`
flex:0.2;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
img{
    height:100px;
    width:100px;
    border-radius:999px;

}
>p{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    span{
        padding:5px;
    }
}
`;

const CardDetailsContainer=styled.div`
flex:0.8;
padding-left:20px;
`;

const CardHeader=styled.div`
padding:5px 10px;
display:flex;
justify-content:space-between;




`;
const SideButtons=styled.div`
display:flex;
align-items:center;
button{
    height:30px;
    margin:0 5px;
    background-color:darkorange;
    color:white;
    outline:none;
    border:none;
    border-radius:5px;
}
.MuiSvgIcon-root{
    color:darkorange;
}
`;
const CardHeadingSmall=styled.h4`
padding:5px 10px;
`;

const CardLinks=styled.div`
display:flex;
font-size:12px;
color:grey;
padding-bottom:20px;
p{display:flex;
    align-items:center;
    padding:10px 5px;
}
.MuiSvgIcon-root{
    font-size:18px;
}
`;
const Description=styled.div`

max-width:inherit;
p{
    font-size:13px;
    line-height:1rem;
}
`;

const SkillsContainer=styled.div`
padding:20px 0;

button{
    border:none;
    color:grey;
    background-color:#eeebeb;
    padding:4px;
    margin:0 8px;
    width:8rem;
    border-radius:50px;
}


`;