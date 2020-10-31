import React from 'react'
import { Link } from 'gatsby'
import tw from 'twin.macro'

// Images
import blcLogoImg from '../../assets/images/blc-logo.png'
import blcWordmarkImg from '../../assets/images/blc-wordmark.png'

export const Navbar = () => {
  return (
    <nav css={[tw`py-4 sm:(py-8) md:(absolute w-full z-10 py-10)`]}>
      <div css={[tw`container px-4 mx-auto md:(px-8)`]}>
        <Link href="/" css={[tw`flex items-center`]}>
          <img
            src={blcLogoImg}
            alt="logo"
            css={[tw`w-10 h-10 sm:(w-20 h-20)`]}
          />
          <img
            css={[`width: 200px;`, tw`h-auto ml-4 sm:(w-64) md:(w-auto  )`]}
            src={blcWordmarkImg}
            alt="wordmark"
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
