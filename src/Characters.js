import React from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledH3 = styled.h3`
    color: #fff;
    text-shadow: 1px 1px 5px #443e3e;
    font-size: 150%;  
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