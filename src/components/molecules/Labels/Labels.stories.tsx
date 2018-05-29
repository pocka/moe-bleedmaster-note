import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { withInfo } from '@storybook/addon-info'

import Labels from './'

storiesOf('molecules/Labels', module).add(
  'basic usage',
  withInfo(`
    てすとだよ〜
  `)(() => <Labels label="foo" />)
)
