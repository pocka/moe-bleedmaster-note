import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { text, withKnobs } from '@storybook/addon-knobs'

import App from './'

const dummyString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'.repeat(
  300
)

storiesOf('templates/App', module)
  .addDecorator(withKnobs)
  .add('template', () => (
    <App title={text('Title', 'title')}>{dummyString}</App>
  ))
