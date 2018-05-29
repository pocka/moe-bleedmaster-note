import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'

import Text from './'

storiesOf('atoms/Text', module)
  .add(
    'basic usage',
    withInfo(`
      基本となるテキストコンポーネント
    `)(() => <Text>Foo</Text>)
  )
  .add('foo', () => <Text>Bar</Text>)
