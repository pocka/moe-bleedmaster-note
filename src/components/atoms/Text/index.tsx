import * as React from 'react'

import styled, { ThemedStyledProps } from '~/themes'

/**
 * propsのサイズ表記をテーマのサイズ表記にマッピングする
 * @param size
 */
const mapSize = (size: Required<Props>['size']) =>
  size === 'extra large' ? 'extraLarge' : size

const Span = styled.span`
  /* layouts */
  font-size: ${(p: ThemedStyledProps<Props>) =>
    p.theme!.sizes[mapSize(p.size!)]}px;

  /* appearance */
  color: ${(p: ThemedStyledProps<Props>) =>
    p.color === 'black'
      ? p.theme!.colors.foreground
      : p.theme!.colors.foregroundLight};

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
