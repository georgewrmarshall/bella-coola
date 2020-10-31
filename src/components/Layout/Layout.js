import React from 'react'
import { Global, css } from '@emotion/core'

// Fonts
import ProximaNovaRegularWoff2 from '../../assets/fonts/ProximaNova-Regular.woff2'
import ProximaNovaRegularWoff from '../../assets/fonts/ProximaNova-Regular.woff'
import ProximaNovaRegularTtf from '../../assets/fonts/ProximaNova-Regular.ttf'
import ProximaNovaRegularSvg from '../../assets/fonts/ProximaNova-Regular.svg'

import ProximaNovaBoldWoff2 from '../../assets/fonts/ProximaNova-Bold.woff2'
import ProximaNovaBoldWoff from '../../assets/fonts/ProximaNova-Bold.woff'
import ProximaNovaBoldTtf from '../../assets/fonts/ProximaNova-Bold.ttf'
import ProximaNovaBoldSvg from '../../assets/fonts/ProximaNova-Bold.svg'

const styles = css`
  @font-face {
    font-family: 'ProximaNova-Regular';
    src: local('ProximaNova-Regular'), local('ProximaNova-Regular;'),
      url(${ProximaNovaRegularWoff2}) format('woff2'),
      url(${ProximaNovaRegularWoff}) format('woff'),
      url(${ProximaNovaRegularTtf}) format('truetype'),
      url(${ProximaNovaRegularSvg}) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'ProximaNova-Bold';
    src: local('ProximaNova-Bold'), local('ProximaNova-Bold;'),
      url(${ProximaNovaBoldWoff2}) format('woff2'),
      url(${ProximaNovaBoldWoff}) format('woff'),
      url(${ProximaNovaBoldTtf}) format('truetype'),
      url(${ProximaNovaBoldSvg}) format('svg');
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }
  body {
    font-family: ProximaNova-Regular, sans-serif;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ProximaNova-Bold, sans-serif;
  }

  p {
    margin-top: 0;
    line-height: 1.7;
  }
`

export const Layout = ({ children }) => (
  <>
    <Global style={styles} />
    {children}
  </>
)
