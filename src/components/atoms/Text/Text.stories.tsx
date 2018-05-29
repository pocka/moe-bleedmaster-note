import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'
import { select, text, withKnobs } from '@storybook/addon-knobs'

import Text from './'

storiesOf('atoms/Text', module)
  .addDecorator(withKnobs)
  .add(
    'basic usage',
    withInfo(`
      基本となるテキストコンポーネント
    `)(() => {
      const colors = {
        black: 'black',
        grey: 'grey'
      }
      const sizes = {
        small: 'small',
        medium: 'medium',
        large: 'large',
        'extra large': 'extra large'
      }

      const size = select('Size', sizes, 'medium')
      const label = text('Label', '吾輩は猫である')
      const color = select('Color', colors, 'black')

      return (
        <Text size={size} color={color}>
          {label}
        </Text>
      )
    })
  )
