import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Text from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Text />, div)
  ReactDOM.unmountComponentAtNode(div)
})
