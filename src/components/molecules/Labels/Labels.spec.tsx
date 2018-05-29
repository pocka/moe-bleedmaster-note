import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Labels from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Labels label="foo" />, div)
  ReactDOM.unmountComponentAtNode(div)
})
