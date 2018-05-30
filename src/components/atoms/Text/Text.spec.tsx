import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Text from './'

import { ThemeProvider } from '~/themes'
import defaultTheme from '~/themes/default'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
      <Text />
    </ThemeProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
