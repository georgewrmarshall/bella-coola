import React from 'react'
import tw, { styled } from 'twin.macro'

// Images
import phoneImg from '../../assets/images/phone.png'

const StyledDevice = styled.section`
  background-color: #f0f2ff;

  h2 {
    font-size: 24px;
    line-height: 1.3;
    @media (min-width: 640px) {
      font-size: 32px;
    }
  }
`

export const Device = () => {
  return (
    <StyledDevice css={[tw`py-20 md:(py-32)`]}>
      <div css={[tw`container px-4 mx-auto md:(px-8)`]}>
        <div
          css={[
            tw`mx-auto bg-white pt-10 rounded-lg px-2 sm:(px-8) md:(pt-0) lg:(px-20)`,
            `max-width: 980px; box-shadow: 0px 6px 14px rgba(45, 60, 149, 0.1);`,
          ]}
        >
          <div css={[tw`md:(flex items-center)`]}>
            <div>
              <h2 css={[tw`text-center mb-8 md:(text-left mb-0)`]}>
                If you are taking the course on your phone or tablet, please
                make sure that it is <span css={[tw`text-red-600`]}>not</span>
                 on silent mode.
              </h2>
            </div>
            <div
              css={[
                tw`pt-5 md:(ml-5) mx-auto`,
                `max-width: 300px; flex: 0 0 300px`,
              ]}
            >
              <img src={phoneImg} alt="phone" css={[tw`w-full mx-auto`]} />
            </div>
          </div>
        </div>
      </div>
    </StyledDevice>
  )
}
