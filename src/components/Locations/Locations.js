import React from 'react'
import tw, { styled } from 'twin.macro'

// Components
import { Card } from '../Card'

// Images
import eagleLodgeImg from '../../assets/images/eagle-lodge.jpg'
import mysteryMountainImg from '../../assets/images/mystery-mountain.jpg'
import pantheonImg from '../../assets/images/pantheon.jpg'
import terraImg from '../../assets/images/terra.jpg'
import tweedsmuirImg from '../../assets/images/tweedsmuir.jpg'

const StyledLocations = styled.section`
  background-color: #f0f2ff;

  h2,
  h3 {
    font-size: 24px;
    line-height: 1.3;
    @media (min-width: 640px) {
      font-size: 42px;
    }
  }
`

export const Locations = () => {
  return (
    <StyledLocations css={[tw`md:(py-20)`]}>
      <div css={[tw`container mx-auto px-4 sm:(px-8)`]}>
        <h2 css={[tw`text-center mb-10`, tw`sm:(w-10/12 mx-auto mb-20)`]}>
          Click on the location that you will be visiting to access the correct
          safety briefing.
        </h2>
        <div css={[tw`-m-2 md:(flex justify-center flex-wrap)`]}>
          <div css={[tw`p-2 sm:(w-1/2 p-5) md:(w-1/2 p-5) lg:(w-1/3)`]}>
            <Card
              title="Tweedsmuir Park Lodge"
              imageSrc={tweedsmuirImg}
              href="#"
            />
          </div>
          <div css={[tw`p-2 sm:(w-1/2 p-4) md:(w-1/2 p-4) lg:(w-1/3)`]}>
            <Card title="Eagle Lodge" imageSrc={eagleLodgeImg} href="#" />
          </div>
          <div css={[tw`p-2 sm:(w-1/2 p-5) md:(w-1/2 p-5) lg:(w-1/3)`]}>
            <Card title="Pantheon Heli Ranch" imageSrc={pantheonImg} href="#" />
          </div>
          <div css={[tw`p-2 sm:(w-1/2 p-5) md:(w-1/2 p-5) lg:(w-1/3)`]}>
            <Card
              title="Mystery Mountain Lodge"
              imageSrc={mysteryMountainImg}
              href="#"
            />
          </div>
          <div css={[tw`p-2 sm:(w-1/2 p-5) md:(w-1/2 p-5) lg:(w-1/3)`]}>
            <Card
              title="Terra Nostra Guest Ranch"
              imageSrc={terraImg}
              href="#"
            />
          </div>
        </div>
      </div>
    </StyledLocations>
  )
}
