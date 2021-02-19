import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`;


const Title = (props) => {
    const {post} = props;

    return (
        <div>
            <StyledH1>Characters from<br></br> A Universe Far Far Away</StyledH1>
        </div>
    )
}

export default Title