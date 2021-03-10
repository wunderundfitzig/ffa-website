import { PostListBlock } from 'lib/models/postListBlock'

export default function PostList(props: PostListBlock) {
  return (
    <section>
      {props.posts.map((post) => (
        <code key={post.slug}>{JSON.stringify(post)}</code>
      ))}
    </section>
  )
}
