import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import HelpButton from './'

storiesOf('molecules/HelpButton', module).add(
  'basic usage',
  withInfo(`
    ヘルプボタン
  `)(() => {
    return <HelpButton onClick={action('click')} />
  })
)
