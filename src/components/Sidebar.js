import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Ratings from './Ratings'
import Price from './Price'
import Session from './Session'
import Language from './Language';
function Sidebar() {
    return (
        <SidebarContainer>
            <h3>Filters</h3>
            <SidebarCard>
                <Expertise>
                    <p>Expertise</p>
                    <Input>
                    <Search>
                   
                    <Button>
                       BRanding
                        
                       <CloseOutlinedIcon/>
                    </Button>
                   
                      <SearchOutlinedIcon/>
                    </Search>
                    </Input>
                    <Button>
                        Strategy
                        <CloseOutlinedIcon/>
                    </Button>

                </Expertise>
                <Expertise>
                    <p>Focus Area</p>
                    <Input>
                    <Search>
                   
                    <Button>
                       Focus Area
                        
                       <CloseOutlinedIcon/>
                    </Button>
                    <Button>
                       Focus Area
                        
                       <CloseOutlinedIcon/>
                    </Button>
                   
                      <SearchOutlinedIcon/>
                    </Search>
                    </Input>
                    <Row>

                    <Button>
                        Focus Area
                        <CloseOutlinedIcon/>
                    </Button>
                    <Button>
                        Focus Area
                        <CloseOutlinedIcon/>
                    </Button>
                    </Row>

                </Expertise>
            <Ratings/>
            <Price/>
            <Session/>
            <Language/>
            </SidebarCard>
           


        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer=styled.div`
margin-left:40px;
padding-top:3px;
flex:0.3;
p{
    color:grey;
}


`;


const SidebarCard=styled.div`
margin-top:20px;
border:1px solid lightgrey;
background-color:whitesmoke;
`;


const Expertise=styled.div`
padding-left:10px;
margin-bottom:30px;
>button{
    font-size:10px;
    background-color:green;
    border-radius:20px;
    height:25px;
    color:white;
    margin-left:5px;
    padding:10px;
    .MuiSvgIcon-root{
     font-size:15px;
     padding-left:5px;
    
    }
}
`;
const Input =styled.div`
padding-top:10px;
padding-right:10px;
`;
const Search=styled.div`
padding:2px 5px;
border:1px solid grey;
height:30px;
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:10px;
background-color:#eeebeb;
.MuiSvgIcon-root{
 color:green;   
}
>button{
    font-size:10px;
    background-color:blue;
    color:white;
    border-radius:20px;
    height:25px;
    padding:10px;
    .MuiSvgIcon-root{
     font-size:15px;
     padding-left:5px;
     color:white;
    }
   

}
`;

const Row=styled.div`
padding-left:6px;
max-width:74%;
display:flex;
justify-content:space-between;
>button{
       
    font-size:10px;
    background-color:green;
    color:white;
    border-radius:20px;
    height:25px;
    padding:10px;
    .MuiSvgIcon-root{
     font-size:15px;
     padding-left:5px;
    }
}`;