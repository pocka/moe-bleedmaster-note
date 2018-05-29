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
  font-size: ${(p: Props) => sizeToPixel(p.size!)}px;

  /* appearance */
  color: ${(p: Props) => (p.color === 'black' ? '#111' : '#888')};

  /* misc */
  font-family: 'Rounded Mplus 1c';
`

export interface Props {
  /**
   * フォントサイズ
   * @default medium
   */
  size?: 'small' | 'medium' | 'large' | 'extra large'
  /**
   * 文字色
   * @default black
   */
  color?: 'black' | 'grey'
  onClick?: ((ev: React.MouseEvent<HTMLSpanElement>) => any) | (() => any)
  className?: string
}

const Text: React.SFC<Props> = ({
  children,
  size = 'medium',
  color = 'black',
  onClick,
  className
}) => (
  <Span size={size} color={color} className={className} onClick={onClick}>
    {children}
  </Span>
)

export default Text
