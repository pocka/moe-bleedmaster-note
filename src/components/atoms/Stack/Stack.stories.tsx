import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'
import { select, withKnobs } from '@storybook/addon-knobs'

import StackItem from '~/components/atoms/StackItem'
import Stack from './'

storiesOf('atoms/Stack', module)
  .addDecorator(withKnobs)
  .add(
    'basic usage',
    withInfo({
      text: `縦積みコンポーネント`,
      propTables: [Stack as any, StackItem as any]
    })(() => {
      const sizes = {
        small: 'small',
        medium: 'medium',
        large: 'large'
      }
      const size = select('Size', sizes, 'medium')

      return (
        <Stack>
          <StackItem padding={size}>1</StackItem>
          <StackItem padding={size}>2</StackItem>
          <StackItem padding={size}>3</StackItem>
        </Stack>
      )
    })
  )
