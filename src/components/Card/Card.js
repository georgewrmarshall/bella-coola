import React from 'react'
import tw from 'twin.macro'

export const Card = ({ imageSrc, title, ...props }) => {
  return (
    <a
      css={[
        tw`relative overflow-hidden block h-64 rounded-lg transition`,
        `box-shadow: 0px 6px 14px rgba(45, 60, 149, 0);
        :hover {box-shadow: 0px 6px 14px rgba(45, 60, 149, 0.2);}
        @media (min-width: 640px) {
          height: 350px
        }`,
      ]}
      {...props}
    >
      <img
        css={[
          tw`absolute w-full z-0`,
          `top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; object-fit: cover;`,
        ]}
        src={imageSrc}
        alt={title}
      />
      <div css={[tw`flex items-center justify-center h-full relative p-5`]}>
        <h3 css={[tw`text-white text-center`]}>{title}</h3>
      </div>
    </a>
  )
}
