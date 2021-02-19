import React, { useState, useEffect} from 'react'
import {URL} from './URL'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: ${props => props.theme.baseColor};
    font-size: 135%;
    text-shadow: 6px 6px 10px #b4003d;
`;

const StyledDiv2 = styled.div`
    line-height: 1.5;
    font-variant: small-caps;
`;

const StyledP = styled.p`
    margin: 0 50px 0 50px;
    color: ${props => props.theme.baseColor};
    text-shadow: 6px 6px 10px #1375ea;
    font-size: 110%;
`;

const Details = (props) => {
    const {post, action} = props
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const fetchData = () => {
          axios
          .get(`${URL}`)
          .then(res =>{
            setDetails(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        }
        fetchData();
      }, []);

    return (
        <div className='container'>
            <StyledDiv>Details:</StyledDiv>
            {
                details &&
                <>
                <StyledDiv2>
                <StyledP>This beaut is {post.height}cm weighing in at {post.mass}kg</StyledP>
                <StyledP>They have {post.eye_color} eyes which many believe compliment their {post.skin_color} complexion quite well 🥵 🥴</StyledP>
                </StyledDiv2>
                </>
            }
        </div>
    )
}

export default Details
