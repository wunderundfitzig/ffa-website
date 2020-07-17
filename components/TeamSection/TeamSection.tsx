import { css } from '@emotion/core'
import { layout, colors, typography, breakpoints } from 'style'
import { TeamBlock, TeamCategory } from 'lib/models/teamBlock'
import WideImage from 'components/WideImage/WideImage'

function getColor(category: TeamCategory) {
  switch (category) {
    case 'house':
      return colors.darkGreen
    case 'educators':
      return colors.darkBlue
    case 'kita':
      return colors.brown
    case 'others':
      return colors.lightGreen
  }
}

const TeamSection = (props: TeamBlock) => {
  return (
    <section>
      <header>
        <WideImage
          asHeader
          text={props.title}
          image={props.image}
          color={getColor(props.category)}
        />
      </header>
    </section>
  )
}

export default TeamSection
