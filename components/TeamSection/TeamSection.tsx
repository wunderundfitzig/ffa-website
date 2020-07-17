import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints } from 'style'
import { TeamBlock } from 'lib/models/teamBlock'

const TeamSection = (props: TeamBlock) => {
  return <div>{props.title}</div>
}

export default TeamSection
