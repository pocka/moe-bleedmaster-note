import { configure } from '@storybook/react'

import { setDefaults } from '@storybook/addon-info'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.(js|tsx)$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// addon-info
setDefaults({
  inline: true
})

configure(loadStories, module)
