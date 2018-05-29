import * as React from 'react'

import styled from 'styled-components'

export interface Props {
  /** クリックハンドラ */
  onClick?: ((ev: React.MouseEvent<HTMLAnchorElement>) => any) | (() => any)
}

const HelpButton: React.SFC<Props> = ({ onClick }) => (
  <Button role="button" onClick={onClick}>
    <Icon
      style={{ isolation: 'isolate' }}
      viewBox="0 0 34.32 47.1"
      width="34.32"
      height="47.1"
    >
      <defs>
        <clipPath id="_clipPath_k6R8diLtDK40h5JvDXArvxRBIqsSANOM">
          <rect width="34.32" height="47.1" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_k6R8diLtDK40h5JvDXArvxRBIqsSANOM)">
        <path
          d=" M 15.06 34.86 L 12.78 34.86 L 12.78 34.86 Q 11.76 34.86 11.04 34.14 L 11.04 34.14 L 11.04 34.14 Q 10.32 33.42 10.32 32.4 L 10.32 32.4 L 10.32 25.62 L 10.32 25.62 Q 10.32 24.6 11.07 23.88 L 11.07 23.88 L 11.07 23.88 Q 11.82 23.16 12.96 23.16 L 12.96 23.16 L 12.96 23.16 Q 20.04 23.16 23.58 21.21 L 23.58 21.21 L 23.58 21.21 Q 27.12 19.26 27.12 14.82 L 27.12 14.82 L 27.12 14.82 Q 27.12 11.28 24.03 9.24 L 24.03 9.24 L 24.03 9.24 Q 20.94 7.2 16.44 7.2 L 16.44 7.2 L 16.44 7.2 Q 13.2 7.2 10.65 8.37 L 10.65 8.37 L 10.65 8.37 Q 8.1 9.54 7.26 11.52 L 7.26 11.52 L 7.26 11.52 Q 6.9 12.42 6.42 12.84 L 6.42 12.84 L 6.42 12.84 Q 5.94 13.26 5.22 13.26 L 5.22 13.26 L 2.52 13.26 L 2.52 13.26 Q 1.5 13.26 0.75 12.63 L 0.75 12.63 L 0.75 12.63 Q 0 12 0 11.04 L 0 11.04 L 0 11.04 Q 0 10.62 0.06 10.5 L 0.06 10.5 L 0.06 10.5 Q 1.14 5.64 5.76 2.82 L 5.76 2.82 L 5.76 2.82 Q 10.38 0 16.5 0 L 16.5 0 L 16.5 0 Q 21.18 0 25.23 1.71 L 25.23 1.71 L 25.23 1.71 Q 29.28 3.42 31.8 6.72 L 31.8 6.72 L 31.8 6.72 Q 34.32 10.02 34.32 14.82 L 34.32 14.82 L 34.32 14.82 Q 34.32 22.08 29.7 26.01 L 29.7 26.01 L 29.7 26.01 Q 25.08 29.94 17.52 30.3 L 17.52 30.3 L 17.52 32.4 L 17.52 32.4 Q 17.52 33.42 16.8 34.14 L 16.8 34.14 L 16.8 34.14 Q 16.08 34.86 15.06 34.86 L 15.06 34.86 Z  M 17.52 41.88 L 17.52 44.7 L 17.52 44.7 Q 17.52 47.1 15.12 47.1 L 15.12 47.1 L 12.72 47.1 L 12.72 47.1 Q 10.32 47.1 10.32 44.7 L 10.32 44.7 L 10.32 41.88 L 10.32 41.88 Q 10.32 39.48 12.72 39.48 L 12.72 39.48 L 15.12 39.48 L 15.12 39.48 Q 17.52 39.48 17.52 41.88 L 17.52 41.88 Z "
          fillRule="evenodd"
          fill="rgb(0,0,0)"
        />
      </g>
    </Icon>
  </Button>
)

export default HelpButton

const Icon = styled.svg`
  /* layouts */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 33px;
`

const size = 70

const Button = styled.a`
  /* layouts */
  display: block;
  position: relative;
  width: ${size}px;
  height: ${size}px;

  /* appearance */
  border-radius: 50%;
  background-color: #f8d14e;

  /* misc */
  transition: transform 0.3s ease;
  cursor: pointer;

  /* pseudo */
  &:hover {
    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.97);
  }
`
