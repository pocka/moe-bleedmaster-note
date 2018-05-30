import * as React from 'react'

import styled from '~/themes'

export interface Props {
  className?: string
}

const Stack: React.SFC<Props> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
)

export default Stack

const Container = styled.div`
  /* layouts */
  display: flex;
  flex-direction: column;
`
