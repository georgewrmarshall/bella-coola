import React from 'react'
import { Global, css } from '@emotion/core'

const styles = css`
  body {
    font-family: Raleway, sans-serif;
    font-weight: 400;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Raleway, sans-serif;
    font-weight: 900;
  }

  p {
    margin-top: 0;
    line-height: 1.7;
  }
`

export const Layout = ({ children }) => (
  <>
    <Global styles={styles} />
    {children}
  </>
)
