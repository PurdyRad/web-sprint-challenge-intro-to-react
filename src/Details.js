import React, { useState, useEffect} from 'react'
import {URL} from './URL'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: #acd064;
    font-size: 115%;
`;


const StyledP = styled.p`
    margin: 0 50px 0 50px;
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
                <StyledP>This beaut is {post.height}cm weighing in at {post.mass}kg</StyledP>
                <StyledP>They have {post.eye_color} eyes which many believe compliment their {post.skin_color} complexion quite well 🥵 🥴</StyledP>
                </>
            }
        </div>
    )
}

export default Details
