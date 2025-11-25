import Navigation from "../_components/Navigation"
import Counter from "../_components/Counter"

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()

  return (
    <div>
      <Navigation />

      <Counter count={posts.length} />

      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.name}</h2>
        </div>
      ))}
    </div>
  )
}