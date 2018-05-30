import * as React from 'react'

import { configure, addDecorator } from '@storybook/react'

import { setDefaults } from '@storybook/addon-info'

import { ThemeProvider } from 'styled-components'
import theme from '../src/themes/default'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.(js|tsx)$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addon-info
setDefaults({
  inline: true
})

addDecorator(Story => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
))

configure(loadStories, module)
