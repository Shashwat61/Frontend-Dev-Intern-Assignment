import React from 'react'
import styled from 'styled-components'
import GradeIcon from '@material-ui/icons/Grade';

function Ratings() {
    return (
        <RatingContainer>
            <p>RATINGS</p>
            <Container>
               <ColumnOne>
                   <input type="checkbox" checked/>
                   
                   <GradeIcon/>
                   <GradeIcon/>
                   <GradeIcon/>
                   <GradeIcon/>
                 

               </ColumnOne>

               <ColumnTwo>
               <input type="checkbox"/>
                   
                   <GradeIcon/>
                   <GradeIcon/>
                   <GradeIcon/>

               </ColumnTwo>
               

                </Container>
                <Container>
                <ColumnThree>
                   <input type="checkbox"/>
                   
                   <GradeIcon/>
                   <GradeIcon/>
                   <GradeIcon/>
                  
                 

               </ColumnThree>

               <ColumnFour>
               <input type="checkbox"/>
                   
                   <GradeIcon/>
                   <GradeIcon/>
                   

               </ColumnFour>

                    </Container>
                    


           

            
            
        </RatingContainer>
    )
}

export default Ratings

const RatingContainer=styled.div`
p{
    margin-bottom:10px;
}
margin-top:70px;
padding-left:10px;
`;

const Container=styled.div`
display:flex;
padding-bottom:10px;

input{
    background-color:green;
    height:20px;
    width:20px;
}

.MuiSvgIcon-root{
    
    font-size:16px;
    margin:4px;
    color:orange;
}`;

const ColumnOne=styled.div`
flex:0.3;
display:flex;
align-items:center;
input[type=checkbox]{
    background-color:green;
}
`;

const ColumnTwo=styled.div`
display:flex;
align-items:center;
padding-left:10px;
`;

const ColumnThree=styled.div`
display:flex;
align-items:center;

`;

const ColumnFour=styled.div`
display:flex;
align-items:center;
padding-left:34px;`;
