import * as React from 'react'

import styled from 'styled-components'

const sizeToPixel = (s: Required<Props>['size']): number => {
  switch (s) {
    case 'small':
      return 18
    case 'medium':
      return 24
    case 'large':
      return 36
    case 'extra large':
      return 48
  }
}

const Span = styled.span`
  /* layouts */
  font-size: ${(p: Required<Props>) => sizeToPixel(p.size)}px;

  /* appearance */
  color: #111;

  /* misc */
  font-family: 'Rounded Mplus 1c';
`

export interface Props {
  /**
   * フォントサイズ
   * @default medium
   */
  size?: 'small' | 'medium' | 'large' | 'extra large'
}

const Text: React.SFC<Props> = ({ children, size = 'medium' }) => (
  <Span size={size}>{children}</Span>
)

export default Text
