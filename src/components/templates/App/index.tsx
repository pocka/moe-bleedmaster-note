import * as React from 'react'

import styled from '~/themes'

import Text from '~/components/atoms/Text'

import Menu from '~/components/organisms/Menu'

export interface Props {
  /** コンテンツタイトル */
  title: string
}

const App: React.SFC<Props> = ({ children, title }) => (
  <Container>
    <MenuContainer>
      <BorderedMenu />
    </MenuContainer>
    <SubContainer>
      <ScrollableContainer>
        <Title>
          <Text>{title}</Text>
        </Title>
        {children}
      </ScrollableContainer>
    </SubContainer>
  </Container>
)

export default App

const Container = styled.div`
  /* layouts */
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  width: 850px;
  margin: auto;

  /* appearance */
  background-color: #fff;
`

const SubContainer = styled.div`
  /* layouts */
  padding: ${p => p.theme.sizes.medium}px;
`

const MenuContainer = SubContainer.extend`
  /* layouts */
  flex-basis: 200px;
`

const BorderedMenu = styled(Menu)`
  /* layouts */
  box-sizing: border-box;

  /* appearance */
  border-right: 1px solid #eee;
`

const ScrollableContainer = styled.div`
  /* layouts */
  width: 100%;
  max-height: 100%;

  /* appearance */
  overflow: auto;
`

const Title = styled.h1`
  /* layouts */
  margin: 0;
  padding: 0;
  padding-bottom: ${p => p.theme.sizes.extraLarge}px;

  /* appearance */
  text-align: center;
`
