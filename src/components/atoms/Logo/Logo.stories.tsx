import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'

import Logo from './'

storiesOf('atoms/Logo', module).add(
  'basic usage',
  withInfo(`
    ロゴ
  `)(() => <Logo />)
)
