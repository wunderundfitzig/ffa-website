import { css } from '@emotion/core'
import SplitBanner from 'components/SplitBanner/SplitBanner'
import { PostListBlock } from 'lib/models/postListBlock'
import { PostListItem } from 'lib/wordpressApi'
import { transparentize } from 'polished'
import { colors, layout } from 'style'

const postPreviewStyle = css`
  ${layout.container};
  margin-top: 20px;
`

function PostPreview(props: PostListItem) {
  return (
    <SplitBanner
      title={props.title.rendered}
      image={{ url: '' }}
      color={transparentize(0.15, colors.beige)}
    >
      <p>{props.date}</p>
    </SplitBanner>
  )
}

export default function PostList(props: PostListBlock) {
  return (
    <section>
      {props.posts.map((post) => (
        <article key={post.slug} css={postPreviewStyle}>
          <PostPreview {...post} />
        </article>
      ))}
    </section>
  )
}
