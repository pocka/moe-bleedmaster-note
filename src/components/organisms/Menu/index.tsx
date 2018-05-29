import * as React from 'react'

import styled from 'styled-components'

import Logo from '~/components/atoms/Logo'
import Stack from '~/components/atoms/Stack'
import StackItem from '~/components/atoms/StackItem'
import Text from '~/components/atoms/Text'

import HelpButton from '~/components/molecules/HelpButton'

export interface Props {
  /**
   * 選択されているメニュー項目
   * @default exp
   */
  activeItem?: 'exp' | 'kakuue'
  className?: string
  /**
   * 項目が選択された場合のハンドラ
   */
  onChangeActive?: (item: Required<Props>['activeItem']) => any
  /**
   * ヘルプ表示ボタンが押された場合のハンドラ
   */
  onShowHelp?: () => any
}

const Menu: React.SFC<Props> = ({
  activeItem = 'exp',
  className,
  onChangeActive,
  onShowHelp
}) => {
  const activeExp = () =>
    activeItem !== 'exp' && onChangeActive && onChangeActive('exp')
  const activeKakuue = () =>
    activeItem !== 'kakuue' && onChangeActive && onChangeActive('kakuue')

  const showHelp = () => onShowHelp && onShowHelp()

  return (
    <Container className={className}>
      <Row padding="large">
        <Logo />
      </Row>
      <Row padding="small">
        <MenuItem
          color={activeItem === 'exp' ? 'black' : 'grey'}
          onClick={activeExp}
        >
          けいけんち
        </MenuItem>
      </Row>
      <Row padding="small">
        <MenuItem
          color={activeItem === 'kakuue' ? 'black' : 'grey'}
          onClick={activeKakuue}
        >
          かくうえ
        </MenuItem>
      </Row>
      <Row padding="large">
        <HelpButton onClick={showHelp} />
      </Row>
    </Container>
  )
}

export default Menu

const Container = styled(Stack)`
  /* layouts */
  max-height: 90vh;
  min-height: 60vh;
  justify-content: space-between;
`

const Row = styled(StackItem)`
  display: flex;
  justify-content: space-around;
`

const MenuItem = styled(Text)`
  /* appearance */
  cursor: pointer;
`
