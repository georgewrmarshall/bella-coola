import React from 'react'
import tw, { styled } from 'twin.macro'

// Images
import backcountryImg from '../../assets/images/bg-skier.jpg'
import blcLogoImg from '../../assets/images/blc-logo.png'
import iconLeaf from '../../assets/images/icon-maple-leaf.svg'

const StyledBackcountry = styled.section`
  background-image: url(${backcountryImg});
  background-size: cover;
  background-position: 100% 0%;
  background-color: #f0f2ff;
  height: 700px;
`

export const Backcountry = () => {
  return (
    <StyledBackcountry css={[tw`py-10`]}>
      <div css={[tw`container mx-auto px-8`]}>
        <img src={blcLogoImg} alt="logo" css={[tw`mx-auto mb-8 w-20`]} />
        <p css={[tw`text-center mb-8`]}>
          These courses were designed and developed by{' '}
          <a
            href="https://backcountrylearning.com/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Backcountry Learning</strong>
          </a>
          .
        </p>
        <img src={iconLeaf} alt="leaf" css={[tw`mx-auto`]} />
      </div>
    </StyledBackcountry>
  )
}
