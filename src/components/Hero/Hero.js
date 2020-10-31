import React from 'react'
import tw, { styled } from 'twin.macro'

// Images
import heroImg from '../../assets/images/hero.jpg'
import iconLeaf from '../../assets/images/icon-maple-leaf.svg'

const StyledHero = styled.section`
  position: relative;

  .bg-block {
    position: absolute;
    background-color: #f0f2ff;
    width: 42%;
    top: 0;
    left: 58%;
    height: 100%;
    z-index: 0;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    background: #d8d8d8;
    border-radius: 5px;
    box-shadow: 0px 22px 44px rgba(45, 60, 149, 0.2);
    height: calc(100% - 5rem);
    width: calc(50vw - 40px);
    max-width: 690px;
    background-image: url(${heroImg});
    background-position: 100% 0%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h1 {
    font-family: ProximaNova-Bold;
    line-height: 1.3;
    font-size: 32px;
    @media (min-width: 640px) {
      font-size: 42px;
    }
  }

  li {
    position: relative;
    padding-left: 32px;
    line-height: 1.7;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background-image: url(${iconLeaf});
      background-repeat: no-repeat;
    }
  }
`

export const Hero = () => {
  return (
    <StyledHero>
      <div className="bg-block" css={[tw`hidden md:(block)`]} />
      <div css={[tw`container px-4 mx-auto md:(px-8)`]}>
        <div css={[tw`md:(flex flex-wrap -mx-3 pt-32)`]}>
          <div css={[tw`md:(px-3 w-1/2 flex items-center)`]}>
            <div css={[tw`py-4 md:(py-10) lg:(pr-20)`]}>
              <h1 css={[tw`mb-8 md:(mb-10)`]}>
                Welcome to the Bella Coola Heli Sports online safety briefing
              </h1>
              <ul>
                <li css={[tw`text-base mb-4 sm:(text-lg mb-8)`]}>
                  This course should take you about 35 minutes to complete.
                </li>
                <li css={[tw`text-base mb-4 sm:(text-lg mb-8)`]}>
                  Even if you are experienced and confident in your skills, we
                  ask that all guests take this course prior to arriving at the
                  lodges.
                </li>
                <li css={[tw`text-base mb-4 sm:(text-lg mb-8)`]}>
                  It will help guests and guides to be on the same page and
                  follow the same procedures in an emergency situation.
                </li>
                <li css={[tw`text-base mb-4 sm:(text-lg mb-8)`]}>
                  Before starting the ski program, this course will be followed
                  up with an indoor and outdoor training session.
                </li>
                <li css={[tw`text-base mb-4 sm:(text-lg mb-8)`]}>
                  Each lodge has its own specific safety briefing.
                </li>
              </ul>
            </div>
          </div>
          <div css={[tw`my-3 px-3 w-1/2`]}>
            <div css={[tw`relative h-full`]}>
              <div className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  )
}
