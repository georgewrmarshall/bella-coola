import React from 'react'
import { styled } from 'twin.macro'

// Components
import { Hero } from '..'
import { Device } from '..'
import { Locations } from '..'
import { Backcountry } from '..'

// Styles
const StyledPageHome = styled.div``

export const PageHome = () => {
  return (
    <StyledPageHome>
      <Hero />
      <Device />
      <Locations />
      <Backcountry />
    </StyledPageHome>
  )
}
