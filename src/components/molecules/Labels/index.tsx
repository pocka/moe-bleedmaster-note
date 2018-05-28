import * as React from 'react'

import Text from '~/components/atoms/Text'

export interface Props {
  /** テストだよ */
  label: string
}

const Labels: React.SFC<Props> = ({ label }) => (
  <div>
    <Text>{label}</Text>
    <Text>{label}</Text>
  </div>
)

export default Labels
