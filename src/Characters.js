import React from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledH3 = styled.h3`
    color: ${props => props.theme.baseColor};
    text-shadow: 6px 6px 10px #ec6e28;
    font-size: 165%;  
`;


 const Characters = (props) => {
     const { post, action } = props;
     console.log(post)
    return (
        <div className='chars'>
                <StyledH3>{post.name}</StyledH3>

                {
                <Details post={post} action={action} />
                }
        </div>
    )
}

export default Characters