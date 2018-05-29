import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { select, withKnobs } from '@storybook/addon-knobs'

import Menu from './'

storiesOf('organisms/Menu', module)
  .addDecorator(withKnobs)
  .add(
    'basic usage',
    withInfo(`
      基本となるテキストコンポーネント
    `)(() => {
      const items = {
        exp: 'けいけんち',
        kakuue: 'かくうえ'
      }
      const activeItem = select('Active Item', items, 'exp')

      return (
        <Menu
          activeItem={activeItem}
          onChangeActive={action('onChangeActive')}
          onShowHelp={action('onShowHelp')}
        />
      )
    })
  )
