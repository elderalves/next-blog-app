import { PostList } from "@/components/PostList"

export default function HomePage() {
  const post = [
    {
      _id: '123',
      title: 'Hello Next.js',
      author: { username: 'Daniel Bugl' }
    }
  ]

  return (
    <PostList posts={post} />
  )
}