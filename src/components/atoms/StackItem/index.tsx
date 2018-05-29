import * as React from 'react'

import styled from 'styled-components'

export interface Props {
  /**
   * アイテムの余白の大きさ
   * @default medium
   */
  padding?: 'small' | 'medium' | 'large'
  className?: string
}

const StackItem: React.SFC<Props> = ({
  padding = 'medium',
  children,
  className
}) => (
  <Container padding={padding} className={className}>
    {children}
  </Container>
)

export default StackItem

const getPaddingSize = (padding: Required<Props>['padding']): number => {
  switch (padding) {
    case 'small':
      return 5
    case 'medium':
      return 20
    case 'large':
      return 40
  }
}

const Container = styled.div`
  /* layouts */
  padding: ${(p: Props) => getPaddingSize(p.padding!)}px 0;

  /* pseudo */
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`
