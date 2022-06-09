import React from 'react'
import styled from 'styled-components'
import {FaCircle} from 'react-icons/fa'

const BulletContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-right: 3rem;

    
`
const Bullet = styled(FaCircle)`
    color: black;
    margin: 0.2rem;
    display: block;

    &.active {
        color: white;
        border: 3px solid black;
        border-radius: 50%;
    }

`

const LeftFastAccess = () => {
  return (
    <BulletContainer>
        <Bullet id='intro'/>
        <Bullet id='about'/>
        <Bullet id='stack'/>
        <Bullet id='projects'/>
        <Bullet id='contact'/>
    </BulletContainer>
  )
}

export default LeftFastAccess