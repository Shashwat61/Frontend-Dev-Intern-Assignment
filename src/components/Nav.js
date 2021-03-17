import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import image from './image.jpg'
function Nav() {
    return (
        <NavContainer>
            <LogoContainer>
                <FiberManualRecordIcon/>
                <p>Logo</p>
            </LogoContainer>

            <LinkContainer>
            <ul>
                <li>Dashboard</li>
                <li>Find Experts</li>
                <li>Discussion</li>
            </ul>
            <Line/>

            </LinkContainer>

            <FeatureContainer>
                <NotificationsNoneOutlinedIcon/>
                <SmsOutlinedIcon/>
                <img src={`${image}`} />
                <KeyboardArrowDownIcon/>



            </FeatureContainer>



            
        </NavContainer>
    )
}

export default Nav
const NavContainer=styled.div`
padding-left:15px;
padding-right:50px;
display:flex;
justify-content:space-between;
height:60px;
background-color:#f8f1f1;
border:1px solid lightgrey;
margin-bottom:60px;
`;

const LogoContainer=styled.div`
display:flex;
align-items:center;
p{
    padding-left:10px;
    font-weight:500;
    font-size:18px;
}
.MuiSvgIcon-root{
    color:green;

}`;




const LinkContainer=styled.div`
margin-left:50px;
display:flex;
justify-content:center;
align-items:center;
ul{
    
    list-style:none;
    display:flex;
    li{
        font-weight:500;
        margin:0 50px;
    }
    li:nth-child(2){
        color:orange;
    }
    
}
`;
const Line=styled.div`
height:3px;
width:6.8em;
position:absolute;
top:62px;
left:34.5em;
background-color:darkorange;
border-radius:10px;
`;

const FeatureContainer=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
padding-right:10px;

.MuiSvgIcon-root{
    color:darkorange;
    margin:0 10px;
}

img{
    margin:0 10px;
    height:1.5rem;
    width:1.5rem;
    border-radius:999px;
}
 




`;
// const KeyboardArrowDownIcon=styled.div`
// margin-left:-10px;
// `;
